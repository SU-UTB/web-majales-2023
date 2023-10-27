import Paragraph from '../../atoms/section/Paragraph';
import SectionHeading from '../../atoms/section/SectionHeading';

const About = () => {
  return (
    <section id='about'>
      <div className='flex flex-col md:flex-row px-4 py-8 gap-8 mx-auto md:px-0 md:w-4/5 md:gap-8 xl:gap-16'>
        <div className='w-full lg:w-1/2  green-shadow'>
          <iframe
            title='Google Map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1048.5860839417327!2d17.6583388!3d49.228697099999996!2m3!1f0!2f18.05!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47130d008c519ab7%3A0x985e4cfd1e8349ae!2sPark%20u%20Ba%C5%A5ovy%20vily!5e0!3m2!1sen!2sus!4v1647644070991!5m2!1sen!2sus'
            width='100%'
            height='300'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
          />
        </div>
        <div className='w-full lg:w-1/2 '>
          <SectionHeading sectionHeadingText='Přijďte si poslechnout hvězdy české hudební scény. Vydejte se s námi k nebesům.' />
          <Paragraph>
            Už <strong>3. května </strong>
            se potkáme v malebném
            <strong> parku před Baťovou vilou.</strong> Tradičně se můžete těšit
            na mraky doprovodných eventů nebo volbu krále a&nbsp;královny
            Majálesu.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default About;
