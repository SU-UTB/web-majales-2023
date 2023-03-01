type Props = {
  children?: React.ReactNode;
};

const ButtonRegister = ({ children }: Props) => {
  return (
    <>
      <a className='border-solid px-8 py-4 text-lg uppercase text-black bg-white txt-bold shadow-[-3px_3px_rgb(96,228,204)]'>
        {children}
      </a>
    </>
  );
};

export default ButtonRegister;
