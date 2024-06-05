import LoadingChats from "./LoadingChats";
import { useState, useEffect } from "react";

export default function ChatContact() {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {/* Searchbar */}
      <div className="flex justify-center mt-[20px]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="font-regular border-[1px] border-[#828282] rounded-[5px] w-[666px] h-[32px] 
            placeholder-[#333333] pl-[68.82px] "
          />
          <div className="absolute right-[58.82px] bottom-[10px] cursor-pointer">
            <svg
              width="12"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.21143 7.54717H8.75345L12.1771 10.9777L11.1548 12L7.72429 8.57633V8.03431L7.53905 7.8422C6.75688 8.51458 5.74145 8.91938 4.63682 8.91938C2.17369 8.91938 0.177124 6.92281 0.177124 4.45969C0.177124 1.99657 2.17369 0 4.63682 0C7.09994 0 9.09651 1.99657 9.09651 4.45969C9.09651 5.56432 8.6917 6.57976 8.01932 7.36192L8.21143 7.54717ZM1.54933 4.4597C1.54933 6.16811 2.92841 7.54718 4.63681 7.54718C6.34522 7.54718 7.72429 6.16811 7.72429 4.4597C7.72429 2.7513 6.34522 1.37222 4.63681 1.37222C2.92841 1.37222 1.54933 2.7513 1.54933 4.4597Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Searchbar End*/}

      {/* Content */}
      {showContent ? (
        <LoadingChats />
      ) : (
        <div className="flex-col">
          <div className="flex items-start mx-[32px] pt-[26px] border-[1px] border-b-[#828282] pb-[37px]">
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.6666 0.745087C10.6366 0.745087 7.37249 4.0092 7.37249 8.0392C7.37249 12.0692 10.6366 15.3333 14.6666 15.3333C18.6966 15.3333 21.9607 12.0692 21.9607 8.0392C21.9607 4.0092 18.6966 0.745087 14.6666 0.745087ZM18.3137 8.0392C18.3137 6.03332 16.6725 4.39215 14.6666 4.39215C12.6607 4.39215 11.0195 6.03332 11.0195 8.0392C11.0195 10.0451 12.6607 11.6863 14.6666 11.6863C16.6725 11.6863 18.3137 10.0451 18.3137 8.0392ZM25.6078 26.2745C25.2431 24.9798 19.5901 22.6274 14.6666 22.6274C9.76131 22.6274 4.14484 24.9616 3.72543 26.2745H25.6078ZM0.0783691 26.2745C0.0783691 21.4239 9.79778 18.9804 14.6666 18.9804C19.5354 18.9804 29.2548 21.4239 29.2548 26.2745V29.9216H0.0783691V26.2745Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-col pl-[17px]">
              <div className="font-bold text-[#2F80ED] max-w-[446px]">
                <span>109220-Naturalization</span>
              </div>
              <div className="text-[#4F4F4F] -mt-[2px]">
                <p className="font-bold">Cameron Philips :</p>
                <p className="font-regular -mt-[5px]">Please check this out!</p>
              </div>
            </div>

            <div className="flex pl-[16px]">
              <div className="text-[#4F4F4F] font-regular">
                January, 1,2021 19:10
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Content End */}
    </>
  );
}
