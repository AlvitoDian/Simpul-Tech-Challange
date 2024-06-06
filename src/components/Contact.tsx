export default function Contact({ subject, name, message, date, isRead }) {
  const truncateMessage = (message, maxLength) => {
    if (message.length > maxLength) {
      return message.substring(0, maxLength) + "...";
    }
    return message;
  };

  return (
    <div className="flex items-start mx-[32px] pt-[26px] border-b-[1px] border-b-[#828282] pb-[37px] relative">
      <div className="flex">
        <div className="w-[34px] h-[34px] bg-[#E0E0E0] rounded-full flex items-center justify-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6666 0.745087C10.6366 0.745087 7.37249 4.0092 7.37249 8.0392C7.37249 12.0692 10.6366 15.3333 14.6666 15.3333C18.6966 15.3333 21.9607 12.0692 21.9607 8.0392C21.9607 4.0092 18.6966 0.745087 14.6666 0.745087ZM18.3137 8.0392C18.3137 6.03332 16.6725 4.39215 14.6666 4.39215C12.6607 4.39215 11.0195 6.03332 11.0195 8.0392C11.0195 10.0451 12.6607 11.6863 14.6666 11.6863C16.6725 11.6863 18.3137 10.0451 18.3137 8.0392ZM25.6078 26.2745C25.2431 24.9798 19.5901 22.6274 14.6666 22.6274C9.76131 22.6274 4.14484 24.9616 3.72543 26.2745H25.6078ZM0.0783691 26.2745C0.0783691 21.4239 9.79778 18.9804 14.6666 18.9804C19.5354 18.9804 29.2548 21.4239 29.2548 26.2745V29.9216H0.0783691V26.2745Z"
              fill="#0000008A"
            />
          </svg>
        </div>
        <div className="w-[34px] h-[34px] bg-[#2F80ED] rounded-full flex items-center justify-center -ml-[17px]">
          <svg
            width="12"
            height="12"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6666 0.745087C10.6366 0.745087 7.37249 4.0092 7.37249 8.0392C7.37249 12.0692 10.6366 15.3333 14.6666 15.3333C18.6966 15.3333 21.9607 12.0692 21.9607 8.0392C21.9607 4.0092 18.6966 0.745087 14.6666 0.745087ZM18.3137 8.0392C18.3137 6.03332 16.6725 4.39215 14.6666 4.39215C12.6607 4.39215 11.0195 6.03332 11.0195 8.0392C11.0195 10.0451 12.6607 11.6863 14.6666 11.6863C16.6725 11.6863 18.3137 10.0451 18.3137 8.0392ZM25.6078 26.2745C25.2431 24.9798 19.5901 22.6274 14.6666 22.6274C9.76131 22.6274 4.14484 24.9616 3.72543 26.2745H25.6078ZM0.0783691 26.2745C0.0783691 21.4239 9.79778 18.9804 14.6666 18.9804C19.5354 18.9804 29.2548 21.4239 29.2548 26.2745V29.9216H0.0783691V26.2745Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="flex-col pl-[17px]">
        <div className="flex">
          <div className="flex items-end font-bold text-[#2F80ED] max-w-[446px]">
            <span>{subject}</span>
          </div>

          <div className="flex pl-[16px]">
            <div className="text-[#4F4F4F] font-regular">{date}</div>
          </div>
        </div>
        <div className="text-[#4F4F4F] -mt-[2px]">
          <p className="font-bold">{name}</p>
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
