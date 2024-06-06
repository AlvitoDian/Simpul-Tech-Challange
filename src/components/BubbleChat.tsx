export default function BubbleChat({
  name,
  message,
  date,
  isSender,
  userColor,
}) {
  return (
    <>
      {isSender ? (
        <div className="pb-[10px] flex justify-end">
          <div className="flex-col">
            <div
              className={`flex justify-end font-bold text-[14px] pb-[4px]`}
              style={{ color: userColor[0] }}
            >
              You
            </div>

            <div className="flex">
              <div className="pt-[5px] pr-[5px]">
                <svg
                  width="12"
                  height="4"
                  viewBox="0 0 12 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.00008 0.666672C1.26675 0.666672 0.666748 1.26667 0.666748 2.00001C0.666748 2.73334 1.26675 3.33334 2.00008 3.33334C2.73341 3.33334 3.33341 2.73334 3.33341 2.00001C3.33341 1.26667 2.73341 0.666672 2.00008 0.666672ZM10.0001 0.666672C9.26675 0.666672 8.66675 1.26667 8.66675 2.00001C8.66675 2.73334 9.26675 3.33334 10.0001 3.33334C10.7334 3.33334 11.3334 2.73334 11.3334 2.00001C11.3334 1.26667 10.7334 0.666672 10.0001 0.666672ZM4.66675 2.00001C4.66675 1.26667 5.26675 0.666672 6.00008 0.666672C6.73341 0.666672 7.33341 1.26667 7.33341 2.00001C7.33341 2.73334 6.73341 3.33334 6.00008 3.33334C5.26675 3.33334 4.66675 2.73334 4.66675 2.00001Z"
                    fill="#4F4F4F"
                  />
                </svg>
              </div>

              <div
                className={`min-w-[312px] max-w-[518px] flex-col p-[9px] rounded-[5px]`}
                style={{ backgroundColor: userColor[1] }}
              >
                <div className="font-regular text-[14px] text-[#4F4F4F]">
                  {message}
                </div>
                <div className="pt-[5px] font-regular text-[12px] text-[#4F4F4F]">
                  {date}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pb-[10px] flex justify-start">
          <div className="flex-col">
            <div
              className={`flex justify-start font-bold text-[14px] pb-[4px]`}
              style={{ color: userColor[0] }}
            >
              {name}
            </div>

            <div className="flex">
              <div className="min-w-[312px] max-w-[518px] ">
                <div
                  className={`p-[9px] rounded-[5px]`}
                  style={{ backgroundColor: userColor[1] }}
                >
                  <div className="font-regular text-[14px] text-[#4F4F4F]">
                    {message}
                  </div>
                  <div className="pt-[5px] font-regular text-[12px] text-[#4F4F4F]">
                    {date}
                  </div>
                </div>
              </div>
              <div className="pt-[5px] pl-[5px]">
                <svg
                  width="12"
                  height="4"
                  viewBox="0 0 12 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.00008 0.666672C1.26675 0.666672 0.666748 1.26667 0.666748 2.00001C0.666748 2.73334 1.26675 3.33334 2.00008 3.33334C2.73341 3.33334 3.33341 2.73334 3.33341 2.00001C3.33341 1.26667 2.73341 0.666672 2.00008 0.666672ZM10.0001 0.666672C9.26675 0.666672 8.66675 1.26667 8.66675 2.00001C8.66675 2.73334 9.26675 3.33334 10.0001 3.33334C10.7334 3.33334 11.3334 2.73334 11.3334 2.00001C11.3334 1.26667 10.7334 0.666672 10.0001 0.666672ZM4.66675 2.00001C4.66675 1.26667 5.26675 0.666672 6.00008 0.666672C6.73341 0.666672 7.33341 1.26667 7.33341 2.00001C7.33341 2.73334 6.73341 3.33334 6.00008 3.33334C5.26675 3.33334 4.66675 2.73334 4.66675 2.00001Z"
                    fill="#4F4F4F"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
