type Props = {
  paragraphText?: string;
  children?: React.ReactNode;
};

const Paragraph = ({ paragraphText, children }: Props) => {
  return (
    <p className='text-base md:text-base xl:text-lg text-black'>
      {paragraphText}
      {children}
    </p>
  );
};

export default Paragraph;
