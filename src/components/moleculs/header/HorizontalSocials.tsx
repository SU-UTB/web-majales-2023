import { SOCIALS_LINKS } from '../../../lib/constants/Socials';
import PictureLinkItem from '../../../lib/types/TPictureLinkItem';
import SocItem from '../../atoms/social/SocItem';

const HorizontalSocials = () => {
  return (
    <div className="majales-socials-horizontal w-20 flex justify-between lg:hidden mt-6">
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

export default HorizontalSocials;
