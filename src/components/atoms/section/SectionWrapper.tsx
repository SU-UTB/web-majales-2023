type Props = {
  children: React.ReactNode;
};

const SectionWrapper = ({ children }: Props) => {
  return (
    <section className='flex flex-col justify-center h-full px-12 mx-auto section-wrapper md:w-4/5 lg:w-3/5 md:px-4'>
      {children}
    </section>
  );
};

export default SectionWrapper;
