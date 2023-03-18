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
        className='border-solid px-8 py-4 text-lg uppercase text-black bg-white txt-bold shadow-[-3px_3px_rgb(96,228,204)]'
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonRegister;
