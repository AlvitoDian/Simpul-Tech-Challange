"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface InboxContextType {
  chatSection: boolean;
  exitChat: boolean;
  isReplying: boolean;
  selectedContact: any;
  setIsReplying: any;
  replyMessage: any;
  setReplyMessage: any;
  setExitChat: (value: boolean) => void;
  setChatSection: (value: boolean) => void;
  setSelectedContact: (contact: any) => void;
  selectContact: (contact: any) => void;
  setCloseChatSection: () => void;
  replyHandler: (condition: any, username: string, message: string) => void;
}

const InboxContext = createContext<InboxContextType | undefined>(undefined);

export const InboxProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [chatSection, setChatSection] = useState(false);
  const [exitChat, setExitChat] = useState(false);
  const [selectedContact, setSelectedContact] = useState<any>(null);

  const [isReplying, setIsReplying] = useState(false);
  const [replyMessage, setReplyMessage] = useState({
    username: null,
    message: null,
  });

  const selectContact = (contact: any) => {
    setSelectedContact(contact);
  };

  const setCloseChatSection = () => {
    setChatSection(false);
  };

  const replyHandler = (condition, name, message) => {
    console.log(name, message);
    setIsReplying(condition);
    setReplyMessage({
      username: name,
      message,
    });
  };

  return (
    <InboxContext.Provider
      value={{
        chatSection,
        selectedContact,
        exitChat,
        setChatSection,
        setSelectedContact,
        selectContact,
        setCloseChatSection,
        setExitChat,
        isReplying,
        setIsReplying,
        replyMessage,
        setReplyMessage,
        replyHandler,
      }}
    >
      {children}
    </InboxContext.Provider>
  );
};

export const useInbox = (): InboxContextType => {
  const context = useContext(InboxContext);
  if (!context) {
    throw new Error("useInbox must be used within an InboxProvider");
  }
  return context;
};
