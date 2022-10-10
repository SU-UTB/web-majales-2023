import BandItem from '../../lib/types/BandItem';

type Props = {
  band: BandItem;
  children: React.ReactNode;
};

const LineupBand = ({ band, children }: Props) => {
  return <div>{children}</div>;
};

export default LineupBand;
