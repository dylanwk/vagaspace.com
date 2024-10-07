'use client';

import { useCallback } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }
    onChange(value - 1);
  }, [value, onChange]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium"> {title} </div>
        <div className="font-light text-gray-400">{subtitle}</div>
      </div>
      <div className="flex flex-row gap-4">
        <div
          onClick={onReduce}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-neutral-400 text-neutral-600 transition hover:opacity-80"
        >
          <RemoveIcon />
        </div>
        <div className="text-xl font-light mt-1.5 text-neutral-600">{value}</div>
        <div
          onClick={onAdd}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[1px] border-neutral-400 text-neutral-600 transition hover:opacity-80"
        >
          <AddOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Counter;
