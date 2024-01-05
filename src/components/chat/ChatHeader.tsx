import React from "react";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import Avatar from "../Avatar";
import { formatTime } from "../../helpers/dayjs";

interface ChatHeaderProps {
  receiverName: string;
  receiverImage: string;
  lastMessageTime: Date | undefined;
  setLayout: (layout: boolean) => void;
}

const ChatHeader = ({
  setLayout,
  receiverName,
  receiverImage,
  lastMessageTime,
}: ChatHeaderProps) => {
  return (
    <div className="pl-4 border-b-[1px]">
      <div className="flex items-center h-16 gap-4">
        <div className="flex items-center justify-center text-3xl text-gray-400 hover:text-gray-600">
          <button onClick={() => setLayout(false)} className="md:hidden">
            <IoChevronBackCircleSharp />
          </button>
        </div>

        <div className="flex items-center gap-[0.6rem]">
          <div>
            <Avatar src={receiverImage} />
          </div>
          <h2 className="text-lg font-semibold">{receiverName}</h2>
          {lastMessageTime && (
            <p className="text-gray-600">{formatTime(lastMessageTime)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
