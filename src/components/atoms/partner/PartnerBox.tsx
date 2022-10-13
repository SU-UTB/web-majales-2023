type Props = {
  children: React.ReactNode;
};

const PartnerBox = ({ children }: Props) => {
  return <div className="mb-8 partner-box md:mb-16">{children}</div>;
};

export default PartnerBox;
