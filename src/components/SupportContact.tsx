export default function SupportContact({ name, message, date, isRead }) {
  const truncateMessage = (message, maxLength) => {
    if (message.length > maxLength) {
      return message.substring(0, maxLength) + "...";
    }
    return message;
  };

  return (
    <div className="flex items-start mx-[32px] pt-[26px] pb-[37px] relative">
      <div className="flex justify-center w-[51px]">
        <div className="w-[34px] h-[34px] bg-[#2F80ED] rounded-full flex items-start pt-[8px] justify-center ">
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.296 0V1.712H2.168V5.136H6.496V6.856H2.168V11.568H0V0H7.296Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="flex-col pl-[17px]">
        <div className="flex">
          <div className="flex items-end font-bold text-[#2F80ED] max-w-[446px]">
            <span>{name}</span>
          </div>

          <div className="flex pl-[16px]">
            <div className="text-[#4F4F4F] font-regular">{date}</div>
          </div>
        </div>
        <div className="text-[#4F4F4F] mt-[5px]">
          <p className="font-regular -mt-[5px]">
            {truncateMessage(message, 75)}
          </p>
        </div>
      </div>

      {!isRead ? (
        <div className="absolute right-0 bottom-[40px] w-[10px] h-[10px] bg-[#EB5757] rounded-full"></div>
      ) : (
        ""
      )}
    </div>
  );
}
