import ChatContact from "./ChatContact";

export default function ActiveBoxAction({ isChat, isTask }) {
  console.log(isChat);
  return (
    <div
      className={`${
        isChat ? "" : "hidden"
      } absolute w-[734px] h-[737px] bg-[#FFFFFF] right-[34px] bottom-[110px] border-[1px] border-[#828282] rounded-[5px] flex-col`}
    >
      <ChatContact />
    </div>
  );
}
