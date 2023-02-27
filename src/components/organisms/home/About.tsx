import SectionHeading from '../../atoms/section/SectionHeading';

const About = () => {
  return (
    <section id='about'>
      {/* <div className='px-8 py-8 mx-auto md:w-4/5 lg:w-3/5 md:py-16 md:px-0 text-black'> */}
      <div className='flex mx-auto gap-20 px-10 lg:w-3/5 md:w-1/2 md:py-16'>
        <div className='md:w-1/2 lg:w-1/2 bg-[#1D6858]' />
        <div className='md:w-1/2 lg:w-1/2'>
          <SectionHeading sectionHeadingText='Přijďte si poslechnout hvězdy české hudební scény. Vydejte se s námi k nebesům.' />
          <p>
            <span className='txt-bold'>5. května</span> se potkáme v malebném
            <span className='txt-bold'> parku před Baťovou vilou</span>.
            Tradičně se můžete těšit na mraky doprovodných eventů, připravujeme
            pro vás také soutěž kapel, nebo volbu krále a&nbsp;královny
            Majálesu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
