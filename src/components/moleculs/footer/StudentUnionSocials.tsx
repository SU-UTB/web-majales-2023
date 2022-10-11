import { SOCIAL_LINKS_IMAGES } from '../../../lib/constants/Socials';
import SocItem from '../../atoms/social/SocItem';

const StudentUnionSocials = () => {
  return (
    <div className="su-socials flex items-center space-x-4">
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

export default StudentUnionSocials;
