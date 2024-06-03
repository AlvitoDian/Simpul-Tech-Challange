export default function FAB() {
  return (
    <div className="absolute right-[34px] bottom-[27px]">
      <div className="flex gap-[26px] items-end">
        <div className="flex-col mb-[4px]">
          <span className="flex justify-center font-bold text-[16px] text-white mb-[8.87px]">
            Task
          </span>
          <div
            className="rounded-full w-[60px] h-[60px] bg-[#F2F2F2] flex items-center justify-center pl-[17.78px] pr-[15.56px] pt-[17.78px] pb-[15.56px]"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.11114 4.66669H24.1111C25.3334 4.66669 26.3334 5.66669 26.3334 6.88891V21.3334C26.3334 22.5556 25.3334 23.5556 24.1111 23.5556H4.11114C2.88892 23.5556 1.88892 22.5556 1.88892 21.3334V6.88891C1.88892 5.66669 2.88892 4.66669 4.11114 4.66669ZM4.11114 6.88891V21.3334H13V6.88891H4.11114ZM24.1111 21.3334H15.2222V6.88891H24.1111V21.3334ZM23 10.7778H16.3334V12.4445H23V10.7778ZM16.3334 13.5556H23V15.2222H16.3334V13.5556ZM23 16.3334H16.3334V18H23V16.3334Z"
                fill="#F8B76B"
              />
            </svg>
          </div>
        </div>

        <div className="flex-col mb-[4px]">
          <span className="flex justify-center font-bold text-[16px] text-white mb-[8.87px]">
            Inbox
          </span>
          <div
            className="rounded-full w-[60px] h-[60px] bg-[#F2F2F2] flex items-center justify-center pl-[16.67px] pr-[16.67px] pt-[18.89px] pb-[14.44px]"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.4443 3.11066H3.9999C3.38879 3.11066 2.88879 3.61066 2.88879 4.22177V19.7773L7.33324 15.3329H18.4443C19.0555 15.3329 19.5555 14.8329 19.5555 14.2218V4.22177C19.5555 3.61066 19.0555 3.11066 18.4443 3.11066ZM17.3332 5.3328V13.1106H6.41103L5.75547 13.7661L5.11103 14.4106V5.3328H17.3332ZM21.7777 7.55512H23.9999C24.611 7.55512 25.111 8.05512 25.111 8.66623V25.3329L20.6666 20.8885H8.44435C7.83324 20.8885 7.33324 20.3885 7.33324 19.7773V17.5551H21.7777V7.55512Z"
                fill="#8885FF"
              />
            </svg>
          </div>
        </div>

        <div
          className="rounded-full w-[68px] h-[68px] bg-[#2F80ED] flex items-center justify-center"
          style={{ boxShadow: "0px 4px 4px 0px #0000001A" }}
        >
          <div className="w-[56px] h-[56px] flex items-center justify-center">
            <svg
              width="18"
              height="32"
              viewBox="0 0 18 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4427 0.335929C13.3618 0.948634 13.6101 2.19037 12.9974 3.10943L5.73704 14H16C16.7376 14 17.4153 14.406 17.7634 15.0563C18.1114 15.7066 18.0732 16.4957 17.6641 17.1094L8.33077 31.1094C7.71807 32.0285 6.47633 32.2768 5.55727 31.6641C4.63821 31.0514 4.38986 29.8097 5.00257 28.8906L12.263 18H2C1.26241 18 0.584692 17.5941 0.236654 16.9437C-0.111384 16.2934 -0.0732391 15.5043 0.335902 14.8906L9.66924 0.890629C10.2819 -0.0284284 11.5237 -0.276776 12.4427 0.335929Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
