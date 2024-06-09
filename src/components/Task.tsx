"use client";

import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useTask } from "@/contexts/TaskContext";

export default function Task({ id, title, date, description, isDone }) {
  const { tasks, setTasks, addNewTask, deleteTask } = useTask();

  const textareaRef = useRef(null);
  const inputRef = useRef(null);

  const [startDate, setStartDate] = useState(date);
  const [isChecked, setIsChecked] = useState(isDone);
  const [isCloseDetailTask, setIsCloseDetailTask] = useState(false);

  const [isFocusedDate, setIsFocusedDate] = useState(false);

  const [newTitle, setNewTitle] = useState(title);
  const [isInputTitle, setIsInputTitle] = useState(false);

  const [text, setText] = useState(
    description ? description : "No Description"
  );
  const [isInputText, setIsInputText] = useState(false);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleDeleteOpen = () => {
    setIsDeleteOpen(!isDeleteOpen);
  };

  //? Handle Input Text
  const handleClickSpanText = () => {
    setIsInputText(true);
    setTimeout(() => {
      textareaRef.current.focus();
    }, 0);
  };

  const handleInputText = (e) => {
    if (e.target.value === "") {
      setText("No Description");
    }
    setText(e.target.value);
  };

  const handleBlurText = (e) => {
    console.log("Description Changed : ", text);
    if (e.target.value === "") {
      setText("No Description");
    }
    setIsInputText(false);
  };
  //? Handle Input Text End

  //? Handle Input Title
  const handleClickSpanTitle = () => {
    setIsInputTitle(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  const handleInputTitle = (e) => {
    if (newTitle === "") {
      setIsInputTitle(true);
    }
    setNewTitle(e.target.value);
  };

  const handleBlurTitle = (e) => {
    /*   if (e.target.value === "") {
      setNewTitle("Type Task Title");
    } */
    setIsInputTitle(false);
  };
  //? Handle Input Title End

  const handleFocusDateChange = () => {
    setIsFocusedDate(true);
  };

  const handleBlurDateChange = () => {
    setIsFocusedDate(false);
  };

  function resizeTextarea() {
    const textarea = textareaRef.current;
    const charCount = text.length;
    const extraHeight = Math.floor(charCount / 70) * 20 + 20;
    textarea.style.height = `${extraHeight + textarea.scrollHeight}px`;
  }

  /*   useEffect(() => {
    resizeTextarea();
  }, []); */

  const handleDateChange = (date) => {
    setStartDate(date);
    console.log("Date Changed : ", date);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleOpenDetailTask = async () => {
    setIsCloseDetailTask(!isCloseDetailTask);
  };

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const calculateDaysLeft = (dueDate) => {
    const currentDate = new Date();
    const timeDifference = dueDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysLeft > 0 ? `${daysLeft} days left` : "Due date passed";
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
  };

  return (
    <div
      className={`flex-col border-b-[1px] border-b-[#828282] ml-[29px] mr-[13px] ${
        isCloseDetailTask ? "pb-[8px]" : "pb-[22px]"
      }`}
    >
      <form action="">
        <div className="pt-[22px] flex items-center justify-between mb-[14px]">
          <div className="flex">
            <div className="flex mt-[2px]">
              <input
                id="checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className={`cursor-pointer relative w-[18px] h-[18px] appearance-none border-[2.8px] border-[#828282] rounded-[3px] after:absolute after:left-0 after:top-0 after:h-full after:w-full ${
                  isChecked
                    ? "after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjODI4MjgyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjODI4MjgyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] "
                    : ""
                } after:bg-[length:35px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-white`}
              />
            </div>

            <div className="flex max-w-[360.37px] pl-[22.5px]">
              {isInputTitle || newTitle === "" ? (
                <input
                  id="inputTitle"
                  type="text"
                  placeholder="Type Task Title"
                  ref={inputRef}
                  onChange={handleInputTitle}
                  onBlur={handleBlurTitle}
                  className={`font-bold text-[16px] h-[40px] w-[380px] text-[#4F4F4F] border-[1px] border-[#828282] rounded-[5px] px-[14.22px] ${
                    isChecked ? "line-through text-[#828282]" : ""
                  } placeholder-[#4F4F4F]`}
                  value={newTitle}
                />
              ) : (
                <span
                  onClick={handleClickSpanTitle}
                  className={`font-bold text-[16px] text-[#4F4F4F] ${
                    isChecked ? "line-through text-[#828282]" : ""
                  }`}
                >
                  {newTitle}
                </span>
              )}
            </div>
          </div>

          <div className="flex pr-[24px] items-center">
            <div className="pr-[19.75px]">
              <span
                className={`text-[14px] font-regular text-[#EB5757] ${
                  isChecked ? "hidden" : ""
                }`}
              >
                {startDate ? calculateDaysLeft(startDate) : ""}
              </span>
            </div>
            <div className="pr-[10.32px]">
              <span className="text-[14px] font-regular text-[#4F4F4F]">
                {startDate ? formatDate(startDate) : ""}
              </span>
            </div>

            <div
              className="pr-[15px] cursor-pointer"
              onClick={handleOpenDetailTask}
            >
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  isCloseDetailTask ? "rotate-180" : ""
                } transition duration-300`}
              >
                <path
                  d="M1.175 7.08753L5 3.27086L8.825 7.08752L10 5.91252L5 0.912526L-1.02722e-07 5.91253L1.175 7.08753Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>

            <div className="relative">
              <svg
                width="14"
                height="4"
                viewBox="0 0 14 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer h-[14px]"
                onClick={handleDeleteOpen}
              >
                <path
                  d="M10.5 1.75C10.5 2.7125 11.2875 3.5 12.25 3.5C13.2125 3.5 14 2.7125 14 1.75C14 0.7875 13.2125 -3.44227e-08 12.25 -7.64949e-08C11.2875 -1.18567e-07 10.5 0.7875 10.5 1.75ZM8.75 1.75C8.75 0.7875 7.9625 -2.63908e-07 7 -3.0598e-07C6.0375 -3.48052e-07 5.25 0.7875 5.25 1.75C5.25 2.7125 6.0375 3.5 7 3.5C7.9625 3.5 8.75 2.7125 8.75 1.75ZM1.75 -5.35465e-07C2.7125 -4.93392e-07 3.5 0.7875 3.5 1.75C3.5 2.7125 2.7125 3.5 1.75 3.5C0.7875 3.5 -1.18567e-07 2.7125 -7.64949e-08 1.75C-3.44227e-08 0.787499 0.7875 -5.77537e-07 1.75 -5.35465e-07Z"
                  fill="#828282"
                />
              </svg>

              {isDeleteOpen && (
                <div
                  className="absolute flex items-center right-0 top-[21px] w-[126px] h-[43px] bg-[#FFFFFF] border-[#828282] border-[1px] rounded-[5px] pl-[18.39px] cursor-pointer"
                  onClick={() => handleDeleteTask(id)}
                >
                  <span className="font-regular text-[#EB5757]">Delete</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={`wrapper flex-col pl-[40.5px] ${
            isCloseDetailTask ? "" : "is-open"
          }`}
        >
          <div
            className={`${isFocusedDate ? "inner-visibel" : "inner-hidden"}`}
          >
            <div className="flex items-center">
              <div>
                <svg
                  width="16.67"
                  height="16.67"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2508 0.514648C6.31048 0.514648 0.690308 6.1474 0.690308 13.0877C0.690308 20.0281 6.31048 25.6608 13.2508 25.6608C20.2038 25.6608 25.8365 20.0281 25.8365 13.0877C25.8365 6.1474 20.2038 0.514648 13.2508 0.514648ZM13.2637 23.1462C7.70636 23.1462 3.20519 18.6451 3.20519 13.0878C3.20519 7.53045 7.70636 3.02928 13.2637 3.02928C18.821 3.02928 23.3221 7.53045 23.3221 13.0878C23.3221 18.6451 18.821 23.1462 13.2637 23.1462ZM12.0061 6.80121H13.8921V13.4021L19.55 16.7591L18.607 18.3056L12.0061 14.3451V6.80121Z"
                    fill={`${startDate ? "#2F80ED" : "#4F4F4F"}`}
                  />
                </svg>
              </div>

              <div className="pl-[18px]">
                <div className="relative flex items-center w-[193px]">
                  <DatePicker
                    id="custom-datepicker-input"
                    showPopperArrow={false}
                    selected={startDate}
                    onChange={handleDateChange}
                    className="custom-datepicker w-full h-[40px] border-[1px] border-[#828282] rounded-[5px] pl-3 pr-10"
                    dateFormat="dd/MM/yyyy"
                    popperClassName="custom-popper"
                    placeholderText="Set Date"
                    onFocus={handleFocusDateChange}
                    onBlur={handleBlurDateChange}
                  />
                  <div className="absolute right-[12.67px]">
                    <label htmlFor="custom-datepicker-input">
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.3333 1.99996H11.6667V0.666626H10.3333V1.99996H3.66668V0.666626H2.33334V1.99996H1.66668C0.933344 1.99996 0.333344 2.59996 0.333344 3.33329V14C0.333344 14.7333 0.933344 15.3333 1.66668 15.3333H12.3333C13.0667 15.3333 13.6667 14.7333 13.6667 14V3.33329C13.6667 2.59996 13.0667 1.99996 12.3333 1.99996ZM12.3333 14H1.66668V6.66663H12.3333V14ZM1.66668 5.33329H12.3333V3.33329H1.66668V5.33329Z"
                          fill="#4F4F4F"
                        />
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center pt-[13px]">
              <div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z"
                    fill={
                      text && text !== "No Description" ? "#2F80ED" : "#4F4F4F"
                    }
                  />
                </svg>
              </div>

              <div className="pl-[18px]">
                <div className="relative flex items-center">
                  <div className="text-justify text-[14px] font-regular text-[#4F4F4F]">
                    {/*   <textarea
                    ref={textareaRef}
                    onChange={(e) => setText(e.target.value)}
                    onBlur={handleDescriptionChange}
                    onFocus={(e) => {
                      const isValueNull = e.target.value === "No Description";
                      if (isValueNull) {
                        setText("");
                      }
                    }}
                    className="w-[518.24px]"
                    value={text}
                  /> */}
                    {/*    <div className="w-[518.24px]">
                    <span>{text}</span>
                  </div> */}

                    {isInputText ? (
                      <textarea
                        ref={textareaRef}
                        /*  onChange={(e) => setText(e.target.value)} */
                        onChange={handleInputText}
                        onBlur={handleBlurText}
                        onFocus={(e) => {
                          const isValueNull =
                            e.target.value === "No Description";
                          if (isValueNull) {
                            setText("");
                          }
                        }}
                        className="w-[518.24px]"
                        value={text}
                      />
                    ) : (
                      <div
                        className="w-[518.24px]"
                        onClick={handleClickSpanText}
                      >
                        <span>{text}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
