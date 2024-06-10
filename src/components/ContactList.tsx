import LoadingChats from "./LoadingChats";
import { useState, useEffect } from "react";
import Contact from "./Contact";
import SupportContact from "./SupportContact";
import { useInbox } from "@/contexts/InboxContext";

export default function ContactList() {
  const { setChatSection, selectContact } = useInbox();
  const [showContent, setShowContent] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [contactList, setContactList] = useState([
    {
      id: 1,
      subject: "109220-Naturalization",
      name: "Cameron Philips :",
      message: "Please check this out!",
      date: "January, 1,2021 19:10",
      isRead: false,
    },
    {
      id: 2,
      subject:
        "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]",
      name: "Ellen :",
      message: "Hey, please read.",
      date: "02/06/2021 10:45",
      isRead: true,
    },
    {
      id: 3,
      subject: "8405-Diana SALAZAR MUNGUIA",
      name: "Cameron Philips :",
      message:
        "I understand your initial concerns and thats very valid, Elizabeth. But you bla bla bla bla bla bla",
      date: "01/06/2021 12:19",
      isRead: true,
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const openChat = (contact) => {
    selectContact(contact);
    setChatSection(true);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contactList.filter((contact) =>
    contact.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Searchbar */}
      <div className="flex justify-center mt-[20px]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="font-regular border-[1px] border-[#828282] rounded-[5px] w-[666px] h-[32px] 
            placeholder-[#333333] pl-[68.82px]"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="absolute right-[58.82px] bottom-[10px] cursor-pointer">
            <svg
              width="12"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.21143 7.54717H8.75345L12.1771 10.9777L11.1548 12L7.72429 8.57633V8.03431L7.53905 7.8422C6.75688 8.51458 5.74145 8.91938 4.63682 8.91938C2.17369 8.91938 0.177124 6.92281 0.177124 4.45969C0.177124 1.99657 2.17369 0 4.63682 0C7.09994 0 9.09651 1.99657 9.09651 4.45969C9.09651 5.56432 8.6917 6.57976 8.01932 7.36192L8.21143 7.54717ZM1.54933 4.4597C1.54933 6.16811 2.92841 7.54718 4.63681 7.54718C6.34522 7.54718 7.72429 6.16811 7.72429 4.4597C7.72429 2.7513 6.34522 1.37222 4.63681 1.37222C2.92841 1.37222 1.54933 2.7513 1.54933 4.4597Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Searchbar End*/}

      {/* Content */}
      {showContent ? (
        <LoadingChats />
      ) : (
        <div
          className={`flex-col overflow-auto custom-scrollbar ${
            window.innerWidth < 1600 ? "h-[429px]" : "h-[629]"
          } mt-[5px] mr-[13px]`}
          id="style-3"
        >
          {filteredContacts.map((contact, index) => (
            <div key={index} onClick={() => openChat(contact)}>
              <Contact
                subject={contact.subject}
                name={contact.name}
                message={contact.message}
                date={contact.date}
                isRead={contact.isRead}
              />
            </div>
          ))}
          <div
            onClick={() =>
              openChat({
                id: 4,
                subject: "FastVisa Support",
                name: "",
                message: "Hey there. Welcome to your inbox.",
                isRead: true,
              })
            }
          >
            <SupportContact
              name={"FastVisa Support"}
              message={"Hey there! Welcome to your inbox."}
              date={"01/16/2021 12:19"}
              isRead={true}
            />
          </div>
        </div>
      )}
      {/* Content End */}
    </>
  );
}
