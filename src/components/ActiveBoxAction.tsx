import ContactList from "./ContactList";
import ChatSection from "./ChatSection";
import TaskSection from "./TaskSection";
import { useInbox } from "@/contexts/InboxContext";
import SupportChatSection from "./SupportChatSection";

export default function ActiveBoxAction({ isChat, isTask }) {
  const { chatSection } = useInbox();

  return (
    <>
      <div
        className={`${
          isChat ? "" : "hidden"
        } absolute w-[734px] h-[737px] bg-[#FFFFFF] right-[34px] bottom-[110px] border-[1px] border-[#828282] rounded-[5px]`}
      >
        {chatSection ? <SupportChatSection /> : <ContactList />}
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
