interface MyComponentProps {
  children?: React.ReactNode;
}

const LineUpLeft: React.FC<MyComponentProps> = ({ children }) => {
  return <div className='flex w-full md:w-3/5 gap-4'>{children}</div>;
};

export default LineUpLeft;
