import heroeLogo from '../../../assets/home/heroe_logo_text.png';
import VerticalSocials from '../../shared/VerticalSocials';

const Heroe = () => {
  return (
    <section
      id='landing'
      className="relative py-80 md:pt-20 md:pb-80 bg-[url('/src/assets/home/heroe_bg_phone.png')] md:bg-[url('/src/assets/home/heroe_bg.png')] bg-no-repeat bg-top bg-cover"
    >
      <VerticalSocials />
      <div>
        <img src={heroeLogo} alt='Majáles logo' className='mx-auto' />
        <div className='items-end px-4 -mt-8 text-right sm:px-20 md:px-16 2xl:px-0 sm:-mt-20 md:-mt-20 lg:-mt-36 2xl:-mt-40 2xl:w-4/5'></div>
      </div>
    </section>
  );
};

export default Heroe;
