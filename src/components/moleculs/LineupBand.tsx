import BandItem from '../../lib/types/TBandItem';
import SlotProps from '../../lib/types/TSlot';
import ResponsivePicture from '../atoms/picture/ResponsivePicture';

type Props = {
  band: BandItem;
  bandSocials?: React.ReactNode;
  bandDescription?: React.ReactNode;
  classNames?: string;
};

const BandSocials = ({ children }: SlotProps) => {
  return <div className="band-socials">{children}</div>;
};

const BandDescription = ({ children }: SlotProps) => {
  return <div className="band-description">{children}</div>;
};

const LineupBand = ({
  band,
  bandSocials,
  bandDescription,
  classNames = '',
}: Props) => {
  return (
    <div className={`relative w-full md-4 lg:mb-0 ${classNames}`}>
      {bandSocials && <BandSocials>{bandSocials}</BandSocials>}
      {bandDescription && <BandDescription>{bandDescription}</BandDescription>}
      <ResponsivePicture
        imgDesktop={band.imgSrc}
        imgMobile={band.imgSrcM}
        imgAlt={band.bandName}
      />
    </div>
  );
};

export default LineupBand;
