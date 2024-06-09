import ContactLists from "./ContactLists";
import ChatSection from "./ChatSection";
import TaskSection from "./TaskSection";

export default function ActiveBoxAction({ isChat, isTask }) {
  return (
    <>
      <div
        className={`${
          isChat ? "" : "hidden"
        } absolute w-[734px] h-[737px] bg-[#FFFFFF] right-[34px] bottom-[110px] border-[1px] border-[#828282] rounded-[5px]`}
      >
        {/* <ChatSection /> */}
        <ContactLists />
      </div>
      <div
        className={`${
          isTask ? "" : "hidden"
        } absolute w-[734px] h-[737px] bg-[#FFFFFF] right-[34px] bottom-[110px] border-[1px] border-[#828282] rounded-[5px]`}
      >
        <TaskSection />
      </div>
    </>
  );
}
