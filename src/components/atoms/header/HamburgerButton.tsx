type Props = {
  active: boolean;
  handleClick: () => void;
};

const HamburgerButton = ({ active, handleClick }: Props) => {
  console.log(active);
  return (
    // TODO active classname
    <button
      className={`absolute z-10 cursor-pointer hamburger-btn lg:hidden right-6 outline-none border-0`}
      aria-label="Zobraz menu"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="26"
        viewBox="0 0 40 26"
        fill="none"
      >
        <line
          x1="2"
          y1="2"
          x2="40"
          y2="2"
          stroke="#3724B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="2"
          y1="13"
          x2="40"
          y2="13"
          stroke="#3724B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="2"
          y1="24"
          x2="40"
          y2="24"
          stroke="#3724B6"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default HamburgerButton;
