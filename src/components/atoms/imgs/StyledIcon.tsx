interface IconProps {
  children?: React.ReactNode;
  src: any;
  alt: string;
}

const StyledIcon: React.FC<IconProps> = ({ children, src, alt }) => {
  return (
    <img className='w-8 h-8 xs:w-6 xs:h-6 xl:w-8 xl:h-8' src={src} alt={alt}>
      {children}
    </img>
  );
};

export default StyledIcon;
