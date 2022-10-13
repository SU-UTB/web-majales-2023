import majalesLogo from '/maj_logo.png';

const LogoDateContainer = () => {
  return (
    <div className="flex items-center logo-date-container space-x-8 lg:pt-4">
      <a href="./">
        <img src={majalesLogo} alt="Majáles logo modré" />
      </a>
      <p className="text-pinky txt-bold">6.&nbsp;5.&nbsp;2023</p>
    </div>
  );
};

export default LogoDateContainer;
