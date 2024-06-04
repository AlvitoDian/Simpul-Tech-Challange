"use client";

import { useState } from "react";
import DefaultButton from "./DefaultButton";
import InboxButton from "./InboxButton";
import TaskButton from "./TaskButton";

export default function FAB() {
  const [isOpenQuicks, setIsOpenQuicks] = useState(false);
  const [isOpenInbox, setIsOpenInbox] = useState(false);
  const [isOpenTask, setIsOpenTask] = useState(false);

  const handleOpenQuicks = () => {
    if (isOpenInbox) {
      setIsOpenInbox(false);
    } else if (isOpenTask) {
      setIsOpenTask(false);
    } else {
      setIsOpenQuicks(!isOpenQuicks);
    }
  };

  const handleTaskButtonClick = () => {
    console.log("Task Button");
  };

  const handleInboxButtonClick = () => {
    console.log("Inbox Button");
    setIsOpenInbox(!isOpenInbox);
  };

  return (
    <>
      <TaskButton onClick={handleTaskButtonClick} isOpenQuicks={isOpenQuicks} />
      <InboxButton
        onClick={handleInboxButtonClick}
        isOpenQuicks={isOpenQuicks}
        isOpenInbox={isOpenInbox}
      />
      <DefaultButton onClick={handleOpenQuicks} isOpenInbox={isOpenInbox} />
    </>
  );
}
