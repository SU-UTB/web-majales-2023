import homeMajalesLogo from '../../../assets/home/home_majales_logo.png';
import LandingDate from '../../atoms/landing/LandingDate';
import VerticalSocials from '../../shared/VerticalSocials';

const Landing = () => {
  return (
    <section
      id="landing"
      className="relative py-16 md:py-0 md:pb-40 bg-[url('/src/assets/home/m_home_landing.png')] md:bg-[url('/src/assets/home/home_landing.png')] bg-no-repeat bg-top bg-cover"
    >
      <VerticalSocials />
      <div className="main-info md:w-4/5 mx-auto">
        <img src={homeMajalesLogo} alt="Majáles logo" className="mx-auto" />
        <div className="flex flex-col px-4 sm:px-20 md:px-16 2xl:px-0 items-end text-right -mt-8 sm:-mt-20 md:-mt-20 lg:-mt-36 2xl:-mt-40 2xl:w-4/5">
          <LandingDate />
          <h4 className="landing-desc text-white text-[1.6rem] md:text-[2.2rem] txt-medium">
            největší studentský hudební <br />
            festival Zlínského kraje
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Landing;
