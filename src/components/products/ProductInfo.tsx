"use client";

import { IconType } from "react-icons";
import { User } from "@prisma/client";
import Avatar from "../Avatar";
import ProductCategory from "./ProductCategory";
import { formatTime } from "../../helpers/dayjs";

interface ProductInfoProps {
  user: User;
  description: string;
  createdAt: Date;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  user,
  description,
  category,
  createdAt,
}) => {
  return (
    <div className="flex flex-col col-span-4 gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2 text-xl font-semibold ">
          <Avatar src={user?.image} />
          <div>{user?.name}</div>
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <div>
            {typeof createdAt === "string"
              ? formatTime(new Date(createdAt))
              : formatTime(createdAt)}
          </div>
        </div>
      </div>
      <hr />
      {category && (
        <ProductCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
    </div>
  );
};

export default ProductInfo;
