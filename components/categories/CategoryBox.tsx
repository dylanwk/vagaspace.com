'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import qs from 'query-string'

interface CategoryBoxProps {
  icon: JSX.Element;
  label: string;
  selected?: boolean;
  description?: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon,
  label,
  selected
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    // Get the current categories from the query parameters
    let currentCategories = params?.get('category')?.split(',');

    // Initialize currentCategories as an empty array if it doesn't exist
    if (!currentCategories) {
      currentCategories = [];
    }

    if (currentCategories.includes(label)) {
      currentCategories.splice(currentCategories.indexOf(label), 1);
    } else {
      currentCategories.push(label);
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: currentCategories.join(',')
    };

    if (currentCategories.length === 0) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: updatedQuery
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router, pathname]);

  return (
    <div
      onClick={handleClick}
      className={`${selected ? 'border-b-neutral-800' : 'border-transparent'} ${selected ? 'text-neutral-800' : 'text-neutral-500'} flex cursor-pointer flex-col items-center justify-center gap-2 border-b-2 p-3 transition hover:text-neutral-800`}
    >
      {icon}
      <div className="whitespace-nowrap text-xs sm:text-sm font-medium tracking-tight">{label}</div>
    </div>
  );
};

export default CategoryBox;
