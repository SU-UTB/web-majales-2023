type Props = {
  headlineText: string;
  classNames?: string;
};

const FooterItemHeadline = ({ headlineText, classNames = '' }: Props) => {
  return (
    <h6
      className={`text-black uppercase text-[18px] md:text-[20px] xl:text-[24px] font-headline ${classNames}`}
    >
      {headlineText}
    </h6>
  );
};

export default FooterItemHeadline;
