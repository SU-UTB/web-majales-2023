import LandingHeading from '../../atoms/landing/LandingHeading';
import VerticalSocials from '../../shared/VerticalSocials';

const Landing = () => {
  return (
    <section
      id='landing-contact'
      className="relative bg-su_orange py-12 w-full bg-[url('/src/assets/contact/m_contact_landing.png')] md:bg-[url('/src/assets/contact/contact_landing.png')] bg-no-repeat bg-top bg-cover"
    >
      {/* <VerticalSocials /> */}
      <div className='main-info md:w-4/5 lg:w-3/5 mx-auto px-8 md:px-4 flex flex-col justify-center min-h-[50vh]'>
        <LandingHeading landingHeadingText='Náš manažerský tým je tu pro vás!' />
        <div className='landing-desc md:w-1/2'>
          <p>
            Rádi byste navázali spolupráci? Něco byste změnili? Máte dotaz?
            <br />
            <span className='txt-bold'>
              Naši hvězdní manažeři jsou vám k dispozici, neváhejte se nám
              ozvat!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
