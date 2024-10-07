"use client";

import { SvgIconComponent } from "@mui/icons-material";

type Props = {
  icon: SvgIconComponent;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
};

function CategoryInput({ icon: Icon, label, selected, onClick }: Props) {
  return (
    <div
      onClick={() => onClick(label)}
      className={`flex cursor-pointer flex-col gap-2 rounded-xl border-2 p-3 transition hover:border-black ${
        selected ? "border-black" : "border-neutral-200"
      }`}
    >
      <Icon />
      <div className="font-semibold">{label}</div>
    </div>
  );
}

export default CategoryInput;
