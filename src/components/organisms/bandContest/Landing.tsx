import NavToPageWhiteButton from '../../atoms/header/NavToPageWhiteButton';
import LandingHeading from '../../atoms/landing/LandingHeading';
import SectionWrapper from '../../atoms/section/SectionWrapper';

const Landing = () => {
  return (
    <section id="landing-band-contest" className="relative py-32">
      <SectionWrapper>
        <LandingHeading landingHeadingText="Nech sebe a svou kapelu zazářit!" />
        <div className="about-lineup flex items-center flex-wrap">
          <div className="about-txt md:w-3/5 xl:w-1/2">
            <p className="text-white txt-bold mb-2">
              Patří hudba neodmyslitelně k tvému životu?
            </p>
            <p className="text-white">
              Máš kapelu nebo po večerech produkuješ vlastní hudbu a&nbsp;hledáš
              příležitost, jak zahrát před pořádným publikem? Tady jednu máš!
              <br />
              Přihlas sebe nebo svou partu do soutěže kapel, deadline je
              <span className="txt-bold">31. 3.</span>
            </p>
          </div>
          <div className="register-btn mt-12 md:mt-0 md:ml-8 lg:ml-10 xl:ml-12">
            <NavToPageWhiteButton
              blank={true}
              linkText="hlasuj!"
              linkTo="https://docs.google.com/forms/d/17IudnbZ7zvYDyLwqZ-tvyY214hpQp2ZLyT9RzQATTI0/"
            />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Landing;
