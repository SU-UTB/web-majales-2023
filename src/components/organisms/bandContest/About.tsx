import bandContestImg from '../../../assets/home/band_contest.jpg';

const About = () => {
  return (
    <section id="about-band-contest" className="relative pb-12 -top-40">
      <div className="mt-24">
        <div className="w-full md:w-4/5 mx-auto px-8 md:px-4 flex items-center justify-center lg:justify-between flex-wrap">
          <div className="img-wrapper lg:w-3/5 2xl:w-2/5 max-w-lg md:max-w-none mb-8 lg:mb-0">
            <img src={bandContestImg} alt="Král a Královná Majálesu" />
          </div>
          <div className="about-desc w-full lg:w-2/3 2xl:w-1/2 lg:mt-4">
            <p className="txt-bold mt-6">
              Tři interpreti získají prostor na hvězdné show Majálesu UTB Zlín.
            </p>
            <p className="mb-2">
              Co k tomu? Z podstaty soutěže získáte nadupané kontakty na lidi z
              branže a&nbsp;setkáte se s dalšími talentovanými hudebníky.
              Zkrátka zážitek, který může odstartovat vaši kariéru na české
              scéně.
            </p>
            <br />
            <p className="mb-2">
              Přímo na Majálesu se tváří v tvář kolegům utkáte o hlavní cenu,
              kterou je <span className="txt-bold"> roční zásoba piva!</span>
            </p>
            <p className="mb-2">
              Tak se chytni příležitosti a&nbsp;
              <span className="txt-bold">
                do 31. 3. 23:59 pošli svoji registraci!
              </span>
            </p>
            <p>Nezkusíš, nezažiješ.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
