import React from "react";
import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  path: string;
  onClick: (value: any) => void;
}

const CategoryInput = ({
  icon: Icon,
  label,
  selected,
  onClick,
  path,
}: CategoryInputProps) => {
  return <div>CategoryInput</div>;
};

export default CategoryInput;
