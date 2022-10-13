type Props = {
  active: boolean;
  handleClick: () => void;
};

const HamburgerButton = ({ active, handleClick }: Props) => {
  return (
    // TODO active classname
    <div
      className="z-10 w-8 h-8 cursor-pointer hamburger-btn lg:hidden"
      onClick={() => {
        (active = !active), handleClick;
      }}
    >
      <div className="line1 bg-dark_blu"></div>
      <div className="line2 bg-dark_blu"></div>
      <div className="line3 bg-dark_blu"></div>
    </div>
  );
};

export default HamburgerButton;
