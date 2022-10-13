import { SOCIALS_LINKS } from '../../lib/constants/Socials';
import SocItem from '../atoms/social/SocItem';

const VerticalSocials = () => {
  return (
    <div className="flex-col items-center hidden space-y-4 majales_socials_vertical lg:fixed lg:flex lg:top-72 lg:left-10">
      <SocItem
        linkTo={SOCIALS_LINKS.SU_FB.linkTo}
        imgSrc={SOCIALS_LINKS.SU_FB.imgSrc}
        imgAlt={SOCIALS_LINKS.SU_FB.imgAlt}
      />
      <SocItem
        linkTo={SOCIALS_LINKS.MAJALES_IG.linkTo}
        imgSrc={SOCIALS_LINKS.MAJALES_IG.imgSrc}
        imgAlt={SOCIALS_LINKS.MAJALES_IG.imgAlt}
      />
    </div>
  );
};

export default VerticalSocials;
