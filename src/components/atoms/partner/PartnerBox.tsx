type Props = {
  children: React.ReactNode;
};

const PartnerBox = ({ children }: Props) => {
  return <div className="partner-box mb-8 md:mb-16">{children}</div>;
};

export default PartnerBox;
