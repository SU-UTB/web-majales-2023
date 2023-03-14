interface MyComponentProps {
  children?: React.ReactNode;
  src: any;
  alt: string;
}

const StyledImg: React.FC<MyComponentProps> = ({ children, src, alt }) => {
  return (
    <img className='w-full h-full object-cover object-top' src={src} alt={alt}>
      {children}
    </img>
  );
};

export default StyledImg;
