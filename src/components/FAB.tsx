"use client";

import { useState } from "react";
import DefaultButton from "./DefaultButton";
import InboxButton from "./InboxButton";
import TaskButton from "./TaskButton";
import ActiveBoxAction from "./ActiveBoxAction";
import { useTask } from "@/contexts/TaskContext";

export default function FAB() {
  const { tasks, fetchTasks } = useTask();

  const [isOpenQuicks, setIsOpenQuicks] = useState(false);
  const [isOpenInbox, setIsOpenInbox] = useState(false);
  const [isOpenTask, setIsOpenTask] = useState(false);

  const handleOpenQuicks = () => {
    /*   if (isOpenInbox) {
      setIsOpenInbox(false);
    } else if (isOpenTask) {
      setIsOpenTask(false);
    } else {
      setIsOpenQuicks(!isOpenQuicks);
    } */

    setIsOpenQuicks(!isOpenQuicks);
    if (isOpenInbox) {
      setIsOpenInbox(false);
    } else if (isOpenTask) {
      setIsOpenTask(false);
    }
  };

  const handleTaskButtonClick = () => {
    fetchTasks();
    setIsOpenTask(!isOpenTask);
    if (isOpenTask) {
      setIsOpenQuicks(!isOpenQuicks);
    } else if (isOpenInbox) {
      setIsOpenInbox(false);
    }
  };

  const handleInboxButtonClick = async () => {
    setIsOpenInbox(!isOpenInbox);
    if (isOpenInbox) {
      setIsOpenQuicks(!isOpenQuicks);
    } else if (isOpenTask) {
      setIsOpenTask(false);
    }
  };

  return (
    <div>
      <ActiveBoxAction isChat={isOpenInbox} isTask={isOpenTask} />
      <TaskButton
        onClick={handleTaskButtonClick}
        isOpenQuicks={isOpenQuicks}
        isOpenInbox={isOpenInbox}
        isOpenTask={isOpenTask}
      />
      <InboxButton
        onClick={handleInboxButtonClick}
        isOpenQuicks={isOpenQuicks}
        isOpenInbox={isOpenInbox}
        isOpenTask={isOpenTask}
      />
      <DefaultButton
        onClick={handleOpenQuicks}
        isOpenInbox={isOpenInbox}
        isOpenTask={isOpenTask}
      />
    </div>
  );
}
