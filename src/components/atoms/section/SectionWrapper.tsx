type Props = {
  children: React.ReactNode;
};

const SectionWrapper = ({ children }: Props) => {
  return (
    <div className="section-wrapper md:w-4/5 lg:w-3/5 mx-auto px-8 md:px-4">
      {children}
    </div>
  );
};

export default SectionWrapper;
