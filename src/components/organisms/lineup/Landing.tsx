import landingVideo from '../../../assets/lineup/lineup_landing_vid.mp4';
import NavToPageWhiteButton from '../../atoms/header/NavToPageWhiteButton';
import LandingHeading from '../../atoms/landing/LandingHeading';
import VerticalSocials from '../../shared/VerticalSocials';
import BandList from './BandList';

const Landing = () => {
  return (
    <section
      id="landing-lineup"
      className="py-6 md:py-12 relative bg-[url('/src/assets/lineup/m_lineup_landing.png')] md:bg-[url('/src/assets/lineup/lineup_landing.png')] bg-repeat-y md:bg-no-repeat bg-top bg-contain md:bg-cover"
    >
      <VerticalSocials />
      <div className="flex flex-wrap justify-center py-4 lg:items-center lg:justify-around lg:py-32">
        <video
          className="w-full px-8 my-8 md:px-16 lg:px-0 lg:w-1/2 xl:w-5/12 lg:my-12"
          muted
          autoPlay
          loop
        >
          <source src={landingVideo} type="video/mp4" />
        </video>
        <div className="px-8 my-4 about-lineup md:1/2 lg:w-2/5 xl:w-4/12 md:px-4 lg:my-8 md:my-0">
          <LandingHeading landingHeadingText="Koho si můžete letos poslechnout?" />
          <p className="w-11/12 text-white sm:w-8/12  lg:w-9/12 xl:w-7/12">
            Od 14:30 se park před Baťovou vilou rozezní melodiemi interpretů ze
            Zlína i&nbsp;zbytku republiky!
          </p>
          <NavToPageWhiteButton
            linkText="nalaď majálesový playlist"
            linkTo="./"
          />
        </div>
      </div>
      <BandList />
    </section>
  );
};

export default Landing;
