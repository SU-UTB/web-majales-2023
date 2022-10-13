import { SOCIAL_LINKS_IMAGES } from '../../../lib/constants/Socials';
import SocItem from '../../atoms/social/SocItem';

const MajalesSocials = () => {
  return (
    <div className="flex items-center justify-center mb-4 maj-socials space-x-4 md:mb-0">
      {SOCIAL_LINKS_IMAGES.map((socItem) => (
        <SocItem
          key={socItem.imgSrc}
          linkTo={socItem.linkTo}
          imgSrc={socItem.imgSrc}
          imgAlt={socItem.imgAlt}
        />
      ))}
    </div>
  );
};

export default MajalesSocials;
