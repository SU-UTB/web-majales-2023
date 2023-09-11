import fbSocial from '../../assets/socials/fb_social.svg';
import igSocial from '../../assets/socials/ig_social.svg';
import majSocial from '../../assets/socials/maj_social.svg';
import suSocial from '../../assets/socials/su_social.svg';
import PictureLinkItem from '../types/TPictureLinkItem';

export const SOCIALS_LINKS = {
  MAJALES_MAIN: { linkTo: './', imgSrc: majSocial, imgAlt: 'majáles' },
  SU_FB: {
    linkTo: 'https://www.facebook.com/studentskaunieutb',
    imgSrc: fbSocial,
    imgAlt: 'Studentská Unie facebook',
  },
  SU_IG: {
    linkTo: 'https://www.instagram.com/studentskaunieutb/',
    imgSrc: suSocial,
    imgAlt: 'Studentská Unie instagram',
  },
  MAJALES_FB: {
    linkTo: 'https://www.facebook.com/events/1379759939433793',
    imgSrc: fbSocial,
    imgAlt: 'majáles facebook',
  },
  MAJALES_IG: {
    linkTo: 'https://www.instagram.com/majalesutb/',
    imgSrc: igSocial,
    imgAlt: 'majáles instagram',
  },
};

export const MAJALES_SOCIAL_LINKS_IMAGES: PictureLinkItem[] = [
  {
    linkTo: SOCIALS_LINKS.MAJALES_MAIN.linkTo,
    imgSrc: SOCIALS_LINKS.MAJALES_MAIN.imgSrc,
    imgAlt: SOCIALS_LINKS.MAJALES_MAIN.imgAlt,
  },
  {
    linkTo: SOCIALS_LINKS.MAJALES_FB.linkTo,
    imgSrc: SOCIALS_LINKS.MAJALES_FB.imgSrc,
    imgAlt: SOCIALS_LINKS.MAJALES_FB.imgAlt,
  },
  {
    linkTo: SOCIALS_LINKS.MAJALES_IG.linkTo,
    imgSrc: SOCIALS_LINKS.MAJALES_IG.imgSrc,
    imgAlt: SOCIALS_LINKS.MAJALES_IG.imgAlt,
  },
];

export const SU_SOCIAL_LINKS_IMAGES: PictureLinkItem[] = [
  {
    linkTo: SOCIALS_LINKS.SU_IG.linkTo,
    imgSrc: SOCIALS_LINKS.SU_IG.imgSrc,
    imgAlt: SOCIALS_LINKS.SU_IG.imgAlt,
  },
  {
    linkTo: SOCIALS_LINKS.SU_FB.linkTo,
    imgSrc: SOCIALS_LINKS.SU_FB.imgSrc,
    imgAlt: SOCIALS_LINKS.SU_FB.imgAlt,
  },
  {
    linkTo: SOCIALS_LINKS.SU_IG.linkTo,
    imgSrc: SOCIALS_LINKS.MAJALES_IG.imgSrc,
    imgAlt: SOCIALS_LINKS.MAJALES_IG.imgAlt,
  },
];
