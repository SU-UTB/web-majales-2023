type Props = {
  children?: React.ReactNode;
};

const PartnerHeading = ({ children }: Props) => {
  return (
    <h5
      className={`uppercase text-center text-[24px] xs:text-[28px] md:text-3xl txt-bold text-black`}
      style={{ textShadow: `-2px 2px orange` }}
    >
      {children}
    </h5>
  );
};

export default PartnerHeading;
