import PictureLinkItem from '../../../lib/shared/PictureLinkItem';
import SocItem from '../../atoms/social/SocItem';

const StudentUnionSocials = () => {
  const socialItems: PictureLinkItem[] = [
    {
      linkTo: './',
      imgSrc: './assets/socials/maj_social.png',
      imgAlt: 'majales',
    },
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
    <div className="su-socials flex items-center space-x-4">
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

export default StudentUnionSocials;
