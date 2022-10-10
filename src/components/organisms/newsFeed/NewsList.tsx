import NewsItemLink from '../../atoms/news/NewsItemLink';

const NewsList = () => {
  const newsList = [
    {
      imgSrc: './assets/news/news_1.jpg',
      category: 'doprovodný program',
      headlineTxt: 'MAJÁLESOVÁ STEZKA ZLÍNEM',
      description:
        'Přeješ si poznat všechna zákoutí města Zlína? Chceš získat roční předplatné na sdílená kola Nextbike? Projdi naší poznávací stezkou, posbírej jedenáct písmen, slož z nich dvě slova a výslednou tajenku vlož do našeho soutěžního formuláře. Lovu zdar!',
      linkTo: 'https://forms.gle/9xTH6LPR2Zn9iZ9c6',
      linkTxt: 'odkaz na formulář',
    },
  ];

  return (
    <section id="news-list" className="relative -top-36 py-6">
      <div className="news-wrapper px-4 md:w-4/5 mx-auto">
        {newsList.map((newsItem) => (
          <div className="flex mb-12 lg:justify-between flex-wrap">
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
            <div className="news-item-txt py-4 px-2 lg:px-4 lg:w-8/12">
              <div className="news-item-category px-4 py-2 bg-dark_blu text-white mb-4 max-w-max">
                {newsItem.category}
              </div>
              <h4 className="text-pinky text-2xl txt-extrabold mb-8 uppercase">
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
