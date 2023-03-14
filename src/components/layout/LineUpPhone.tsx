interface MyComponentProps {
  children?: React.ReactNode;
  name?: string;
  genre?: string;
}

const LineUpPhone: React.FC<MyComponentProps> = ({ children, name, genre }) => {
  return (
    <div className='flex w-full xs: bg-[#1D6858] h-[150px] md:h-[200px]  green-shadow'>
      <div className='relative flex w-full'>
        {children}
        {name && (
          <div className='absolute bottom-6 left-0 text-white p-2 font-bold text-xl sm:text-2xl'>
            {name}
          </div>
        )}
        {genre && (
          <div className='absolute bottom-0 left-0 text-white p-2 sm:text-lg'>
            {genre}
          </div>
        )}
      </div>
    </div>
  );
};

export default LineUpPhone;
