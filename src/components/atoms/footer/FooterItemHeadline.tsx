type Props = {
  headlineText: string;
};

const FooterItemHeadline = ({ headlineText }: Props) => {
  return (
    <h6 className="text-white uppercase {$$props.class}">{headlineText}</h6>
  );
};

export default FooterItemHeadline;
