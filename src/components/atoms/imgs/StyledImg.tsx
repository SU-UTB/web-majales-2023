interface MyComponentProps {
  children?: React.ReactNode;
  src: any;
  alt: string;
  zoomMid?: boolean;
}

const StyledImg: React.FC<MyComponentProps> = ({
  children,
  src,
  alt,
  zoomMid,
}) => {
  return (
    <img
      className={`w-full h-full object-cover ${!zoomMid && 'object-top'}`}
      src={src}
      alt={alt}
    >
      {children}
    </img>
  );
};

export default StyledImg;
