import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[50px]" />
        <div className="mt-4 mb-4 space-y-2">
          <div className="flex flex-row space-x-2">
            <Skeleton className="h-4 w-[30px]" />
            <Skeleton className="h-4 w-[50px]" />
            <Skeleton className="h-4 w-10" />
          </div>
          <Skeleton className="h-4 w-[60px]" />
          <div className="flex flex-row space-x-2">
            <Skeleton className="h-4 w-[30px]" />
            <Skeleton className="h-4 w-10" />
          </div>
          <Skeleton className="h-4 w-[35px]" />
          <div className="flex flex-row space-x-2">
            <Skeleton className="h-4 w-[70px]" />
            <Skeleton className="h-4 w-[35px]" />
            <Skeleton className="h-4 w-10" />
          </div>
        </div>
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[225px]" />

        <div className="flex justify-between mt-8">
          <Skeleton className="h-8 w-24 rounded-lg" />
          <Skeleton className="h-8 w-24 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
