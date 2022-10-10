import NavToPageWhiteButton from '../../atoms/header/NavToPageWhiteButton';
import LandingHeading from '../../atoms/landing/LandingHeading';
import SectionWrapper from '../../atoms/section/SectionWrapper';
import VerticalSocials from '../../shared/VerticalSocials';

const Landing = () => {
  return (
    <section id="landing-king" className="relative py-32">
      <VerticalSocials />
      <SectionWrapper>
        <LandingHeading landingHeadingText="Ať panuje ten nejlepší!" />
        <div className="about-lineup flex items-center flex-wrap">
          <div className="about-txt md:w-3/5 xl:w-1/2">
            <p className="text-white txt-bold mb-2">
              Jsi studentem nebo studentkou UTB a&nbsp;myslíš, že máš modrou
              krev?
            </p>
            <p className="text-white">
              Utkej se v Majálesovém turnaji a&nbsp;vybojuj titul krále nebo
              královny univerzity! Přihlaš sebe nebo vaše duo do{' '}
              <span className="txt-bold">1. 5.</span> a&nbsp;ukaž, kdo vládne na
              UTB!
            </p>
          </div>
          <div className="register-btn mt-12 md:mt-0 md:ml-8 lg:ml-10 xl:ml-12">
            <NavToPageWhiteButton
              blank={true}
              linkTo="https://docs.google.com/forms/d/1OdwDsAbSIjbJw9RzmeTneiEAmWY37mked_KPqKg-RIU/"
              linkText="registruj se!"
            />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Landing;
