import { Skeleton } from '../ui/skeleton';

const CategorySkeleton = () => {
  return (
    <div className="scrollbar-thin scrollbar-thumb-[#FF5A5F] grid max-h-[50vh] grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2">
      <Skeleton className="flex h-full w-full gap-2 rounded-xl p-10" />
      <Skeleton className="flex h-full w-full gap-2 rounded-xl p-10" />
      <Skeleton className="flex h-full w-full gap-2 rounded-xl p-10" />
      <Skeleton className="flex h-full w-full gap-2 rounded-xl p-10" />
      <Skeleton className="flex h-full w-full gap-2 rounded-xl p-10" />
      <Skeleton className="flex h-full w-full gap-2 rounded-xl p-10" />
      <Skeleton className="flex h-full w-full gap-2 rounded-xl p-10" />
      <Skeleton className="flex h-full w-full gap-2 rounded-xl p-10" />
    </div>
  );
};

export default CategorySkeleton;
