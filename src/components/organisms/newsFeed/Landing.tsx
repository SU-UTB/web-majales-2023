import LandingHeading from '../../atoms/landing/LandingHeading';
import VerticalSocials from '../../shared/VerticalSocials';

const Landing = () => {
  return (
    <section
      id="landing-news"
      className="relative flex bg-[url('/src/assets/news/m_news_landing.png')] md:bg-[url('/src/assets/news/news_landing.png')] bg-no-repeat bg-top bg-cover"
    >
      <VerticalSocials />
      <div className="section-wrapper w-full text-right sm:text-left sm:w-4/5 mx-auto px-8 sm:px-4">
        <LandingHeading landingHeadingText="Co se u nás právě děje?" />
      </div>
    </section>
  );
};

export default Landing;
