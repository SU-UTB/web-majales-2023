interface MyComponentProps {
  children?: React.ReactNode;
  name?: string;
  genre?: string;
}

const LineUpLeftHalf: React.FC<MyComponentProps> = ({
  children,
  name,
  genre,
}) => {
  return (
    <div className='w-full md:w-1/2 bg-[#1D6858] min-h-[120px] green-shadow'>
      <div className='relative'>
        {children}
        {name && (
          <div className='absolute bottom-6 left-0 text-white p-2 font-bold text-2xl'>
            {name}
          </div>
        )}
        {genre && (
          <div className='absolute bottom-0 left-0 text-white p-2 text-lg'>
            {genre}
          </div>
        )}
      </div>
    </div>
  );
};

export default LineUpLeftHalf;
