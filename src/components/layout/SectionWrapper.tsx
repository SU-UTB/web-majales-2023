interface MyComponentProps {
  children?: React.ReactNode;
  linkTo?: string;
}

const SectionWrapper: React.FC<MyComponentProps> = ({ children, linkTo }) => {
  return (
    <div className='pt-10' id={linkTo}>
      {children}
    </div>
  );
};

export default SectionWrapper;
