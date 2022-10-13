import LandingHeading from '../../atoms/landing/LandingHeading';
import VerticalSocials from '../../shared/VerticalSocials';

const Landing = () => {
  return (
    <section
      id="landing-news"
      className="relative flex bg-[url('/src/assets/news/m_news_landing.png')] md:bg-[url('/src/assets/news/news_landing.png')] bg-no-repeat bg-top bg-cover"
    >
      <VerticalSocials />
      <div className="w-full px-8 mx-auto text-right section-wrapper sm:text-left sm:w-4/5 sm:px-4">
        <LandingHeading landingHeadingText="Co se u nás právě děje?" />
      </div>
    </section>
  );
};

export default Landing;
