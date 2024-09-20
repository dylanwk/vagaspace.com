"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import Heading from "./Heading";
import qs from "query-string";

interface EmptyStateInterface {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateInterface> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filter options",
  showReset,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleReset = () => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const currentLocation = params?.get("locationValue");
    if (currentLocation) {
      router.push(`/s?locationValue=${currentLocation}`);
    } else {
      router.push("/s");
    }
  };

  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-2">
      <Heading center title={title} subtitle={subtitle} />
      <div className="mt-4 flex w-48 items-center justify-center">
        {showReset && (
          <Button
            aria-label="Remove all filters"
            onClick={handleReset}
            className="rounded-full border border-primary bg-transparent px-4 py-2 text-xs font-bold text-gray-500 hover:text-white"
          >
            Remove all filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
