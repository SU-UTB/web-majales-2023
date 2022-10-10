import PictureLinkItem from '../../../lib/types/PictureLinkItem';

const PartnerPicture = ({ imgSrc, imgAlt, linkTo }: PictureLinkItem) => {
  return (
    <a href={linkTo} target="_blank" rel="noopener noreferrer">
      <img
        className="block object-contain object-center mx-auto"
        width="250px"
        height="250px"
        src={imgSrc}
        alt={imgAlt}
      />
    </a>
  );
};

export default PartnerPicture;
