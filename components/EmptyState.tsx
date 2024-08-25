'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import Heading from './Heading';

interface EmptyStateInterface {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateInterface> = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filter options',
  showReset
}) => {
  const router = useRouter();
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-2">
      <Heading center title={title} subtitle={subtitle} />
      <div className="mt-4 flex w-48 items-center justify-center">
        {showReset && (
          <Button
            variant={'outline'}
            aria-label="Remove all filters"
            onClick={() => router.push('/')}
            className="items-center justify-center rounded-full border-red-500"
          >
            Remove all filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
