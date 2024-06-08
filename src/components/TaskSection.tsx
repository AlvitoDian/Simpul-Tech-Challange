import React, { useState } from "react";
import Task from "./Task";

export default function TaskSection() {
  const [isMyTasksOpen, setIsMyTasksOpen] = useState(false);

  const myTasksDropdown = () => {
    setIsMyTasksOpen(!isMyTasksOpen);
  };

  return (
    <div className="flex-col">
      <div className="flex justify-between pl-[114px] pr-[23px] pt-[18px] mb-[22px]">
        <div className="relative flex items-center justify-between border-[1px] border-[#828282] rounded-[5px] py-[7px] px-[10px] cursor-pointer">
          <div className="flex items-center" onClick={myTasksDropdown}>
            <span className="text-[16px] font-bold text-[#4F4F4F]">
              My Tasks
            </span>
            <div className="pl-[10px]">
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.59795 0.912477L5.77295 4.72914L1.94795 0.912476L0.772949 2.08748L5.77295 7.08748L10.7729 2.08748L9.59795 0.912477Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
          </div>

          {isMyTasksOpen && (
            <div className="z-[10] absolute bottom-[-87px] left-[-85.23px] w-[288px] h-[80px] bg-[#FFFFFF] rounded-[5px] border-[1px] border-[#828282]">
              <div className="h-[40px] flex items-center border-b-[1px] borde-b-[#828282]">
                <span className="pl-[15.24px] text-[16px] font-bold text-[#4F4F4F]">
                  Personal Errands
                </span>
              </div>
              <div className="h-[40px] flex items-center">
                <span className="pl-[15.24px] text-[16px] font-bold text-[#4F4F4F]">
                  Urgent To-Do
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between bg-[#2F80ED] rounded-[5px] py-[7px] px-[10px]">
          <span className="text-[16px] font-bold text-[#FFFFFF]">New Task</span>
        </div>
      </div>
      <div
        className="flex-col custom-scrollbar overflow-auto h-[629px] mr-[13px]"
        id="style-3"
      >
        <Task
          title={"Close off Case #012920- RODRIGUES, Amiguel"}
          date={new Date(2021, 6, 12)}
          description={
            "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!"
          }
          isDone={false}
        />
        <Task
          title={
            "Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203"
          }
          date={new Date(2021, 5, 14)}
          description={
            "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in."
          }
          isDone={false}
        />
        <Task
          title={"Set up appointment with Dr Blake"}
          date={new Date(2021, 6, 22)}
          description={""}
          isDone={false}
        />
        <Task
          title={"Set up appointment with Dr Blake"}
          date={new Date(2021, 6, 22)}
          description={""}
          isDone={false}
        />
        <Task
          title={"Set up appointment with Dr Blake"}
          date={new Date(2021, 6, 22)}
          description={""}
          isDone={false}
        />
      </div>
    </div>
  );
}
