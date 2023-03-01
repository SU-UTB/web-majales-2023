import heroeLogo from '../../../assets/home/heroe_logo_text.png';
import VerticalSocials from '../../shared/VerticalSocials';

const Heroe = () => {
  return (
    <section
      id='landing'
      className="relative py-40 md:pt-20 md:pb-80 bg-[url('/src/assets/home/heroe_bg_phone.png')] md:bg-[url('/src/assets/home/heroe_bg.png')] bg-no-repeat bg-top bg-cover"
    >
      <VerticalSocials />
      <div>
        <img src={heroeLogo} alt='Majáles logo' className='mx-auto ' />
        <div className='items-end px-4  text-right md:px-16 2xl:px-0 md:-mt-20 lg:-mt-36 2xl:-mt-40 2xl:w-4/5' />
      </div>
    </section>
  );
};

export default Heroe;
