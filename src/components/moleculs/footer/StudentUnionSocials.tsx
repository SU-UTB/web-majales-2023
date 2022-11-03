import { SU_SOCIAL_LINKS_IMAGES } from '../../../lib/constants/Socials';
import SocItem from '../../atoms/social/SocItem';

const StudentUnionSocials = () => {
  return (
    <div className="flex items-center su-socials space-x-4">
      {SU_SOCIAL_LINKS_IMAGES.map((socItem) => (
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
