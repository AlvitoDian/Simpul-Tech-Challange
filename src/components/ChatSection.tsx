"use client";

import { useState } from "react";
import BubbleChat from "./BubbleChat";
import ChatDivider from "./ChatDivider";
import { useInbox } from "@/contexts/InboxContext";

export default function ChatSection() {
  const { setChatSection, setExitChat } = useInbox();

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bubble",
      name: "",
      message:
        "No worries. It will be completed ASAP. I’ve asked him yesterday.",
      date: "19.32",
      isSender: true,
      userColor: ["#9B51E0", "#EEDCFF"],
    },
    {
      type: "divider",
      date: "Today June 09, 2021",
      isNewMessage: false,
    },
    {
      id: 2,
      type: "bubble",
      name: "Marry Hilda",
      message:
        "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
      date: "19.32",
      isSender: false,
      userColor: ["#E5A443", "#FCEED3"],
    },
    {
      id: 3,
      type: "bubble",
      name: "",
      message:
        "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
      date: "19.32",
      isSender: true,
      userColor: ["#9B51E0", "#EEDCFF"],
    },
    {
      id: 4,
      type: "bubble",
      name: "Mary Hilda",
      message: "Sure thing, Claren",
      date: "19.32",
      isSender: false,
      userColor: ["#E5A443", "#FCEED3"],
    },
    {
      type: "divider",
      date: "",
      isNewMessage: true,
    },
    {
      id: 5,
      type: "bubble",
      name: "Obaidullah Amarkhil",
      message: "Morning. I’ll try to do them. Thanks",
      date: "19.32",
      isSender: false,
      userColor: ["#43B78D", "#D2F2EA"],
    },
  ]);

  const closeChat = () => {
    setChatSection(false);
  };

  const exitChat = () => {
    setExitChat(true);
  };

  const addChat = () => {
    const newChat = {
      id: messages.length + 1,
      type: "bubble",
      name: "Your Name",
      message: newMessage,
      date: getCurrentTime(),
      isSender: true,
      userColor: ["#9B51E0", "#EEDCFF"],
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

  return (
    <div className="flex-col relative">
      <div className="flex justify-between border-b-[1px] border-b-[#BDBDBD]">
        <div className="flex pl-[25px] pt-[17px] pb-[18.44px]">
          <div
            className="pt-[12px] pr-[13.65px] cursor-pointer"
            onClick={closeChat}
          >
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

          <div className="flex-col">
            <div className="font-bold text-[16px] text-[#2F80ED]">
              I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
            </div>
            <div className="font-regular text-[12px] text-[#333333] pt-[3px]">
              3 Participants
            </div>
          </div>
        </div>

        <div
          className=" pt-[29px] pb-[18.44px] pr-[21px] cursor-pointer"
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
          window.innerWidth < 1600 ? "h-[354px]" : "h-[554px]"
        }`}
        id="style-3"
      >
        <div className="pr-[18px]">
          {messages.map((item, index) => {
            if (item.type === "bubble") {
              return (
                <BubbleChat
                  key={index}
                  name={item.name}
                  message={item.message}
                  date={item.date}
                  isSender={item.isSender}
                  userColor={item.userColor}
                />
              );
            } else if (item.type === "divider") {
              return (
                <ChatDivider
                  key={index}
                  date={item.date}
                  isNewMessage={item.isNewMessage}
                />
              );
            }
            return null;
          })}
        </div>
      </div>

      <div className="flex px-[20px] gap-[13px] pt-[10px]">
        <div>
          <input
            type="text"
            placeholder="Type a new message"
            className="font-regular border-[1px] border-[#828282] rounded-[5px] w-[580px] h-[40px] 
            placeholder-[#333333] pl-[16px] "
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

      <div className="absolute w-[141.83px] h-[33.89px] bg-[#E9F3FF] bottom-[50px] left-1/2 transform -translate-x-1/2 z-[10] rounded-[5px] pt-[4px] px-[12px]">
        <div className="flex items-center justify-center">
          <span className="font-bold text-[16px] text-[#2F80ED]">
            New Message
          </span>
        </div>
      </div>
    </div>
  );
}
