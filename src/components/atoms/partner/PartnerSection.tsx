type Props = {
  children: React.ReactNode;
};

const PartnerSection = ({ children }: Props) => {
  return <div className="partner-section mb-8 md:mb-16">{children}</div>;
};

export default PartnerSection;
