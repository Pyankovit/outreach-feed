export enum BUTTON_TYPES {
  MESSAGE = "Message",
  PHONE = "Phone",
  COFFEE = "Coffee",
  BEER = "Beer",
  MEETTING_NOTE = "Meeting Note",
}

export const SideIcon: React.FC<{ type?: BUTTON_TYPES }> = ({ type }) => (
  <div class="relative flex w-16 items-center">
    <div class="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 transform bg-gray-300"></div>
    <div class="text-m flex h-8 w-8 translate-x-1/2 transform items-center justify-center rounded-full bg-gray-300 p-1 text-center font-medium">
      {getIconForType(type)}
    </div>
  </div>
);

export const getIconForType = (buttonType?: BUTTON_TYPES) => {
  switch (buttonType) {
    case BUTTON_TYPES.MESSAGE:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
          />
        </svg>
      );
    case BUTTON_TYPES.PHONE:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      );
    case BUTTON_TYPES.COFFEE:
      return (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      );
    case BUTTON_TYPES.BEER:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M5 6h10a1 1 0 0 1 1 1v8a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4v-8a1 1 0 0 1 1 -1" />
          <path d="M16 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2" />
        </svg>
      );
    case BUTTON_TYPES.MEETTING_NOTE:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      );
  }
};

export const millisecondsToStr = (milliseconds: number) => {
  function numberEnding(number: number) {
    return number > 1 ? "s" : "";
  }
  let temp = Math.floor(milliseconds / 1000);

  const years = Math.floor(temp / 31536000);
  if (years) return years + " year" + numberEnding(years);

  const months = Math.floor((temp %= 31536000) / 2592000);
  if (months) return months + " month" + numberEnding(months);

  const days = Math.floor((temp %= 2592000) / 86400);
  if (days) return days + " day" + numberEnding(days);

  const hours = Math.floor((temp %= 86400) / 3600);
  if (hours) return "about " + hours + " hour" + numberEnding(hours);

  const minutes = Math.floor((temp %= 3600) / 60);
  if (minutes) return minutes + " minute" + numberEnding(minutes);

  const seconds = temp % 60;
  if (seconds) return seconds + " second" + numberEnding(seconds);

  return "just now";
};
