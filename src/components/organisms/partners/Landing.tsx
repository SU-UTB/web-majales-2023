import majalesLogo from '../../../assets/partners/majales_logo.png';
import LandingHeading from '../../atoms/landing/LandingHeading';
import VerticalSocials from '../../shared/VerticalSocials';

const Landing = () => {
  return (
    <section
      id="landing-partners"
      className="relative py-12 bg-[url('/src/assets/partners/m_partners_landing.png')] md:bg-[url('/src/assets/partners/partners_landing.png')] bg-no-repeat bg-top bg-cover"
    >
      <VerticalSocials />
      <div className="flex flex-wrap items-center justify-around">
        <div className="w-full img-section md:w-4/5 lg:w-2/5">
          <img src={majalesLogo} alt="Majáles UTB Zlín 2022" />
        </div>
        <div className="w-full px-8 heading-section md:w-4/5 lg:w-2/5 md:px-0">
          <LandingHeading landingHeadingText="S kým to na vás hrajeme?" />
          <div className="flex flex-wrap items-center about-lineup">
            <div className="about-txt md:w-full 2xl:w-4/5">
              <p className="mb-2 text-white txt-bold">
                Staňte se partnerem a&nbsp;nechte si zahrát, po čem vaše srdce
                touží.
              </p>
              <p className="text-white">
                Koncept a&nbsp;formu spolupráce můžeme upravit podle vašich
                požadavků do podoby individuální nabídky. Pojďte do toho s námi,
                ať je letošní ročník nebesky skvělý!
                <span className="txt-bold">
                  Ozvěte se nám na
                  <a className="txt-bold" href="mailto:skojec@sutb.cz">
                    skojec@sutb.cz
                  </a>
                  .
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
