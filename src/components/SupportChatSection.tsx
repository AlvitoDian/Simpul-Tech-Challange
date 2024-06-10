"use client";

import { useState, useEffect } from "react";
import BubbleChat from "./BubbleChat";
import ChatDivider from "./ChatDivider";
import { useInbox } from "@/contexts/InboxContext";

export default function SupportChatSection() {
  const {
    setChatSection,
    setExitChat,
    isReplying,
    replyMessage,
    setIsReplying,
    setReplyMessage,
  } = useInbox();

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "FastVisa Support",
      message:
        "Hey there. Welcome to your inbox! Contact us for more information and help about anything! We’ll send you a response as soon as possible.",
      date: "19.32",
      isSender: false,
      userColor: ["#2F80ED", "#F8F8F8"],
      isReply: false,
      replyMessage: "",
    },
    {
      name: "",
      message:
        "Hi, I need help with something can you help me d help with something can you help me ?",
      date: "19.32",
      isSender: true,
      userColor: ["#9B51E0", "#EEDCFF"],
      isReply: false,
      replyMessage: "",
    },
  ]);

  const closeChat = () => {
    setChatSection(false);
  };

  const exitChat = () => {
    setExitChat(true);
  };

  const addChat = () => {
    if (isReplying) {
      const newChat = {
        id: messages.length + 1,
        type: "bubble",
        name: "Your Name",
        message: newMessage,
        date: getCurrentTime(),
        isSender: true,
        userColor: ["#9B51E0", "#EEDCFF"],
        isReply: true,
        replyMessage: replyMessage,
      };

      setMessages([...messages, newChat]);
      setNewMessage("");

      setIsReplying(false);

      return;
    }

    const newChat = {
      id: messages.length + 1,
      type: "bubble",
      name: "Your Name",
      message: newMessage,
      date: getCurrentTime(),
      isSender: true,
      userColor: ["#9B51E0", "#EEDCFF"],
      isReply: false,
      replyMessage: "",
    };

    setMessages([...messages, newChat]);
    setNewMessage("");
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}.${minutes}`;
  };

  const cancelReply = () => {
    setIsReplying(false);
    setReplyMessage({
      username: null,
      message: null,
    });
  };

  return (
    <div className="flex-col relative">
      <div className="flex justify-between border-b-[1px] border-b-[#BDBDBD]">
        <div className="flex items-center pl-[25px] pt-[23px] pb-[25px]">
          <div className="pr-[13.65px] cursor-pointer" onClick={closeChat}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                fill="#333333"
              />
            </svg>
          </div>

          <div className="font-bold text-[16px] text-[#2F80ED]">
            FastVisa Support
          </div>
        </div>

        <div
          className="flex items-center pr-[21px] cursor-pointer"
          onClick={exitChat}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="#333333"
            />
          </svg>
        </div>
      </div>

      <div
        className={`flex-col my-[13.5px] ml-[20px] mr-[11px] custom-scrollbar overflow-auto ${
          typeof window !== "undefined" && window.innerWidth < 1600
            ? "h-[354px]"
            : "h-[554px]"
        }`}
        id="style-3"
      >
        <div className="pr-[18px]">
          {messages.map((message, index) => (
            <BubbleChat
              key={index}
              name={message.name}
              message={message.message}
              date={message.date}
              isSender={message.isSender}
              userColor={message.userColor}
              isReply={message.isReply}
              reply={message.replyMessage}
            />
          ))}
        </div>
      </div>

      <div className="flex px-[20px] gap-[13px] pt-[10px]">
        <div className="relative">
          <div
            className={`${
              !isReplying ? "hidden" : ""
            } absolute bg-[#F2F2F2] bottom-[39px] z-[20] w-full rounded-t-[5px] p-[15px] border-[1px] border-[#828282]`}
          >
            <div
              className="absolute right-[20px] top-[15px] cursor-pointer"
              onClick={cancelReply}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914 12L12 10.7914L7.20857 6L12 1.20857Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
            <div className="flex flex-col max-w-[495.6px]">
              <span className="font-bold text-[16px] text-[#4F4F4F]">
                {replyMessage.username}
              </span>
              <span className="font-regular text-[16px] text-[#4F4F4F]">
                {replyMessage.message}
              </span>
            </div>
          </div>
          <input
            type="text"
            placeholder="Type a new message"
            className={`font-regular border-[1px] border-[#828282] ${
              isReplying ? "rounded-b-[5px]" : "rounded-[5px]"
            } w-[580px] h-[40px] 
            placeholder-[#333333] pl-[16px]`}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </div>

        <button
          className="flex items-center justify-center bg-[#2F80ED] w-full rounded-[5px] font-bold text-white"
          onClick={addChat}
        >
          Send
        </button>
      </div>

      <div className="absolute flex items-center w-[690px] h-[54.41px] bg-[#E9F3FF] bottom-[50px] left-1/2 transform -translate-x-1/2 z-[10] rounded-[5px]">
        <div className="flex items-center">
          <div className="pl-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#F8F8F8"
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
              />
              <path
                fill="#2F80ED"
                d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
              >
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </path>
            </svg>
          </div>

          <div className="pl-[11px]">
            <span className="font-bold text-[16px] text-[#4F4F4F]">
              Please wait while we connect you with one of our team ...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
