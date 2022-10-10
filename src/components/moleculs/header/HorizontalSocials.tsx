import PictureLinkItem from '../../../lib/types/PictureLinkItem';
import SocItem from '../../atoms/social/SocItem';

const HorizontalSocials = () => {
  const socialItems: PictureLinkItem[] = [
    {
      linkTo: 'https://www.facebook.com/studentskaunieutb',
      imgSrc: './assets/socials/fb_social.svg',
      imgAlt: 'fb',
    },
    {
      linkTo: 'https://www.instagram.com/majalesutb/',
      imgSrc: './assets/socials/ig_social.svg',
      imgAlt: 'ig',
    },
  ];

  return (
    <div className="majales-socials-horizontal w-20 flex justify-between lg:hidden mt-6">
      {socialItems.map((socItem) => (
        <SocItem
          linkTo={socItem.linkTo}
          imgSrc={socItem.imgSrc}
          imgAlt={socItem.imgAlt}
        />
      ))}
    </div>
  );
};

export default HorizontalSocials;
