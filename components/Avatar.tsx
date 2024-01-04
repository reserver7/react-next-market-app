import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string | null;
}

const Avatar = ({ src }: AvatarProps) => {
  return (
    <Image
      className="w-10 h-10 rounded-full"
      width={30}
      height={30}
      alt="Avatar"
      src={src || "https://via.placeholder.com/400x400?text=no+user+image"}
    />
  );
};

export default Avatar;
