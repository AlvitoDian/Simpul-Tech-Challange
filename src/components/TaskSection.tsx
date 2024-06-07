export default function TaskSection() {
  return (
    <div className="flex-col">
      <div className="flex justify-between pl-[114px] pr-[23px] pt-[18px]">
        <div className="flex items-center justify-between border-[1px] border-[#828282] rounded-[5px] py-[7px] px-[10px]">
          <span className="text-[16px] font-bold text-[#4F4F4F]">My Tasks</span>
          <div className="pl-[10px]">
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.59795 0.912477L5.77295 4.72914L1.94795 0.912476L0.772949 2.08748L5.77295 7.08748L10.7729 2.08748L9.59795 0.912477Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between bg-[#2F80ED] rounded-[5px] py-[7px] px-[10px]">
          <span className="text-[16px] font-bold text-[#FFFFFF]">New Task</span>
        </div>
      </div>

      <div className="flex-col">
        <div className="pt-[22px] flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex pl-[29px]">
              <input
                id="checkbox"
                type="checkbox"
                className="w-[18px] h-[18px]"
              />
            </div>

            <div className="flex pl-[22.5px]">
              <span className="font-bold text-[16px] text-[#4F4F4F]">
                Close off Case #012920- RODRIGUES, Amiguel
              </span>
            </div>
          </div>

          <div className="flex pr-[34px] items-center">
            <div className="pr-[19.75px]">
              <span className="text-[14px] font-regular text-[#EB5757]">
                2 Days Left
              </span>
            </div>
            <div className="pr-[10.32px]">
              <span className="text-[14px] font-regular text-[#4F4F4F]">
                12/06/2021
              </span>
            </div>

            <div className="pr-[15px]">
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.175 7.08753L5 3.27086L8.825 7.08752L10 5.91252L5 0.912526L-1.02722e-07 5.91253L1.175 7.08753Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>

            <div>
              <svg
                width="14"
                height="4"
                viewBox="0 0 14 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5 1.75C10.5 2.7125 11.2875 3.5 12.25 3.5C13.2125 3.5 14 2.7125 14 1.75C14 0.7875 13.2125 -3.44227e-08 12.25 -7.64949e-08C11.2875 -1.18567e-07 10.5 0.7875 10.5 1.75ZM8.75 1.75C8.75 0.7875 7.9625 -2.63908e-07 7 -3.0598e-07C6.0375 -3.48052e-07 5.25 0.7875 5.25 1.75C5.25 2.7125 6.0375 3.5 7 3.5C7.9625 3.5 8.75 2.7125 8.75 1.75ZM1.75 -5.35465e-07C2.7125 -4.93392e-07 3.5 0.7875 3.5 1.75C3.5 2.7125 2.7125 3.5 1.75 3.5C0.7875 3.5 -1.18567e-07 2.7125 -7.64949e-08 1.75C-3.44227e-08 0.787499 0.7875 -5.77537e-07 1.75 -5.35465e-07Z"
                  fill="#828282"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex-col pl-[69.5px]">
          <div className="flex">
            <span>INI TANGGAL</span>
          </div>
          <div className="flex">
            <span>INI Deskripsi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
