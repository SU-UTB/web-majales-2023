import PictureLinkItem from '../../../lib/types/TPictureLinkItem';

const SocItem = ({ imgSrc, imgAlt, linkTo }: PictureLinkItem) => {
  return (
    <a
      className="text-center soc-item"
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={imgSrc} alt={imgAlt} className="mx-auto text-center" />
    </a>
  );
};

export default SocItem;
