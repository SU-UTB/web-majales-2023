interface MyComponentProps {
  children?: React.ReactNode;
}

const LineUpLeft: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className='flex w-full md:w-3/5 gap-4 bg-no-repeat bg-cover'>
      {children}
    </div>
  );
};

export default LineUpLeft;
