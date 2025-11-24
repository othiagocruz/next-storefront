import { useState, useMemo, useCallback } from "react";
import { GetProductsQuery } from "./generated/graphql";
import { ProductAttribute } from "@/components/products/ProductCard";

export interface SelectedAttributes {
  [key: string]: string;
}

export interface UseVariantSelectorReturn {
  selectedAttributes: SelectedAttributes;
  currentVariant: GetProductsQuery["products_new"][0]["product_variants"][0];
  availableAttributes: { [key: string]: string[] };
  isAttributeAvailable: (attributeName: string, value: string) => boolean;
  selectAttribute: (attributeName: string, value: string) => void;
}

export const useVariantSelector = (
  product: GetProductsQuery["products_new"][0]
): UseVariantSelectorReturn => {
  const firstVariant = product.product_variants[0];

  // Helper function to get attribute name from variant attribute
  const getAttributeNameFromVariant = useCallback(
    (
      variantAttr: (typeof firstVariant.variant_attributes)[0],
      productData: typeof product
    ): string | null => {
      const displayName =
        variantAttr.attribute_value.product_attribute?.display_name;
      if (!displayName) return null;

      // Find the corresponding attribute in the summary
      const summaryAttr =
        productData.product_attributes_summary?.grouped_attributes.find(
          (attr: ProductAttribute) =>
            attr.display_name.toLowerCase() === displayName.toLowerCase() ||
            attr.attribute_name === displayName.toLowerCase()
        );

      return summaryAttr?.attribute_name || displayName.toLowerCase();
    },
    [firstVariant]
  );

  // Create initial selected attributes from first variant
  const initialAttributes = (): SelectedAttributes => {
    const attributes: SelectedAttributes = {};
    firstVariant.variant_attributes.forEach((attr) => {
      const attributeName = getAttributeNameFromVariant(attr, product);
      if (attributeName) {
        attributes[attributeName] = attr.attribute_value.value;
      }
    });
    return attributes;
  };

  const [selectedAttributes, setSelectedAttributes] =
    useState<SelectedAttributes>(initialAttributes);

  // Get current selected variant
  const currentVariant = useMemo(() => {
    const variant = product.product_variants.find((variant) =>
      variant.variant_attributes.every((attr) => {
        const attributeName = getAttributeNameFromVariant(attr, product);
        if (!attributeName) return false;
        return selectedAttributes[attributeName] === attr.attribute_value.value;
      })
    );
    return variant || firstVariant;
  }, [product, firstVariant, getAttributeNameFromVariant, selectedAttributes]);

  // Get available values for each attribute
  const availableAttributes = useMemo((): { [key: string]: string[] } => {
    const available: { [key: string]: string[] } = {};

    product.product_attributes_summary!.grouped_attributes.forEach(
      (attr: ProductAttribute) => {
        // Get all possible values for this attribute from summary
        const allValues = attr.available_values.map((av) => av.value);

        // Find variants that match the currently selected attributes for OTHER attributes
        const matchingVariants = product.product_variants.filter((variant) => {
          return variant.variant_attributes.every((variantAttr) => {
            const variantAttrName = getAttributeNameFromVariant(
              variantAttr,
              product
            );
            if (!variantAttrName) return true;

            // Skip the current attribute we're checking availability for
            if (variantAttrName === attr.attribute_name) return true;

            // For other attributes, check if they match the selected values
            const selectedValue = selectedAttributes[variantAttrName];
            if (selectedValue) {
              return variantAttr.attribute_value.value === selectedValue;
            }

            // If no selection for this attribute, don't filter by it
            return true;
          });
        });

        // Get unique available values for this attribute from matching variants
        const availableValues = Array.from(
          new Set(
            matchingVariants
              .map((variant) => {
                const attribute = variant.variant_attributes.find((va) => {
                  const attrName = getAttributeNameFromVariant(va, product);
                  return attrName === attr.attribute_name;
                });
                return attribute?.attribute_value.value;
              })
              .filter((value): value is string => Boolean(value))
          )
        );

        // Use available values if we have any, otherwise fall back to all possible values
        available[attr.attribute_name] =
          availableValues.length > 0 ? availableValues : allValues;
      }
    );

    return available;
  }, [product, getAttributeNameFromVariant, selectedAttributes]);

  const isAttributeAvailable = (
    attributeName: string,
    value: string
  ): boolean => {
    return availableAttributes[attributeName]?.includes(value) || false;
  };

  const selectAttribute = (attributeName: string, value: string): void => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attributeName]: value,
    }));
  };

  return {
    selectedAttributes,
    currentVariant,
    availableAttributes,
    isAttributeAvailable,
    selectAttribute,
  };
};
