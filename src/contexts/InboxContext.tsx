import React, { createContext, useContext, useState, ReactNode } from "react";

interface InboxContextType {
  hello: string;
  setHello: (newHello: string) => void;
}

const InboxContext = createContext<InboxContextType | undefined>(undefined);

export const InboxProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [hello, setHelloState] = useState("Hello");

  const setHello = (newHello: string) => {
    setHelloState(newHello);
  };

  return (
    <InboxContext.Provider value={{ hello, setHello }}>
      {children}
    </InboxContext.Provider>
  );
};

export const useInbox = (): InboxContextType => {
  const context = useContext(InboxContext);
  if (!context) {
    throw new Error("useInbox must be used within a InboxProvider");
  }
  return context;
};
