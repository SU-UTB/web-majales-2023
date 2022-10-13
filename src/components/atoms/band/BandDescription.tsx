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
      <h3 className="text-4xl text-white txt-bold">{bandName}</h3>
      {bandSubName && <sup className="text-lg text-white">{bandSubName}</sup>}
      <p className="text-lg text-white">{bandType}</p>
    </div>
  );
};

export default BandDescription;
