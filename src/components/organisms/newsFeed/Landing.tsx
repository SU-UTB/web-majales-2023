import LandingHeading from '../../atoms/landing/LandingHeading';
import VerticalSocials from '../../shared/VerticalSocials';

const Landing = () => {
  return (
    <section
      id="landing-news"
      className="relative flex bg-[url('/src/assets/news/m_news_landing.png')] md:bg-[url('/src/assets/news/news_landing.png')] bg-no-repeat bg-cover min-h-[60vh] bg-[position:0%_10%] bg-[size:100%_100%]"
    >
      <VerticalSocials />
      <div className="w-full px-8 mx-auto text-right section-wrapper sm:text-left sm:w-4/5 sm:px-4">
        <LandingHeading
          landingHeadingText="Co se u nás právě děje?"
          className="mt-36 lg:ml-8 xl:mt-48 sm:mb-40 xl:mb-64"
        />
      </div>
    </section>
  );
};

export default Landing;
