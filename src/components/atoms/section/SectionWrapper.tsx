type Props = {
  children: React.ReactNode;
};

const SectionWrapper = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-center h-full px-8 mx-auto section-wrapper md:w-4/5 lg:w-3/5 md:px-4">
      {children}
    </div>
  );
};

export default SectionWrapper;
