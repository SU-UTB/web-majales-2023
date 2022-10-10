import NavToPageWhiteButton from '../../atoms/header/NavToPageWhiteButton';
import LandingHeading from '../../atoms/landing/LandingHeading';
import VerticalSocials from '../../shared/VerticalSocials';
import BandList from './BandList';

const LandingLineup = () => {
  return (
    <section id="landing-lineup" className="py-6 md:py-12 relative">
      <VerticalSocials />
      <div className="flex justify-center lg:items-center lg:justify-around py-4 lg:py-32 flex-wrap">
        <video
          className="w-full px-8 md:px-16 lg:px-0 lg:w-1/2 xl:w-5/12 my-8 lg:my-12"
          muted
          autoPlay
          loop
        >
          <source
            src="../assets/lineup/lineup_landing_vid.mp4"
            type="video/mp4"
          />
        </video>
        <div className="about-lineup md:1/2 lg:w-2/5 xl:w-4/12 px-8 md:px-4 my-4 lg:my-8 md:my-0">
          <LandingHeading landingHeadingText="Koho si můžete letos poslechnout?" />
          <p className="text-white w-11/12 sm:w-8/12  lg:w-9/12 xl:w-7/12">
            Od 14:30 se park před Baťovou vilou rozezní melodiemi interpretů ze
            Zlína i&nbsp;zbytku republiky!{' '}
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

export default LandingLineup;
