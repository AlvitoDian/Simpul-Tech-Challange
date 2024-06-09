export default function LoadingTasks() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex-col items-center justify-center">
        <div className="flex justify-center mb-[12.7px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="73"
            height="73"
            viewBox="0 0 24 24"
          >
            <path
              fill="#F8F8F8"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            />
            <path
              fill="#C4C4C4"
              d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
            >
              <animateTransform
                attributeName="transform"
                dur="1s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </path>
          </svg>
        </div>

        <div className="flex justify-center">
          <span className="font-bold text-[#4F4F4F]">
            Loading Task List ...
          </span>
        </div>
      </div>
    </div>
  );
}
