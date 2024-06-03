"use client";

import DefaultButton from "./DefaultButton";
import InboxButton from "./InboxButton";
import TaskButton from "./TaskButton";

export default function FAB() {
  const handleDefaultButtonClick = () => {
    console.log("Default Button");
  };

  const handleTaskButtonClick = () => {
    console.log("Task Button");
  };

  const handleInboxButtonClick = () => {
    console.log("Inbox Button");
  };

  return (
    <>
      <TaskButton onClick={handleTaskButtonClick} />
      <InboxButton onClick={handleInboxButtonClick} />
      <DefaultButton onClick={handleDefaultButtonClick} />
    </>
  );
}
