'use client';

import { categories } from '@/lib/icons/navbarIcons';

import CategoryInput from './CategoryInput';

interface CategoryMapProps {
  toggleCategory: (category: string) => void;
  selectedCategories: Set<string>;
}

const CategoryMap: React.FC<CategoryMapProps> = ({
  toggleCategory,
  selectedCategories
}) => {
  return (
    <div className="scrollbar-thin scrollbar-thumb-[#FF5A5F] grid max-h-[50vh] grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2">
      {categories.map((item) => (
        <div key={item.label} className="col-span-1">
          <CategoryInput
            onClick={() => toggleCategory(item.label)}
            selected={selectedCategories.has(item.label)}
            label={item.label}
            icon={item.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryMap;
