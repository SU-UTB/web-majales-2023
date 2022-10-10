type Props = {
  band: Band;
  children: React.ReactNode;
};

const LineupBand = ({ band, children }: Props) => {
  return <div>{children}</div>;
};

export default LineupBand;
