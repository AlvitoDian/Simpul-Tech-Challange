export default function InboxButton({
  onClick,
  isOpenQuicks,
  isOpenInbox,
  isOpenTask,
}) {
  const openQuicks = isOpenQuicks
    ? `opacity-100 translate-x-[0px] rotate-0`
    : `opacity-0 translate-x-[100px] rotate-45`;

  const openInbox = isOpenInbox
    ? `w-[68px] h-[68px] bg-[#8785FF]`
    : `w-[60px] h-[60px] bg-[#F2F2F2]`;

  return (
    <div
      onClick={onClick}
      className={`flex-col absolute right-[128px] bottom-[27px] cursor-pointer ${openQuicks} ${
        isOpenInbox
          ? "mb-[0px] translate-x-[94px] z-[10]"
          : "mb-[4px] translate-x-[0px]"
      } transition duration-300 `}
    >
      <span
        className={`flex justify-center font-bold text-[16px] text-white mb-[8.87px] ${
          (!isOpenQuicks && !isOpenInbox && !isOpenTask) ||
          isOpenInbox ||
          isOpenTask
            ? "hidden"
            : ""
        }`}
      >
        Inbox
      </span>
      <div
        className={`rounded-full ${openInbox} flex items-center justify-center pl-[16.67px] pr-[16.67px] pt-[18.89px] pb-[14.44px] transition duration-300`}
        style={{ boxShadow: "0px 4px 4px 0px #0000001A" }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4443 3.11066H3.9999C3.38879 3.11066 2.88879 3.61066 2.88879 4.22177V19.7773L7.33324 15.3329H18.4443C19.0555 15.3329 19.5555 14.8329 19.5555 14.2218V4.22177C19.5555 3.61066 19.0555 3.11066 18.4443 3.11066ZM17.3332 5.3328V13.1106H6.41103L5.75547 13.7661L5.11103 14.4106V5.3328H17.3332ZM21.7777 7.55512H23.9999C24.611 7.55512 25.111 8.05512 25.111 8.66623V25.3329L20.6666 20.8885H8.44435C7.83324 20.8885 7.33324 20.3885 7.33324 19.7773V17.5551H21.7777V7.55512Z"
            fill={`${isOpenInbox ? "#FFFFFF" : "#8885FF"}`}
          />
        </svg>
      </div>
    </div>
  );
}
