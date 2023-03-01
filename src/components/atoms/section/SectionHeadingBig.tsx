type Props = {
  children?: React.ReactNode;
};

const SectionHeadingBig = ({ children }: Props) => {
  return (
    <h5 className='mb-6 uppercase text-3xl md:text-3xl md:mb-8 txt-bold text-black '>
      {children}
    </h5>
  );
};

export default SectionHeadingBig;
