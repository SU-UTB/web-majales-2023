interface MyComponentProps {
  children?: React.ReactNode;
}

const LineUpRow: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className='flex flex-col w-full px-4 gap-4 md:w-4/5 md:flex-row md:px-0 min-h-[200px]'>
      {children}
    </div>
  );
};

export default LineUpRow;
