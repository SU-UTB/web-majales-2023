interface IconProps {
  children?: React.ReactNode;
  src: any;
  alt: string;
}

const StyledIcon: React.FC<IconProps> = ({ children, src, alt }) => {
  return (
    <img className='w-4 h-4 md:w-8 md:h-8' src={src} alt={alt}>
      {children}
    </img>
  );
};

export default StyledIcon;
