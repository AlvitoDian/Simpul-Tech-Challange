import ContactList from "./ContactList";
import ChatSection from "./ChatSection";
import TaskSection from "./TaskSection";
import { useInbox } from "@/contexts/InboxContext";
import SupportChatSection from "./SupportChatSection";

export default function ActiveBoxAction({ isChat, isTask }) {
  const { chatSection, selectedContact } = useInbox();

  const renderChatContent = () => {
    console.log(selectedContact);
    if (!selectedContact) return null;

    if (
      selectedContact.id === 1 ||
      selectedContact.id === 2 ||
      selectedContact.id === 3
    ) {
      return <ChatSection />;
    } else if (selectedContact.id === 4) {
      return <SupportChatSection />;
    } else {
      return <div>Select a contact to view the chat.</div>;
    }
  };

  return (
    <>
      <div
        className={`${isChat ? "" : "hidden"} absolute w-[734px] ${
          window.innerWidth < 1600 ? "h-[537px]" : "h-[737px]"
        } bg-[#FFFFFF] right-[34px] bottom-[110px] border-[1px] border-[#828282] rounded-[5px]`}
      >
        {chatSection ? renderChatContent() : <ContactList />}
      </div>
      <div
        className={`${isTask ? "" : "hidden"} absolute w-[734px] ${
          window.innerWidth < 1600 ? "h-[537px]" : "h-[737px]"
        } bg-[#FFFFFF] right-[34px] bottom-[110px] border-[1px] border-[#828282] rounded-[5px]`}
      >
        <TaskSection />
      </div>
    </>
  );
}
