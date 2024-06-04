export default function TaskButton({
  onClick,
  isOpenQuicks,
  isOpenInbox,
  isOpenTask,
}) {
  const openQuicks = isOpenQuicks
    ? `opacity-100 translate-x-[0px] rotate-0`
    : `opacity-0 translate-x-[190px] rotate-45`;

  const openInbox = isOpenInbox ? `translate-x-[86px]` : `translate-x-[0px]`;

  const openTask = isOpenTask
    ? `w-[68px] h-[68px] bg-[#F8B76B]`
    : `w-[60px] h-[60px] bg-[#F2F2F2]`;

  return (
    <div
      onClick={onClick}
      className={`flex-col mb-[4px] absolute right-[214px] bottom-[27px] cursor-pointer ${openQuicks} ${openInbox}  ${
        isOpenTask
          ? "mb-[0px] translate-x-[180px] z-[10]"
          : "mb-[4px] translate-x-[0px]"
      } transition duration-300`}
    >
      <span
        className={`flex justify-center font-bold text-[16px] text-white mb-[8.87px] ${
          isOpenTask ? "hidden" : ""
        }`}
      >
        Task
      </span>
      <div
        className={`rounded-full flex items-center justify-center pl-[17.78px] pr-[15.56px] pt-[17.78px] pb-[15.56px] ${openTask}`}
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
            d="M4.11114 4.66669H24.1111C25.3334 4.66669 26.3334 5.66669 26.3334 6.88891V21.3334C26.3334 22.5556 25.3334 23.5556 24.1111 23.5556H4.11114C2.88892 23.5556 1.88892 22.5556 1.88892 21.3334V6.88891C1.88892 5.66669 2.88892 4.66669 4.11114 4.66669ZM4.11114 6.88891V21.3334H13V6.88891H4.11114ZM24.1111 21.3334H15.2222V6.88891H24.1111V21.3334ZM23 10.7778H16.3334V12.4445H23V10.7778ZM16.3334 13.5556H23V15.2222H16.3334V13.5556ZM23 16.3334H16.3334V18H23V16.3334Z"
            fill={`${isOpenTask ? "#FFFFFF" : "#F8B76B"}`}
          />
        </svg>
      </div>
    </div>
  );
}
