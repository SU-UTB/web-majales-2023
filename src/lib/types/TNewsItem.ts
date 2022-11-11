import PictureLinkItem from './TPictureLinkItem';

type NewsItem = PictureLinkItem & {
  category: string;
  headlineTxt: string;
  description: string;
  linkTxt: string;
};

export default NewsItem;
