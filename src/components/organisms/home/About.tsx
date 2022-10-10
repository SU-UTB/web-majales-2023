import SectionHeading from '../../atoms/section/SectionHeading';

const About = () => {
  // TODO SeactionHeading className="text-light_blu"

  return (
    <section id="about">
      <div className="md:w-4/5 lg:w-3/5 mx-auto py-8 md:py-16 px-8 md:px-0">
        <SectionHeading sectionHeadingText="Přijďte si poslechnout hvězdy české hudební scény. Vydejte se s námi k nebesům." />
        <p className="md:w-4/5 lg:w-3/5 xl:w-1/2">
          <span className="txt-bold">6. května</span> se potkáme v malebném{' '}
          <span className="txt-bold">parku před Baťovou vilou</span>. Tradičně
          se můžete těšit na mraky doprovodných eventů, připravujeme pro vás
          také soutěž kapel, nebo volbu krále a&nbsp;královny Majálesu.
        </p>
      </div>
    </section>
  );
};

export default About;