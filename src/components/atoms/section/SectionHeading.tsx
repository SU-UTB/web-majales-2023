type Props = {
  sectionHeadingText?: string;
  children?: React.ReactNode;
};

const SectionHeading = ({ sectionHeadingText, children }: Props) => {
  return (
    <h5 className="text-3xl txt-bold md:w-4/5 lg:w-3/5 mb-8">
      {sectionHeadingText}
      {children}
    </h5>
  );
};

export default SectionHeading;
