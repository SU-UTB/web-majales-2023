import fbIcon from '../../assets/socials/fb_social.svg';
import igIcon from '../../assets/socials/ig_social.svg';
import SocItem from '../atoms/social/SocItem';

const VerticalSocials = () => {
  return (
    <div className="majales_socials_vertical hidden lg:fixed lg:flex items-center flex-col space-y-4 {$$props.class}">
      <SocItem
        linkTo="https://www.facebook.com/studentskaunieutb"
        imgSrc={fbIcon}
        imgAlt="fb"
      />
      <SocItem
        linkTo="https://www.instagram.com/majalesutb/"
        imgSrc={igIcon}
        imgAlt="ig"
      />
    </div>
  );
};

export default VerticalSocials;
