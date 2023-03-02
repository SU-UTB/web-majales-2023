import Paragraph from '../../atoms/section/Paragraph';
import SectionHeading from '../../atoms/section/SectionHeading';

const About = () => {
  return (
    <section id='about'>
      <div className='flex px-4 py-4 mx-auto md:px-0 md:w-4/5 md:gap-8 lg:w-3/5 xl:gap-16'>
        <div className='md:w-1/2 lg:w-1/2  bg-[#1D6858]' />
        <div className='md:w-1/2 lg:w-1/2 '>
          <SectionHeading sectionHeadingText='Přijďte si poslechnout hvězdy české hudební scény. Vydejte se s námi k nebesům.' />
          <Paragraph>
            <strong>5. května </strong>
            se potkáme v malebném
            <strong> parku před Baťovou vilou.</strong> Tradičně se můžete těšit
            na mraky doprovodných eventů, připravujeme pro vás také soutěž
            kapel, nebo volbu krále a&nbsp;královny Majálesu.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default About;
