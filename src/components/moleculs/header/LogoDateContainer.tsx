import majalesLogo from "/maj_logo.png";
import GetYear from "../../../utils/GetYear";

const LogoDateContainer = () => {
  return (
    <div className="flex items-center logo-date-container space-x-8 lg:pt-0">
      <a href="./">
        <img src={majalesLogo} alt="Majáles logo modré" />
      </a>
      <p className="text-[#F47011] txt-bold">5.&nbsp;5.&nbsp;{GetYear()}</p>
    </div>
  );
};

export default LogoDateContainer;
