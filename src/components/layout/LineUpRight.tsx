interface MyComponentProps {
  children?: React.ReactNode;
}

const LineUpRight: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className='w-full md:w-2/5 bg-[#1D6858] min-h-[120px]'>{children}</div>
  );
};

export default LineUpRight;
