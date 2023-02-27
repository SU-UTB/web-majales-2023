type Props = {
  sectionHeadingText?: string;
  children?: React.ReactNode;
};

const SectionHeading = ({ sectionHeadingText, children }: Props) => {
  return (
    <h5 className='mb-8 text-3xl txt-bold text-black'>
      {sectionHeadingText}
      {children}
    </h5>
  );
};

export default SectionHeading;
