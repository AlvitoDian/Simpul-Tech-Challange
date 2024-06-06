export default function ChatSection() {
  return (
    <div className="flex-col">
      <div className="flex justify-between border-b-[1px] border-b-[#BDBDBD]">
        <div className="flex pl-[25px] pt-[17px] pb-[18.44px]">
          <div className="pt-[12px] pr-[13.65px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                fill="#333333"
              />
            </svg>
          </div>

          <div className="flex-col">
            <div className="font-bold text-[16px] text-[#2F80ED]">
              I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
            </div>
            <div className="font-regular text-[12px] text-[#333333] pt-[3px]">
              3 Participants
            </div>
          </div>
        </div>

        <div className=" pt-[29px] pb-[18.44px] pr-[21px]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="#333333"
            />
          </svg>
        </div>
      </div>

      <div className="flex-col py-[13.5px] px-[20px]">INI CHAT BUBBLE</div>
    </div>
  );
}
