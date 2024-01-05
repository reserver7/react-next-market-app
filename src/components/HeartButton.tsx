import React from "react";
import { User } from "@prisma/client";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import useFavorite from "../hooks/userFavorite";

interface HeartButtonProps {
  productId: string;
  currentUser?: User | null;
}

const HeartButton = ({ productId, currentUser }: HeartButtonProps) => {
  const { hasFavorite, toggleFavorite } = useFavorite({
    productId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="relative transition cursor-pointer hover:opacity-80"
    >
      <AiOutlineHeart
        size={28}
        className="absolute fill-white -top-[2px] -right-[2px]"
      />

      <AiFillHeart
        size={24}
        className={hasFavorite ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
};

export default HeartButton;
