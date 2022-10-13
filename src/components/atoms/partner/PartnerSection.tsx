type Props = {
  children: React.ReactNode;
};

const PartnerSection = ({ children }: Props) => {
  return <div className="mb-8 partner-section md:mb-16">{children}</div>;
};

export default PartnerSection;
