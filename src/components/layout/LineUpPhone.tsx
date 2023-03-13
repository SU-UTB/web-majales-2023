interface MyComponentProps {
  children?: React.ReactNode;
}

const LineUpPhone: React.FC<MyComponentProps> = ({ children }) => {
  return (
    <div className='w-full bg-[#1D6858] min-h-[150px] md:min-h-[200px] green-shadow'>
      {children}
    </div>
  );
};

export default LineUpPhone;
