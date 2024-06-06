export default function ChatDivider({ date, isNewMessage }) {
  return (
    <>
      {isNewMessage ? (
        <div className="flex items-center justify-center my-4">
          <div className="flex-grow bg-[#EB5757] h-[1px]"></div>
          <div className="mx-[10px] flex items-center">
            <span className=" font-bold text-[16px] text-[#EB5757]">
              New Message
            </span>

            <svg
              className="ml-[7.23px]"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3334 6L10.3934 5.06L6.66675 8.78V0.666672H5.33341V8.78L1.61341 5.05334L0.666748 6L6.00008 11.3333L11.3334 6Z"
                fill="#F2F2F2"
              />
            </svg>
          </div>

          <div className="flex-grow bg-[#EB5757] h-[1px]"></div>
        </div>
      ) : (
        <div className="flex items-center justify-center my-4">
          <div className="flex-grow bg-[#4F4F4F] h-[1px]"></div>
          <span className="mx-[26px] font-bold text-[16px] text-[#4F4F4F]">
            {date}
          </span>
          <div className="flex-grow bg-[#4F4F4F] h-[1px]"></div>
        </div>
      )}
    </>
  );
}
