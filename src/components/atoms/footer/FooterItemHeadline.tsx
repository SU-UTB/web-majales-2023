type Props = {
  headlineText: string;
  classNames?: string;
};

const FooterItemHeadline = ({ headlineText, classNames = '' }: Props) => {
  return (
    <h6 className={`text-white uppercase ${classNames}`}>{headlineText}</h6>
  );
};

export default FooterItemHeadline;
