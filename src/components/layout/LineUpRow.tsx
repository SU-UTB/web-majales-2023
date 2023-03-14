interface MyComponentProps {
  children?: React.ReactNode;
}

const LineUpRow: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className='flex flex-col w-full px-4 gap-4 md:w-4/5 lg:flex-row md:px-0'>
      {children}
    </div>
  );
};

export default LineUpRow;
