import newsImg from '../../../assets/news/news_1.jpg';
import NewsItemLink from '../../atoms/news/NewsItemLink';

const NewsList = () => {
  const newsList = [
    {
      imgSrc: newsImg,
      category: 'doprovodný program',
      headlineTxt: 'MAJÁLESOVÁ STEZKA ZLÍNEM',
      description:
        'Přeješ si poznat všechna zákoutí města Zlína? Chceš získat roční předplatné na sdílená kola Nextbike? Projdi naší poznávací stezkou, posbírej jedenáct písmen, slož z nich dvě slova a výslednou tajenku vlož do našeho soutěžního formuláře. Lovu zdar!',
      linkTo: 'https://forms.gle/9xTH6LPR2Zn9iZ9c6',
      linkTxt: 'odkaz na formulář',
    },
  ];

  return (
    <section id="news-list" className="relative py-6 -top-36">
      <div className="px-4 mx-auto news-wrapper md:w-4/5">
        {newsList.map((newsItem) => (
          <div
            key={newsItem.imgSrc}
            className="flex flex-wrap mb-12 lg:justify-between"
          >
            <div className="news-item-img lg:w-4/12">
              <a
                href={newsItem.linkTo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="block object-cover object-center w-full h-full"
                  src={newsItem.imgSrc}
                  alt={newsItem.headlineTxt}
                />
              </a>
            </div>
            <div className="px-2 py-4 news-item-txt lg:px-4 lg:w-8/12">
              <div className="px-4 py-2 mb-4 text-white news-item-category bg-dark_blu max-w-max">
                {newsItem.category}
              </div>
              <h4 className="mb-8 text-2xl uppercase text-pinky txt-extrabold">
                {newsItem.headlineTxt}
              </h4>
              <p className="mb-4">{newsItem.description}</p>
              <div className="flex items-center justify-between">
                <hr className="w-1/2 sm:w-7/12 lg:w-3/4 bg-dark_blu_txt" />
                <NewsItemLink
                  linkTo={newsItem.linkTo}
                  linkText={newsItem.linkTxt}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsList;
