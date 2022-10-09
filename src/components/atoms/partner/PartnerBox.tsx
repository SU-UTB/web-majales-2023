type Props = {
  children: any;
};

const PartnerBox = ({ children }: Props) => {
  return <div className="partner-box mb-8 md:mb-16">{children}</div>;
};

export default PartnerBox;
