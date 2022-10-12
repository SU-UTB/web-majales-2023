import homeMajalesLogo from '../../../assets/home/home_majales_logo.png';
import LandingDate from '../../atoms/landing/LandingDate';
import VerticalSocials from '../../shared/VerticalSocials';

const Landing = () => {
  return (
    <section id="landing" className="relative py-16 md:py-0 md:pb-40">
      <VerticalSocials />
      <div className="main-info md:w-4/5 mx-auto">
        <img src={homeMajalesLogo} alt="Majáles logo" className="mx-auto" />
        <div className="flex flex-col px-4 sm:px-20 md:px-16 2xl:px-0 items-end text-right -mt-8 sm:-mt-20 md:-mt-20 lg:-mt-36 2xl:-mt-40 2xl:w-4/5">
          <LandingDate dateText="" />
          <h4 className="landing-desc text-white txt-medium ">
            největší studentský hudební <br />
            festival Zlínského kraje
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Landing;
