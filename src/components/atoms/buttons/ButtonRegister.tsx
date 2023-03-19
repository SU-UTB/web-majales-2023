type ButtonRegisterProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  redirect?: string;
};

const ButtonRegister: React.FC<ButtonRegisterProps> = ({
  children,
  onClick,
  redirect,
}) => {
  return (
    <>
      <button
        className='border-solid px-4 py-4 sm:px-8 sm:py-4 text-sm md:text-lg uppercase text-black bg-white txt-bold green-shadow'
        onClick={onClick}
      >
        {redirect ? (
          <a href={redirect} target='_blank' rel='noopener noreferrer'>
            {children}
          </a>
        ) : (
          children
        )}
      </button>
    </>
  );
};

export default ButtonRegister;
