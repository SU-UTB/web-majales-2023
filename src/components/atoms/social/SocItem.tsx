import PictureLinkItem from '../../../lib/shared/PictureLinkItem';

const SocItem = ({ imgSrc, imgAlt, linkTo }: PictureLinkItem) => {
  return (
    <a
      className="soc-item text-center"
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={imgSrc} alt={imgAlt} className="mx-auto text-center" />
    </a>
  );
};

export default SocItem;
