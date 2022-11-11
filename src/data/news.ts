import newsImg from '../assets/news/news_1.jpg';
import NewsItem from '../lib/types/TNewsItem';

export const newsList: NewsItem[] = [
  {
    imgSrc: newsImg,
    imgAlt: 'MAJÁLESOVÁ STEZKA ZLÍNEM',
    category: 'doprovodný program',
    headlineTxt: 'MAJÁLESOVÁ STEZKA ZLÍNEM',
    description:
      'Přeješ si poznat všechna zákoutí města Zlína? Chceš získat roční předplatné na sdílená kola Nextbike? Projdi naší poznávací stezkou, posbírej jedenáct písmen, slož z nich dvě slova a výslednou tajenku vlož do našeho soutěžního formuláře. Lovu zdar!',
    linkTo: 'https://forms.gle/9xTH6LPR2Zn9iZ9c6',
    linkTxt: 'odkaz na formulář',
  },
];
