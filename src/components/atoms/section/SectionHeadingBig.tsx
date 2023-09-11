type Props = {
  children?: React.ReactNode;
  color?: string;
};

const SectionHeadingBig = ({ children, color = 'black' }: Props) => {
  return (
    <h5
      className={`mb-6 uppercase text-3xl md:text-3xl txt-extrabold text-${color}`}
      style={{ textShadow: `-2px 2px #1D6858` }}
    >
      {children}
    </h5>
  );
};

export default SectionHeadingBig;
