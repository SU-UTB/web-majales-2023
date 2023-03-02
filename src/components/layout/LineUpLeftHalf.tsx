interface MyComponentProps {
  children?: React.ReactNode;
}

const LineUpLeftHalf: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className='w-full md:w-1/2 bg-[#1D6858] min-h-[120px]'>{children}</div>
  );
};

export default LineUpLeftHalf;
