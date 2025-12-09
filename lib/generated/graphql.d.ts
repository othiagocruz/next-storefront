export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  money: { input: string; output: string; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "attribute_price_adjustments" */
export type Attribute_Price_Adjustments = {
  __typename?: 'attribute_price_adjustments';
  adjustment: Scalars['numeric']['output'];
  adjustment_type?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  attribute_value?: Maybe<Attribute_Values>;
  attribute_value_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  product?: Maybe<Products_New>;
  product_id?: Maybe<Scalars['Int']['output']>;
};

/** order by aggregate values of table "attribute_price_adjustments" */
export type Attribute_Price_Adjustments_Aggregate_Order_By = {
  avg?: InputMaybe<Attribute_Price_Adjustments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Attribute_Price_Adjustments_Max_Order_By>;
  min?: InputMaybe<Attribute_Price_Adjustments_Min_Order_By>;
  stddev?: InputMaybe<Attribute_Price_Adjustments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Attribute_Price_Adjustments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Attribute_Price_Adjustments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Attribute_Price_Adjustments_Sum_Order_By>;
  var_pop?: InputMaybe<Attribute_Price_Adjustments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Attribute_Price_Adjustments_Var_Samp_Order_By>;
  variance?: InputMaybe<Attribute_Price_Adjustments_Variance_Order_By>;
};

/** order by avg() on columns of table "attribute_price_adjustments" */
export type Attribute_Price_Adjustments_Avg_Order_By = {
  adjustment?: InputMaybe<Order_By>;
  attribute_value_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "attribute_price_adjustments". All fields are combined with a logical 'AND'. */
export type Attribute_Price_Adjustments_Bool_Exp = {
  _and?: InputMaybe<Array<Attribute_Price_Adjustments_Bool_Exp>>;
  _not?: InputMaybe<Attribute_Price_Adjustments_Bool_Exp>;
  _or?: InputMaybe<Array<Attribute_Price_Adjustments_Bool_Exp>>;
  adjustment?: InputMaybe<Numeric_Comparison_Exp>;
  adjustment_type?: InputMaybe<String_Comparison_Exp>;
  attribute_value?: InputMaybe<Attribute_Values_Bool_Exp>;
  attribute_value_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Products_New_Bool_Exp>;
  product_id?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "attribute_price_adjustments" */
export type Attribute_Price_Adjustments_Max_Order_By = {
  adjustment?: InputMaybe<Order_By>;
  adjustment_type?: InputMaybe<Order_By>;
  attribute_value_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "attribute_price_adjustments" */
export type Attribute_Price_Adjustments_Min_Order_By = {
  adjustment?: InputMaybe<Order_By>;
  adjustment_type?: InputMaybe<Order_By>;
  attribute_value_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "attribute_price_adjustments". */
export type Attribute_Price_Adjustments_Order_By = {
  adjustment?: InputMaybe<Order_By>;
  adjustment_type?: InputMaybe<Order_By>;
  attribute_value?: InputMaybe<Attribute_Values_Order_By>;
  attribute_value_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_New_Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** select columns of table "attribute_price_adjustments" */
export enum Attribute_Price_Adjustments_Select_Column {
  /** column name */
  Adjustment = 'adjustment',
  /** column name */
  AdjustmentType = 'adjustment_type',
  /** column name */
  AttributeValueId = 'attribute_value_id',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id'
}

/** order by stddev() on columns of table "attribute_price_adjustments" */
export type Attribute_Price_Adjustments_Stddev_Order_By = {
  adjustment?: InputMaybe<Order_By>;
  attribute_value_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "attribute_price_adjustments" */
export type Attribute_Price_Adjustments_Stddev_Pop_Order_By = {
  adjustment?: InputMaybe<Order_By>;
  attribute_value_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "attribute_price_adjustments" */
export type Attribute_Price_Adjustments_Stddev_Samp_Order_By = {
  adjustment?: InputMaybe<Order_By>;
  attribute_value_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "attribute_price_adjustments" */
export type Attribute_Price_Adjustments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Attribute_Price_Adjustments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Attribute_Price_Adjustments_Stream_Cursor_Value_Input = {
  adjustment?: InputMaybe<Scalars['numeric']['input']>;
  adjustment_type?: InputMaybe<Scalars['String']['input']>;
  attribute_value_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "attribute_price_adjustments" */
export type Attribute_Price_Adjustments_Sum_Order_By = {
  adjustment?: InputMaybe<Order_By>;
  attribute_value_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "attribute_price_adjustments" */
export type Attribute_Price_Adjustments_Var_Pop_Order_By = {
  adjustment?: InputMaybe<Order_By>;
  attribute_value_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "attribute_price_adjustments" */
export type Attribute_Price_Adjustments_Var_Samp_Order_By = {
  adjustment?: InputMaybe<Order_By>;
  attribute_value_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "attribute_price_adjustments" */
export type Attribute_Price_Adjustments_Variance_Order_By = {
  adjustment?: InputMaybe<Order_By>;
  attribute_value_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "attribute_values" */
export type Attribute_Values = {
  __typename?: 'attribute_values';
  attribute_id?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  attribute_price_adjustments: Array<Attribute_Price_Adjustments>;
  display_order?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  product_attribute?: Maybe<Product_Attributes>;
  value: Scalars['String']['output'];
  /** An array relationship */
  variant_attributes: Array<Variant_Attributes>;
};


/** columns and relationships of "attribute_values" */
export type Attribute_ValuesAttribute_Price_AdjustmentsArgs = {
  distinct_on?: InputMaybe<Array<Attribute_Price_Adjustments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Attribute_Price_Adjustments_Order_By>>;
  where?: InputMaybe<Attribute_Price_Adjustments_Bool_Exp>;
};


/** columns and relationships of "attribute_values" */
export type Attribute_ValuesVariant_AttributesArgs = {
  distinct_on?: InputMaybe<Array<Variant_Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Variant_Attributes_Order_By>>;
  where?: InputMaybe<Variant_Attributes_Bool_Exp>;
};

/** order by aggregate values of table "attribute_values" */
export type Attribute_Values_Aggregate_Order_By = {
  avg?: InputMaybe<Attribute_Values_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Attribute_Values_Max_Order_By>;
  min?: InputMaybe<Attribute_Values_Min_Order_By>;
  stddev?: InputMaybe<Attribute_Values_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Attribute_Values_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Attribute_Values_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Attribute_Values_Sum_Order_By>;
  var_pop?: InputMaybe<Attribute_Values_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Attribute_Values_Var_Samp_Order_By>;
  variance?: InputMaybe<Attribute_Values_Variance_Order_By>;
};

/** order by avg() on columns of table "attribute_values" */
export type Attribute_Values_Avg_Order_By = {
  attribute_id?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "attribute_values". All fields are combined with a logical 'AND'. */
export type Attribute_Values_Bool_Exp = {
  _and?: InputMaybe<Array<Attribute_Values_Bool_Exp>>;
  _not?: InputMaybe<Attribute_Values_Bool_Exp>;
  _or?: InputMaybe<Array<Attribute_Values_Bool_Exp>>;
  attribute_id?: InputMaybe<Int_Comparison_Exp>;
  attribute_price_adjustments?: InputMaybe<Attribute_Price_Adjustments_Bool_Exp>;
  display_order?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  product_attribute?: InputMaybe<Product_Attributes_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
  variant_attributes?: InputMaybe<Variant_Attributes_Bool_Exp>;
};

/** order by max() on columns of table "attribute_values" */
export type Attribute_Values_Max_Order_By = {
  attribute_id?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "attribute_values" */
export type Attribute_Values_Min_Order_By = {
  attribute_id?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "attribute_values". */
export type Attribute_Values_Order_By = {
  attribute_id?: InputMaybe<Order_By>;
  attribute_price_adjustments_aggregate?: InputMaybe<Attribute_Price_Adjustments_Aggregate_Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_attribute?: InputMaybe<Product_Attributes_Order_By>;
  value?: InputMaybe<Order_By>;
  variant_attributes_aggregate?: InputMaybe<Variant_Attributes_Aggregate_Order_By>;
};

/** select columns of table "attribute_values" */
export enum Attribute_Values_Select_Column {
  /** column name */
  AttributeId = 'attribute_id',
  /** column name */
  DisplayOrder = 'display_order',
  /** column name */
  Id = 'id',
  /** column name */
  Value = 'value'
}

/** order by stddev() on columns of table "attribute_values" */
export type Attribute_Values_Stddev_Order_By = {
  attribute_id?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "attribute_values" */
export type Attribute_Values_Stddev_Pop_Order_By = {
  attribute_id?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "attribute_values" */
export type Attribute_Values_Stddev_Samp_Order_By = {
  attribute_id?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "attribute_values" */
export type Attribute_Values_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Attribute_Values_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Attribute_Values_Stream_Cursor_Value_Input = {
  attribute_id?: InputMaybe<Scalars['Int']['input']>;
  display_order?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** order by sum() on columns of table "attribute_values" */
export type Attribute_Values_Sum_Order_By = {
  attribute_id?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "attribute_values" */
export type Attribute_Values_Var_Pop_Order_By = {
  attribute_id?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "attribute_values" */
export type Attribute_Values_Var_Samp_Order_By = {
  attribute_id?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "attribute_values" */
export type Attribute_Values_Variance_Order_By = {
  attribute_id?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** products cart! */
export type Cart = {
  __typename?: 'cart';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "cart" */
export type Cart_Aggregate = {
  __typename?: 'cart_aggregate';
  aggregate?: Maybe<Cart_Aggregate_Fields>;
  nodes: Array<Cart>;
};

export type Cart_Aggregate_Bool_Exp = {
  count?: InputMaybe<Cart_Aggregate_Bool_Exp_Count>;
};

export type Cart_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Cart_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Cart_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cart" */
export type Cart_Aggregate_Fields = {
  __typename?: 'cart_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Cart_Max_Fields>;
  min?: Maybe<Cart_Min_Fields>;
};


/** aggregate fields of "cart" */
export type Cart_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cart_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "cart" */
export type Cart_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cart_Max_Order_By>;
  min?: InputMaybe<Cart_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "cart". All fields are combined with a logical 'AND'. */
export type Cart_Bool_Exp = {
  _and?: InputMaybe<Array<Cart_Bool_Exp>>;
  _not?: InputMaybe<Cart_Bool_Exp>;
  _or?: InputMaybe<Array<Cart_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cart" */
export enum Cart_Constraint {
  /** unique or primary key constraint on columns "user_id", "id", "product_id" */
  CartPkey = 'cart_pkey'
}

/** input type for inserting data into table "cart" */
export type Cart_Insert_Input = {
  product_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Cart_Max_Fields = {
  __typename?: 'cart_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "cart" */
export type Cart_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cart_Min_Fields = {
  __typename?: 'cart_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "cart" */
export type Cart_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cart" */
export type Cart_Mutation_Response = {
  __typename?: 'cart_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Cart>;
};

/** on_conflict condition type for table "cart" */
export type Cart_On_Conflict = {
  constraint: Cart_Constraint;
  update_columns?: Array<Cart_Update_Column>;
  where?: InputMaybe<Cart_Bool_Exp>;
};

/** Ordering options when selecting data from "cart". */
export type Cart_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "cart" */
export enum Cart_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** Streaming cursor of the table "cart" */
export type Cart_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cart_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cart_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** placeholder for update columns of table "cart" (current role has no relevant permissions) */
export enum Cart_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']['input']>;
  _gt?: InputMaybe<Scalars['money']['input']>;
  _gte?: InputMaybe<Scalars['money']['input']>;
  _in?: InputMaybe<Array<Scalars['money']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['money']['input']>;
  _lte?: InputMaybe<Scalars['money']['input']>;
  _neq?: InputMaybe<Scalars['money']['input']>;
  _nin?: InputMaybe<Array<Scalars['money']['input']>>;
};

/** columns and relationships of "money_result" */
export type Money_Result = {
  __typename?: 'money_result';
  result?: Maybe<Scalars['money']['output']>;
};

/** Boolean expression to filter rows from the table "money_result". All fields are combined with a logical 'AND'. */
export type Money_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Money_Result_Bool_Exp>>;
  _not?: InputMaybe<Money_Result_Bool_Exp>;
  _or?: InputMaybe<Array<Money_Result_Bool_Exp>>;
  result?: InputMaybe<Money_Comparison_Exp>;
};

/** Ordering options when selecting data from "money_result". */
export type Money_Result_Order_By = {
  result?: InputMaybe<Order_By>;
};

/** select columns of table "money_result" */
export enum Money_Result_Select_Column {
  /** column name */
  Result = 'result'
}

/** Streaming cursor of the table "money_result" */
export type Money_Result_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Money_Result_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Money_Result_Stream_Cursor_Value_Input = {
  result?: InputMaybe<Scalars['money']['input']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "cart" */
  delete_cart?: Maybe<Cart_Mutation_Response>;
  /** delete single row from the table: "cart" */
  delete_cart_by_pk?: Maybe<Cart>;
  /** delete data from the table: "product_likes" */
  delete_product_likes?: Maybe<Product_Likes_Mutation_Response>;
  /** delete single row from the table: "product_likes" */
  delete_product_likes_by_pk?: Maybe<Product_Likes>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "cart" */
  insert_cart?: Maybe<Cart_Mutation_Response>;
  /** insert a single row into the table: "cart" */
  insert_cart_one?: Maybe<Cart>;
  /** insert data into the table: "product_likes" */
  insert_product_likes?: Maybe<Product_Likes_Mutation_Response>;
  /** insert a single row into the table: "product_likes" */
  insert_product_likes_one?: Maybe<Product_Likes>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CartArgs = {
  where: Cart_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cart_By_PkArgs = {
  id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_LikesArgs = {
  where: Product_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Likes_By_PkArgs = {
  product_id: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_CartArgs = {
  objects: Array<Cart_Insert_Input>;
  on_conflict?: InputMaybe<Cart_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cart_OneArgs = {
  object: Cart_Insert_Input;
  on_conflict?: InputMaybe<Cart_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_LikesArgs = {
  objects: Array<Product_Likes_Insert_Input>;
  on_conflict?: InputMaybe<Product_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Likes_OneArgs = {
  object: Product_Likes_Insert_Input;
  on_conflict?: InputMaybe<Product_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "product_attributes" */
export type Product_Attributes = {
  __typename?: 'product_attributes';
  /** An array relationship */
  attribute_values: Array<Attribute_Values>;
  display_name: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};


/** columns and relationships of "product_attributes" */
export type Product_AttributesAttribute_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Attribute_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Attribute_Values_Order_By>>;
  where?: InputMaybe<Attribute_Values_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "product_attributes". All fields are combined with a logical 'AND'. */
export type Product_Attributes_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Attributes_Bool_Exp>>;
  _not?: InputMaybe<Product_Attributes_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Attributes_Bool_Exp>>;
  attribute_values?: InputMaybe<Attribute_Values_Bool_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "product_attributes". */
export type Product_Attributes_Order_By = {
  attribute_values_aggregate?: InputMaybe<Attribute_Values_Aggregate_Order_By>;
  display_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** select columns of table "product_attributes" */
export enum Product_Attributes_Select_Column {
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "product_attributes" */
export type Product_Attributes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Attributes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Attributes_Stream_Cursor_Value_Input = {
  display_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "product_attributes_summary" */
export type Product_Attributes_Summary = {
  __typename?: 'product_attributes_summary';
  grouped_attributes?: Maybe<Scalars['jsonb']['output']>;
  product_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  product_summary?: Maybe<Products_New>;
};


/** columns and relationships of "product_attributes_summary" */
export type Product_Attributes_SummaryGrouped_AttributesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "product_attributes_summary". All fields are combined with a logical 'AND'. */
export type Product_Attributes_Summary_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Attributes_Summary_Bool_Exp>>;
  _not?: InputMaybe<Product_Attributes_Summary_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Attributes_Summary_Bool_Exp>>;
  grouped_attributes?: InputMaybe<Jsonb_Comparison_Exp>;
  product_id?: InputMaybe<Int_Comparison_Exp>;
  product_summary?: InputMaybe<Products_New_Bool_Exp>;
};

/** Ordering options when selecting data from "product_attributes_summary". */
export type Product_Attributes_Summary_Order_By = {
  grouped_attributes?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  product_summary?: InputMaybe<Products_New_Order_By>;
};

/** select columns of table "product_attributes_summary" */
export enum Product_Attributes_Summary_Select_Column {
  /** column name */
  GroupedAttributes = 'grouped_attributes',
  /** column name */
  ProductId = 'product_id'
}

/** Streaming cursor of the table "product_attributes_summary" */
export type Product_Attributes_Summary_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Attributes_Summary_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Attributes_Summary_Stream_Cursor_Value_Input = {
  grouped_attributes?: InputMaybe<Scalars['jsonb']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "product_likes" */
export type Product_Likes = {
  __typename?: 'product_likes';
  /** An object relationship */
  product: Products_New;
  product_id: Scalars['Int']['output'];
  user_id: Scalars['uuid']['output'];
};

/** order by aggregate values of table "product_likes" */
export type Product_Likes_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Likes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Likes_Max_Order_By>;
  min?: InputMaybe<Product_Likes_Min_Order_By>;
  stddev?: InputMaybe<Product_Likes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Likes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Likes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Likes_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Likes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Likes_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Likes_Variance_Order_By>;
};

/** order by avg() on columns of table "product_likes" */
export type Product_Likes_Avg_Order_By = {
  product_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_likes". All fields are combined with a logical 'AND'. */
export type Product_Likes_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Likes_Bool_Exp>>;
  _not?: InputMaybe<Product_Likes_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Likes_Bool_Exp>>;
  product?: InputMaybe<Products_New_Bool_Exp>;
  product_id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_likes" */
export enum Product_Likes_Constraint {
  /** unique or primary key constraint on columns "user_id", "product_id" */
  ProductLikesPkey = 'product_likes_pkey'
}

/** input type for inserting data into table "product_likes" */
export type Product_Likes_Insert_Input = {
  product_id?: InputMaybe<Scalars['Int']['input']>;
};

/** order by max() on columns of table "product_likes" */
export type Product_Likes_Max_Order_By = {
  product_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "product_likes" */
export type Product_Likes_Min_Order_By = {
  product_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_likes" */
export type Product_Likes_Mutation_Response = {
  __typename?: 'product_likes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Likes>;
};

/** on_conflict condition type for table "product_likes" */
export type Product_Likes_On_Conflict = {
  constraint: Product_Likes_Constraint;
  update_columns?: Array<Product_Likes_Update_Column>;
  where?: InputMaybe<Product_Likes_Bool_Exp>;
};

/** Ordering options when selecting data from "product_likes". */
export type Product_Likes_Order_By = {
  product?: InputMaybe<Products_New_Order_By>;
  product_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "product_likes" */
export enum Product_Likes_Select_Column {
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UserId = 'user_id'
}

/** order by stddev() on columns of table "product_likes" */
export type Product_Likes_Stddev_Order_By = {
  product_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "product_likes" */
export type Product_Likes_Stddev_Pop_Order_By = {
  product_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "product_likes" */
export type Product_Likes_Stddev_Samp_Order_By = {
  product_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "product_likes" */
export type Product_Likes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Likes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Likes_Stream_Cursor_Value_Input = {
  product_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** order by sum() on columns of table "product_likes" */
export type Product_Likes_Sum_Order_By = {
  product_id?: InputMaybe<Order_By>;
};

/** placeholder for update columns of table "product_likes" (current role has no relevant permissions) */
export enum Product_Likes_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
}

/** order by var_pop() on columns of table "product_likes" */
export type Product_Likes_Var_Pop_Order_By = {
  product_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "product_likes" */
export type Product_Likes_Var_Samp_Order_By = {
  product_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "product_likes" */
export type Product_Likes_Variance_Order_By = {
  product_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "product_variants" */
export type Product_Variants = {
  __typename?: 'product_variants';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['Int']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  price: Scalars['numeric']['output'];
  /** An object relationship */
  product?: Maybe<Products_New>;
  product_id?: Maybe<Scalars['Int']['output']>;
  sku: Scalars['String']['output'];
  stock_quantity?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  variant_attributes: Array<Variant_Attributes>;
  /** An array relationship */
  variant_images: Array<Variant_Images>;
};


/** columns and relationships of "product_variants" */
export type Product_VariantsVariant_AttributesArgs = {
  distinct_on?: InputMaybe<Array<Variant_Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Variant_Attributes_Order_By>>;
  where?: InputMaybe<Variant_Attributes_Bool_Exp>;
};


/** columns and relationships of "product_variants" */
export type Product_VariantsVariant_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Variant_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Variant_Images_Order_By>>;
  where?: InputMaybe<Variant_Images_Bool_Exp>;
};

/** order by aggregate values of table "product_variants" */
export type Product_Variants_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Variants_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Variants_Max_Order_By>;
  min?: InputMaybe<Product_Variants_Min_Order_By>;
  stddev?: InputMaybe<Product_Variants_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Variants_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Variants_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Variants_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Variants_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Variants_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Variants_Variance_Order_By>;
};

/** order by avg() on columns of table "product_variants" */
export type Product_Variants_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  stock_quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_variants". All fields are combined with a logical 'AND'. */
export type Product_Variants_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Variants_Bool_Exp>>;
  _not?: InputMaybe<Product_Variants_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Variants_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  product?: InputMaybe<Products_New_Bool_Exp>;
  product_id?: InputMaybe<Int_Comparison_Exp>;
  sku?: InputMaybe<String_Comparison_Exp>;
  stock_quantity?: InputMaybe<Int_Comparison_Exp>;
  variant_attributes?: InputMaybe<Variant_Attributes_Bool_Exp>;
  variant_images?: InputMaybe<Variant_Images_Bool_Exp>;
};

/** order by max() on columns of table "product_variants" */
export type Product_Variants_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  sku?: InputMaybe<Order_By>;
  stock_quantity?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "product_variants" */
export type Product_Variants_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  sku?: InputMaybe<Order_By>;
  stock_quantity?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "product_variants". */
export type Product_Variants_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_New_Order_By>;
  product_id?: InputMaybe<Order_By>;
  sku?: InputMaybe<Order_By>;
  stock_quantity?: InputMaybe<Order_By>;
  variant_attributes_aggregate?: InputMaybe<Variant_Attributes_Aggregate_Order_By>;
  variant_images_aggregate?: InputMaybe<Variant_Images_Aggregate_Order_By>;
};

/** select columns of table "product_variants" */
export enum Product_Variants_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Sku = 'sku',
  /** column name */
  StockQuantity = 'stock_quantity'
}

/** order by stddev() on columns of table "product_variants" */
export type Product_Variants_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  stock_quantity?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "product_variants" */
export type Product_Variants_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  stock_quantity?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "product_variants" */
export type Product_Variants_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  stock_quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "product_variants" */
export type Product_Variants_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Variants_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Variants_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  stock_quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "product_variants" */
export type Product_Variants_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  stock_quantity?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "product_variants" */
export type Product_Variants_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  stock_quantity?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "product_variants" */
export type Product_Variants_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  stock_quantity?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "product_variants" */
export type Product_Variants_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  stock_quantity?: InputMaybe<Order_By>;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  amount: Scalars['money']['output'];
  /** An array relationship */
  carts: Array<Cart>;
  /** An aggregate relationship */
  carts_aggregate: Cart_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** A computed field, executes function "user_cart_sum" */
  user_cart_sum?: Maybe<Scalars['money']['output']>;
};


/** columns and relationships of "products" */
export type ProductsCartsArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cart_Order_By>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsCarts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cart_Order_By>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  amount?: InputMaybe<Money_Comparison_Exp>;
  carts?: InputMaybe<Cart_Bool_Exp>;
  carts_aggregate?: InputMaybe<Cart_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_cart_sum?: InputMaybe<Money_Comparison_Exp>;
};

/** columns and relationships of "products" */
export type Products_New = {
  __typename?: 'products_new';
  /** An array relationship */
  attribute_price_adjustments: Array<Attribute_Price_Adjustments>;
  base_price?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  product_attributes_summary?: Maybe<Product_Attributes_Summary>;
  /** An array relationship */
  product_likes: Array<Product_Likes>;
  /** An array relationship */
  product_variants: Array<Product_Variants>;
};


/** columns and relationships of "products" */
export type Products_NewAttribute_Price_AdjustmentsArgs = {
  distinct_on?: InputMaybe<Array<Attribute_Price_Adjustments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Attribute_Price_Adjustments_Order_By>>;
  where?: InputMaybe<Attribute_Price_Adjustments_Bool_Exp>;
};


/** columns and relationships of "products" */
export type Products_NewProduct_LikesArgs = {
  distinct_on?: InputMaybe<Array<Product_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Likes_Order_By>>;
  where?: InputMaybe<Product_Likes_Bool_Exp>;
};


/** columns and relationships of "products" */
export type Products_NewProduct_VariantsArgs = {
  distinct_on?: InputMaybe<Array<Product_Variants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Variants_Order_By>>;
  where?: InputMaybe<Product_Variants_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_New_Bool_Exp = {
  _and?: InputMaybe<Array<Products_New_Bool_Exp>>;
  _not?: InputMaybe<Products_New_Bool_Exp>;
  _or?: InputMaybe<Array<Products_New_Bool_Exp>>;
  attribute_price_adjustments?: InputMaybe<Attribute_Price_Adjustments_Bool_Exp>;
  base_price?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  product_attributes_summary?: InputMaybe<Product_Attributes_Summary_Bool_Exp>;
  product_likes?: InputMaybe<Product_Likes_Bool_Exp>;
  product_variants?: InputMaybe<Product_Variants_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_New_Order_By = {
  attribute_price_adjustments_aggregate?: InputMaybe<Attribute_Price_Adjustments_Aggregate_Order_By>;
  base_price?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  product_attributes_summary?: InputMaybe<Product_Attributes_Summary_Order_By>;
  product_likes_aggregate?: InputMaybe<Product_Likes_Aggregate_Order_By>;
  product_variants_aggregate?: InputMaybe<Product_Variants_Aggregate_Order_By>;
};

/** select columns of table "products" */
export enum Products_New_Select_Column {
  /** column name */
  BasePrice = 'base_price',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "products_new" */
export type Products_New_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_New_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_New_Stream_Cursor_Value_Input = {
  base_price?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  amount?: InputMaybe<Order_By>;
  carts_aggregate?: InputMaybe<Cart_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_cart_sum?: InputMaybe<Order_By>;
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['money']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  attribute_price_adjustments: Array<Attribute_Price_Adjustments>;
  /** fetch data from the table: "attribute_price_adjustments" using primary key columns */
  attribute_price_adjustments_by_pk?: Maybe<Attribute_Price_Adjustments>;
  /** An array relationship */
  attribute_values: Array<Attribute_Values>;
  /** fetch data from the table: "attribute_values" using primary key columns */
  attribute_values_by_pk?: Maybe<Attribute_Values>;
  /** fetch data from the table: "cart" */
  cart: Array<Cart>;
  /** fetch aggregated fields from the table: "cart" */
  cart_aggregate: Cart_Aggregate;
  /** fetch data from the table: "cart" using primary key columns */
  cart_by_pk?: Maybe<Cart>;
  /** execute function "cart_items" which returns "products" */
  cart_items: Array<Products>;
  /** execute function "cart_total" which returns "money_result" */
  cart_total: Array<Money_Result>;
  /** fetch data from the table: "money_result" */
  money_result: Array<Money_Result>;
  /** fetch data from the table: "product_attributes" */
  product_attributes: Array<Product_Attributes>;
  /** fetch data from the table: "product_attributes" using primary key columns */
  product_attributes_by_pk?: Maybe<Product_Attributes>;
  /** fetch data from the table: "product_attributes_summary" */
  product_attributes_summary: Array<Product_Attributes_Summary>;
  /** An array relationship */
  product_likes: Array<Product_Likes>;
  /** fetch data from the table: "product_likes" using primary key columns */
  product_likes_by_pk?: Maybe<Product_Likes>;
  /** An array relationship */
  product_variants: Array<Product_Variants>;
  /** fetch data from the table: "product_variants" using primary key columns */
  product_variants_by_pk?: Maybe<Product_Variants>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "products" */
  products_new: Array<Products_New>;
  /** fetch data from the table: "products" using primary key columns */
  products_new_by_pk?: Maybe<Products_New>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  variant_attributes: Array<Variant_Attributes>;
  /** fetch data from the table: "variant_attributes" using primary key columns */
  variant_attributes_by_pk?: Maybe<Variant_Attributes>;
  /** An array relationship */
  variant_images: Array<Variant_Images>;
  /** fetch data from the table: "variant_images" using primary key columns */
  variant_images_by_pk?: Maybe<Variant_Images>;
};


export type Query_RootAttribute_Price_AdjustmentsArgs = {
  distinct_on?: InputMaybe<Array<Attribute_Price_Adjustments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Attribute_Price_Adjustments_Order_By>>;
  where?: InputMaybe<Attribute_Price_Adjustments_Bool_Exp>;
};


export type Query_RootAttribute_Price_Adjustments_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootAttribute_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Attribute_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Attribute_Values_Order_By>>;
  where?: InputMaybe<Attribute_Values_Bool_Exp>;
};


export type Query_RootAttribute_Values_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootCartArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cart_Order_By>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


export type Query_RootCart_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cart_Order_By>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


export type Query_RootCart_By_PkArgs = {
  id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootCart_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootCart_TotalArgs = {
  distinct_on?: InputMaybe<Array<Money_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Money_Result_Order_By>>;
  where?: InputMaybe<Money_Result_Bool_Exp>;
};


export type Query_RootMoney_ResultArgs = {
  distinct_on?: InputMaybe<Array<Money_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Money_Result_Order_By>>;
  where?: InputMaybe<Money_Result_Bool_Exp>;
};


export type Query_RootProduct_AttributesArgs = {
  distinct_on?: InputMaybe<Array<Product_Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Attributes_Order_By>>;
  where?: InputMaybe<Product_Attributes_Bool_Exp>;
};


export type Query_RootProduct_Attributes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProduct_Attributes_SummaryArgs = {
  distinct_on?: InputMaybe<Array<Product_Attributes_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Attributes_Summary_Order_By>>;
  where?: InputMaybe<Product_Attributes_Summary_Bool_Exp>;
};


export type Query_RootProduct_LikesArgs = {
  distinct_on?: InputMaybe<Array<Product_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Likes_Order_By>>;
  where?: InputMaybe<Product_Likes_Bool_Exp>;
};


export type Query_RootProduct_Likes_By_PkArgs = {
  product_id: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootProduct_VariantsArgs = {
  distinct_on?: InputMaybe<Array<Product_Variants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Variants_Order_By>>;
  where?: InputMaybe<Product_Variants_Bool_Exp>;
};


export type Query_RootProduct_Variants_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProducts_NewArgs = {
  distinct_on?: InputMaybe<Array<Products_New_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_New_Order_By>>;
  where?: InputMaybe<Products_New_Bool_Exp>;
};


export type Query_RootProducts_New_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVariant_AttributesArgs = {
  distinct_on?: InputMaybe<Array<Variant_Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Variant_Attributes_Order_By>>;
  where?: InputMaybe<Variant_Attributes_Bool_Exp>;
};


export type Query_RootVariant_Attributes_By_PkArgs = {
  attribute_value_id: Scalars['Int']['input'];
  variant_id: Scalars['Int']['input'];
};


export type Query_RootVariant_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Variant_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Variant_Images_Order_By>>;
  where?: InputMaybe<Variant_Images_Bool_Exp>;
};


export type Query_RootVariant_Images_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  attribute_price_adjustments: Array<Attribute_Price_Adjustments>;
  /** fetch data from the table: "attribute_price_adjustments" using primary key columns */
  attribute_price_adjustments_by_pk?: Maybe<Attribute_Price_Adjustments>;
  /** fetch data from the table in a streaming manner: "attribute_price_adjustments" */
  attribute_price_adjustments_stream: Array<Attribute_Price_Adjustments>;
  /** An array relationship */
  attribute_values: Array<Attribute_Values>;
  /** fetch data from the table: "attribute_values" using primary key columns */
  attribute_values_by_pk?: Maybe<Attribute_Values>;
  /** fetch data from the table in a streaming manner: "attribute_values" */
  attribute_values_stream: Array<Attribute_Values>;
  /** fetch data from the table: "cart" */
  cart: Array<Cart>;
  /** fetch aggregated fields from the table: "cart" */
  cart_aggregate: Cart_Aggregate;
  /** fetch data from the table: "cart" using primary key columns */
  cart_by_pk?: Maybe<Cart>;
  /** execute function "cart_items" which returns "products" */
  cart_items: Array<Products>;
  /** fetch data from the table in a streaming manner: "cart" */
  cart_stream: Array<Cart>;
  /** execute function "cart_total" which returns "money_result" */
  cart_total: Array<Money_Result>;
  /** fetch data from the table: "money_result" */
  money_result: Array<Money_Result>;
  /** fetch data from the table in a streaming manner: "money_result" */
  money_result_stream: Array<Money_Result>;
  /** fetch data from the table: "product_attributes" */
  product_attributes: Array<Product_Attributes>;
  /** fetch data from the table: "product_attributes" using primary key columns */
  product_attributes_by_pk?: Maybe<Product_Attributes>;
  /** fetch data from the table in a streaming manner: "product_attributes" */
  product_attributes_stream: Array<Product_Attributes>;
  /** fetch data from the table: "product_attributes_summary" */
  product_attributes_summary: Array<Product_Attributes_Summary>;
  /** fetch data from the table in a streaming manner: "product_attributes_summary" */
  product_attributes_summary_stream: Array<Product_Attributes_Summary>;
  /** An array relationship */
  product_likes: Array<Product_Likes>;
  /** fetch data from the table: "product_likes" using primary key columns */
  product_likes_by_pk?: Maybe<Product_Likes>;
  /** fetch data from the table in a streaming manner: "product_likes" */
  product_likes_stream: Array<Product_Likes>;
  /** An array relationship */
  product_variants: Array<Product_Variants>;
  /** fetch data from the table: "product_variants" using primary key columns */
  product_variants_by_pk?: Maybe<Product_Variants>;
  /** fetch data from the table in a streaming manner: "product_variants" */
  product_variants_stream: Array<Product_Variants>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "products" */
  products_new: Array<Products_New>;
  /** fetch data from the table: "products" using primary key columns */
  products_new_by_pk?: Maybe<Products_New>;
  /** fetch data from the table in a streaming manner: "products" */
  products_new_stream: Array<Products_New>;
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** An array relationship */
  variant_attributes: Array<Variant_Attributes>;
  /** fetch data from the table: "variant_attributes" using primary key columns */
  variant_attributes_by_pk?: Maybe<Variant_Attributes>;
  /** fetch data from the table in a streaming manner: "variant_attributes" */
  variant_attributes_stream: Array<Variant_Attributes>;
  /** An array relationship */
  variant_images: Array<Variant_Images>;
  /** fetch data from the table: "variant_images" using primary key columns */
  variant_images_by_pk?: Maybe<Variant_Images>;
  /** fetch data from the table in a streaming manner: "variant_images" */
  variant_images_stream: Array<Variant_Images>;
};


export type Subscription_RootAttribute_Price_AdjustmentsArgs = {
  distinct_on?: InputMaybe<Array<Attribute_Price_Adjustments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Attribute_Price_Adjustments_Order_By>>;
  where?: InputMaybe<Attribute_Price_Adjustments_Bool_Exp>;
};


export type Subscription_RootAttribute_Price_Adjustments_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootAttribute_Price_Adjustments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Attribute_Price_Adjustments_Stream_Cursor_Input>>;
  where?: InputMaybe<Attribute_Price_Adjustments_Bool_Exp>;
};


export type Subscription_RootAttribute_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Attribute_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Attribute_Values_Order_By>>;
  where?: InputMaybe<Attribute_Values_Bool_Exp>;
};


export type Subscription_RootAttribute_Values_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootAttribute_Values_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Attribute_Values_Stream_Cursor_Input>>;
  where?: InputMaybe<Attribute_Values_Bool_Exp>;
};


export type Subscription_RootCartArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cart_Order_By>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


export type Subscription_RootCart_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cart_Order_By>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


export type Subscription_RootCart_By_PkArgs = {
  id: Scalars['uuid']['input'];
  product_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootCart_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootCart_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Cart_Stream_Cursor_Input>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


export type Subscription_RootCart_TotalArgs = {
  distinct_on?: InputMaybe<Array<Money_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Money_Result_Order_By>>;
  where?: InputMaybe<Money_Result_Bool_Exp>;
};


export type Subscription_RootMoney_ResultArgs = {
  distinct_on?: InputMaybe<Array<Money_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Money_Result_Order_By>>;
  where?: InputMaybe<Money_Result_Bool_Exp>;
};


export type Subscription_RootMoney_Result_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Money_Result_Stream_Cursor_Input>>;
  where?: InputMaybe<Money_Result_Bool_Exp>;
};


export type Subscription_RootProduct_AttributesArgs = {
  distinct_on?: InputMaybe<Array<Product_Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Attributes_Order_By>>;
  where?: InputMaybe<Product_Attributes_Bool_Exp>;
};


export type Subscription_RootProduct_Attributes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProduct_Attributes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Attributes_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Attributes_Bool_Exp>;
};


export type Subscription_RootProduct_Attributes_SummaryArgs = {
  distinct_on?: InputMaybe<Array<Product_Attributes_Summary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Attributes_Summary_Order_By>>;
  where?: InputMaybe<Product_Attributes_Summary_Bool_Exp>;
};


export type Subscription_RootProduct_Attributes_Summary_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Attributes_Summary_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Attributes_Summary_Bool_Exp>;
};


export type Subscription_RootProduct_LikesArgs = {
  distinct_on?: InputMaybe<Array<Product_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Likes_Order_By>>;
  where?: InputMaybe<Product_Likes_Bool_Exp>;
};


export type Subscription_RootProduct_Likes_By_PkArgs = {
  product_id: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Likes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Likes_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Likes_Bool_Exp>;
};


export type Subscription_RootProduct_VariantsArgs = {
  distinct_on?: InputMaybe<Array<Product_Variants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Variants_Order_By>>;
  where?: InputMaybe<Product_Variants_Bool_Exp>;
};


export type Subscription_RootProduct_Variants_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProduct_Variants_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Variants_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Variants_Bool_Exp>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProducts_NewArgs = {
  distinct_on?: InputMaybe<Array<Products_New_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_New_Order_By>>;
  where?: InputMaybe<Products_New_Bool_Exp>;
};


export type Subscription_RootProducts_New_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProducts_New_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_New_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_New_Bool_Exp>;
};


export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVariant_AttributesArgs = {
  distinct_on?: InputMaybe<Array<Variant_Attributes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Variant_Attributes_Order_By>>;
  where?: InputMaybe<Variant_Attributes_Bool_Exp>;
};


export type Subscription_RootVariant_Attributes_By_PkArgs = {
  attribute_value_id: Scalars['Int']['input'];
  variant_id: Scalars['Int']['input'];
};


export type Subscription_RootVariant_Attributes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Variant_Attributes_Stream_Cursor_Input>>;
  where?: InputMaybe<Variant_Attributes_Bool_Exp>;
};


export type Subscription_RootVariant_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Variant_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Variant_Images_Order_By>>;
  where?: InputMaybe<Variant_Images_Bool_Exp>;
};


export type Subscription_RootVariant_Images_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootVariant_Images_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Variant_Images_Stream_Cursor_Input>>;
  where?: InputMaybe<Variant_Images_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Name = 'name'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "variant_attributes" */
export type Variant_Attributes = {
  __typename?: 'variant_attributes';
  /** An object relationship */
  attribute_value: Attribute_Values;
  attribute_value_id: Scalars['Int']['output'];
  /** An object relationship */
  product_variant: Product_Variants;
  variant_id: Scalars['Int']['output'];
};

/** order by aggregate values of table "variant_attributes" */
export type Variant_Attributes_Aggregate_Order_By = {
  avg?: InputMaybe<Variant_Attributes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Variant_Attributes_Max_Order_By>;
  min?: InputMaybe<Variant_Attributes_Min_Order_By>;
  stddev?: InputMaybe<Variant_Attributes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Variant_Attributes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Variant_Attributes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Variant_Attributes_Sum_Order_By>;
  var_pop?: InputMaybe<Variant_Attributes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Variant_Attributes_Var_Samp_Order_By>;
  variance?: InputMaybe<Variant_Attributes_Variance_Order_By>;
};

/** order by avg() on columns of table "variant_attributes" */
export type Variant_Attributes_Avg_Order_By = {
  attribute_value_id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "variant_attributes". All fields are combined with a logical 'AND'. */
export type Variant_Attributes_Bool_Exp = {
  _and?: InputMaybe<Array<Variant_Attributes_Bool_Exp>>;
  _not?: InputMaybe<Variant_Attributes_Bool_Exp>;
  _or?: InputMaybe<Array<Variant_Attributes_Bool_Exp>>;
  attribute_value?: InputMaybe<Attribute_Values_Bool_Exp>;
  attribute_value_id?: InputMaybe<Int_Comparison_Exp>;
  product_variant?: InputMaybe<Product_Variants_Bool_Exp>;
  variant_id?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "variant_attributes" */
export type Variant_Attributes_Max_Order_By = {
  attribute_value_id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "variant_attributes" */
export type Variant_Attributes_Min_Order_By = {
  attribute_value_id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "variant_attributes". */
export type Variant_Attributes_Order_By = {
  attribute_value?: InputMaybe<Attribute_Values_Order_By>;
  attribute_value_id?: InputMaybe<Order_By>;
  product_variant?: InputMaybe<Product_Variants_Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** select columns of table "variant_attributes" */
export enum Variant_Attributes_Select_Column {
  /** column name */
  AttributeValueId = 'attribute_value_id',
  /** column name */
  VariantId = 'variant_id'
}

/** order by stddev() on columns of table "variant_attributes" */
export type Variant_Attributes_Stddev_Order_By = {
  attribute_value_id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "variant_attributes" */
export type Variant_Attributes_Stddev_Pop_Order_By = {
  attribute_value_id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "variant_attributes" */
export type Variant_Attributes_Stddev_Samp_Order_By = {
  attribute_value_id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "variant_attributes" */
export type Variant_Attributes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Variant_Attributes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Variant_Attributes_Stream_Cursor_Value_Input = {
  attribute_value_id?: InputMaybe<Scalars['Int']['input']>;
  variant_id?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "variant_attributes" */
export type Variant_Attributes_Sum_Order_By = {
  attribute_value_id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "variant_attributes" */
export type Variant_Attributes_Var_Pop_Order_By = {
  attribute_value_id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "variant_attributes" */
export type Variant_Attributes_Var_Samp_Order_By = {
  attribute_value_id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "variant_attributes" */
export type Variant_Attributes_Variance_Order_By = {
  attribute_value_id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "variant_images" */
export type Variant_Images = {
  __typename?: 'variant_images';
  alt_text?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  display_order?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  image_type?: Maybe<Scalars['String']['output']>;
  image_url: Scalars['String']['output'];
  /** An object relationship */
  product_variant?: Maybe<Product_Variants>;
  variant_id?: Maybe<Scalars['Int']['output']>;
};

/** order by aggregate values of table "variant_images" */
export type Variant_Images_Aggregate_Order_By = {
  avg?: InputMaybe<Variant_Images_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Variant_Images_Max_Order_By>;
  min?: InputMaybe<Variant_Images_Min_Order_By>;
  stddev?: InputMaybe<Variant_Images_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Variant_Images_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Variant_Images_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Variant_Images_Sum_Order_By>;
  var_pop?: InputMaybe<Variant_Images_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Variant_Images_Var_Samp_Order_By>;
  variance?: InputMaybe<Variant_Images_Variance_Order_By>;
};

/** order by avg() on columns of table "variant_images" */
export type Variant_Images_Avg_Order_By = {
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "variant_images". All fields are combined with a logical 'AND'. */
export type Variant_Images_Bool_Exp = {
  _and?: InputMaybe<Array<Variant_Images_Bool_Exp>>;
  _not?: InputMaybe<Variant_Images_Bool_Exp>;
  _or?: InputMaybe<Array<Variant_Images_Bool_Exp>>;
  alt_text?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  display_order?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image_type?: InputMaybe<String_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  product_variant?: InputMaybe<Product_Variants_Bool_Exp>;
  variant_id?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "variant_images" */
export type Variant_Images_Max_Order_By = {
  alt_text?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_type?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "variant_images" */
export type Variant_Images_Min_Order_By = {
  alt_text?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_type?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "variant_images". */
export type Variant_Images_Order_By = {
  alt_text?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_type?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  product_variant?: InputMaybe<Product_Variants_Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** select columns of table "variant_images" */
export enum Variant_Images_Select_Column {
  /** column name */
  AltText = 'alt_text',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayOrder = 'display_order',
  /** column name */
  Id = 'id',
  /** column name */
  ImageType = 'image_type',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  VariantId = 'variant_id'
}

/** order by stddev() on columns of table "variant_images" */
export type Variant_Images_Stddev_Order_By = {
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "variant_images" */
export type Variant_Images_Stddev_Pop_Order_By = {
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "variant_images" */
export type Variant_Images_Stddev_Samp_Order_By = {
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "variant_images" */
export type Variant_Images_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Variant_Images_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Variant_Images_Stream_Cursor_Value_Input = {
  alt_text?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  display_order?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image_type?: InputMaybe<Scalars['String']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  variant_id?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "variant_images" */
export type Variant_Images_Sum_Order_By = {
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "variant_images" */
export type Variant_Images_Var_Pop_Order_By = {
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "variant_images" */
export type Variant_Images_Var_Samp_Order_By = {
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "variant_images" */
export type Variant_Images_Variance_Order_By = {
  display_order?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  variant_id?: InputMaybe<Order_By>;
};

export type GetProductByVariantSkuQueryVariables = Exact<{
  sku: Scalars['String']['input'];
}>;


export type GetProductByVariantSkuQuery = { __typename?: 'query_root', products_new: Array<{ __typename?: 'products_new', base_price?: any | null, created_at?: any | null, description?: string | null, id: number, name: string, product_attributes_summary?: { __typename?: 'product_attributes_summary', grouped_attributes?: any | null } | null, product_variants: Array<{ __typename?: 'product_variants', created_at?: any | null, id: number, price: any, sku: string, stock_quantity?: number | null, variant_images: Array<{ __typename?: 'variant_images', alt_text?: string | null, display_order?: number | null, id: number, image_type?: string | null, image_url: string }>, variant_attributes: Array<{ __typename?: 'variant_attributes', attribute_value: { __typename?: 'attribute_values', value: string, id: number, attribute_id?: number | null, product_attribute?: { __typename?: 'product_attributes', display_name: string } | null } }> }> }>, attribute_values: Array<{ __typename?: 'attribute_values', id: number, value: string }> };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'query_root', products_new: Array<{ __typename?: 'products_new', base_price?: any | null, created_at?: any | null, description?: string | null, id: number, name: string, product_attributes_summary?: { __typename?: 'product_attributes_summary', grouped_attributes?: any | null } | null, product_variants: Array<{ __typename?: 'product_variants', created_at?: any | null, id: number, price: any, sku: string, stock_quantity?: number | null, variant_images: Array<{ __typename?: 'variant_images', alt_text?: string | null, display_order?: number | null, id: number, image_type?: string | null, image_url: string }>, variant_attributes: Array<{ __typename?: 'variant_attributes', attribute_value: { __typename?: 'attribute_values', value: string, id: number, attribute_id?: number | null, product_attribute?: { __typename?: 'product_attributes', display_name: string } | null } }> }> }> };

export type GetProductVariantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductVariantsQuery = { __typename?: 'query_root', product_variants: Array<{ __typename?: 'product_variants', sku: string, id: number, stock_quantity?: number | null, price: any }> };

export type UserLikesQueryVariables = Exact<{ [key: string]: never; }>;


export type UserLikesQuery = { __typename?: 'query_root', likes: Array<{ __typename?: 'product_likes', product_id: number }> };

export type InsertLikeMutationVariables = Exact<{
  product_id: Scalars['Int']['input'];
}>;


export type InsertLikeMutation = { __typename?: 'mutation_root', insert_product_likes_one?: { __typename?: 'product_likes', product_id: number, user_id: string } | null };

export type DeleteLikeMutationVariables = Exact<{
  product_id: Scalars['Int']['input'];
}>;


export type DeleteLikeMutation = { __typename?: 'mutation_root', delete_product_likes?: { __typename?: 'product_likes_mutation_response', affected_rows: number } | null };
