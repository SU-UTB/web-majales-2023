type ButtonRegisterProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

const ButtonRegister: React.FC<ButtonRegisterProps> = ({
  children,
  onClick,
}) => {
  return (
    <>
      <button
        className='border-solid px-4 py-4 sm:px-8 sm:py-4 text-sm md:text-lg uppercase text-black bg-white txt-bold green-shadow'
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonRegister;
