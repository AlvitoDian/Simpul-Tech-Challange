import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Task({ title, date, description, isDone }) {
  const textareaRef = useRef(null);

  const [startDate, setStartDate] = useState(date);
  const [text, setText] = useState(
    description ? description : "No Description"
  );
  const [isChecked, setIsChecked] = useState(false);

  function resizeTextarea() {
    const textarea = textareaRef.current;
    const charCount = text.length;
    const extraHeight = Math.floor(charCount / 70) * 20 + 20;
    textarea.style.height = `${extraHeight + textarea.scrollHeight}px`;
  }

  useEffect(() => {
    resizeTextarea();
  }, []);

  const handleDescriptionChange = () => {
    console.log("Description Changed : ", text);
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    console.log("Date Changed : ", date);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="flex-col border-b-[1px] border-b-[#828282] ml-[29px] mr-[13px] pb-[19.58px]">
      <div className="pt-[22px] flex items-center justify-between">
        <div className="flex">
          <div className="flex mt-[2px]">
            <input
              id="checkbox"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className={`relative w-[18px] h-[18px] appearance-none border-[2.8px] border-[#828282] rounded-[3px] after:absolute after:left-0 after:top-0 after:h-full after:w-full ${
                isChecked
                  ? "after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjODI4MjgyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjODI4MjgyIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] "
                  : ""
              }after:bg-[length:35px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-white`}
            />
          </div>

          <div className="flex max-w-[360.37px] pl-[22.5px]">
            <span
              className={`font-bold text-[16px] text-[#4F4F4F] ${
                isChecked ? "line-through text-[#828282]" : ""
              }`}
            >
              {title}
            </span>
          </div>
        </div>

        <div className="flex pr-[24px] items-center">
          <div className="pr-[19.75px]">
            <span className="text-[14px] font-regular text-[#EB5757]">
              2 Days Left
            </span>
          </div>
          <div className="pr-[10.32px]">
            <span className="text-[14px] font-regular text-[#4F4F4F]">
              12/06/2021
            </span>
          </div>

          <div className="pr-[15px]">
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.175 7.08753L5 3.27086L8.825 7.08752L10 5.91252L5 0.912526L-1.02722e-07 5.91253L1.175 7.08753Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>

          <div>
            <svg
              width="14"
              height="4"
              viewBox="0 0 14 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 1.75C10.5 2.7125 11.2875 3.5 12.25 3.5C13.2125 3.5 14 2.7125 14 1.75C14 0.7875 13.2125 -3.44227e-08 12.25 -7.64949e-08C11.2875 -1.18567e-07 10.5 0.7875 10.5 1.75ZM8.75 1.75C8.75 0.7875 7.9625 -2.63908e-07 7 -3.0598e-07C6.0375 -3.48052e-07 5.25 0.7875 5.25 1.75C5.25 2.7125 6.0375 3.5 7 3.5C7.9625 3.5 8.75 2.7125 8.75 1.75ZM1.75 -5.35465e-07C2.7125 -4.93392e-07 3.5 0.7875 3.5 1.75C3.5 2.7125 2.7125 3.5 1.75 3.5C0.7875 3.5 -1.18567e-07 2.7125 -7.64949e-08 1.75C-3.44227e-08 0.787499 0.7875 -5.77537e-07 1.75 -5.35465e-07Z"
                fill="#828282"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-col pl-[40.5px] pt-[14px]">
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
                fill={text && text !== "No Description" ? "#2F80ED" : "#4F4F4F"}
              />
            </svg>
          </div>

          <div className="pl-[18px]">
            <div className="relative flex items-center">
              <div className="">
                <p className="text-justify text-[14px] font-regular text-[#4F4F4F]">
                  <textarea
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
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
