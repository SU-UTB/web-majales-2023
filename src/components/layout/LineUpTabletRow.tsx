interface MyComponentProps {
  children?: React.ReactNode;
}

const LineUpTabletRow: React.FC<MyComponentProps> = ({ children }) => {
  return <div className='flex w-full gap-4'>{children}</div>;
};

export default LineUpTabletRow;
