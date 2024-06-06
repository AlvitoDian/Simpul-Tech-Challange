import BubbleChat from "./BubbleChat";
import ChatDivider from "./ChatDivider";

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

      <div
        className="flex-col my-[13.5px] ml-[20px] mr-[11px] custom-scrollbar overflow-auto h-[554px]"
        id="style-3"
      >
        <div className="pr-[18px]">
          <BubbleChat
            name={""}
            message={
              "No worries. It will be completed ASAP. I’ve asked him yesterday."
            }
            date={"19.32"}
            isSender={true}
            userColor={["#9B51E0", "#EEDCFF"]}
          />
          <ChatDivider date={"Today June 09, 2021"} isNewMessage={false} />
          <BubbleChat
            name={"Marry Hilda"}
            message={
              "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks."
            }
            date={"19.32"}
            isSender={false}
            userColor={["#E5A443", "#FCEED3"]}
          />
          <BubbleChat
            name={""}
            message={
              "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary."
            }
            date={"19.32"}
            isSender={true}
            userColor={["#9B51E0", "#EEDCFF"]}
          />
          <BubbleChat
            name={"Mary Hilda"}
            message={"Sure thing, Claren"}
            date={"19.32"}
            isSender={false}
            userColor={["#E5A443", "#FCEED3"]}
          />
          <ChatDivider date={""} isNewMessage={true} />
          <BubbleChat
            name={"Obaidullah Amarkhil"}
            message={"Morning. I’ll try to do them. Thanks"}
            date={"19.32"}
            isSender={false}
            userColor={["#43B78D", "#D2F2EA"]}
          />
        </div>
      </div>

      <div className="flex px-[20px] gap-[13px]">
        <div>
          <input
            type="text"
            placeholder="Type a new message"
            className="font-regular border-[1px] border-[#828282] rounded-[5px] w-[580px] h-[40px] 
            placeholder-[#333333] pl-[16px] "
          />
        </div>

        <button className="flex items-center justify-center bg-[#2F80ED] w-full rounded-[5px] font-bold text-white">
          Send
        </button>
      </div>
    </div>
  );
}
