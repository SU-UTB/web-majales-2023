type Props = {
  bandName: string;
  bandType: string;
  bandSubName: string;
  classNames?: string;
};

const BandDescription = ({
  bandName,
  bandType,
  bandSubName,
  classNames = '',
}: Props) => {
  return (
    // TODO: props class for band-desc
    <div className={`band-desc absolute ${classNames}`}>
      <h3 className="text-white text-4xl txt-bold">{bandName}</h3>
      {bandSubName && <sup className="text-white text-lg">{bandSubName}</sup>}
      <p className="text-white text-lg">{bandType}</p>
    </div>
  );
};

export default BandDescription;
