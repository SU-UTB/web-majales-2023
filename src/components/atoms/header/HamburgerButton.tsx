type Props = {
  active: boolean;
  handleClick: () => void;
};

const HamburgerButton = ({ active, handleClick }: Props) => {
  return (
    <button
      className={`z-10 pt-2 cursor-pointer right-6 border-0`}
      onClick={handleClick}
    >
      {active ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
        >
          <line
            x1='5'
            y1='5'
            x2='25'
            y2='25'
            stroke='black'
            strokeWidth='3'
            strokeLinecap='round'
          />
          <line
            x1='25'
            y1='5'
            x2='5'
            y2='25'
            stroke='black'
            strokeWidth='3'
            strokeLinecap='round'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 40 25'
          fill='none'
        >
          <line
            x1='2'
            y1='2'
            x2='20'
            y2='2'
            stroke='black'
            strokeWidth='4'
            strokeLinecap='round'
          />
          <line
            x1='2'
            y1='13'
            x2='30'
            y2='13'
            stroke='black'
            strokeWidth='4'
            strokeLinecap='round'
          />
          <line
            x1='2'
            y1='24'
            x2='40'
            y2='24'
            stroke='black'
            strokeWidth='4'
            strokeLinecap='round'
          />
        </svg>
      )}
    </button>
  );
};

export default HamburgerButton;
