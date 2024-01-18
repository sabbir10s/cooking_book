/* eslint-disable react/prop-types */
export const ButtonFill = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-[25px] py-2 rounded-[5px] text-[10px] md:text-[12px] lg:text-[18px] capitalize font-medium text-white bg-primary hover:bg-primary-600 transition duration-300 ease-out ${className}`}
    >
      {children}
    </button>
  );
};
export const ButtonOutline = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-[25px] py-[10px] rounded-[5px] text-[10px] md:text-[12px] lg:text-[18px] capitalize font-medium border border-primary text-primary hover:text-white hover:bg-primary transition duration-300 ease-out ${className}`}
    >
      {children}
    </button>
  );
};
