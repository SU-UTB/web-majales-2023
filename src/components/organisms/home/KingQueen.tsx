import NavToPageBlueButton from '../../atoms/header/NavToPageBlueButton';

const KingQueen = () => {
  return (
    <section id="king-queen" className="py-8">
      <div className="md:w-4/5 mx-auto py-8 md:py-16 flex flex-col lg:flex-row items-center">
        <div className="king-queen-img md:w-3/4 lg:w-1/2 px-8 md:px-2">
          <img
            src="./assets/home/king_queen.jpg"
            alt="král a královna Majálesu"
          />
        </div>
        <div className="king-queen-desc lg:w-1/2 px-12 md:px-4">
          <h5 className="section-heading text-left text-light_blu md:w-4/5 2xl:w-3/5 mb-8">
            Král a&nbsp;královna <br />
            Majálesu
          </h5>
          <p className="md:w-4/5 mb-4">
            Utkej se společně se svým fakultním parťákem v Majálesovém turnaji
            a&nbsp;vybojujte si titul krále a&nbsp;královny univerzity!
          </p>
          <p className="md:w-4/5 mb-8 md:mb-12">
            <span className="txt-bold">18. 4. spouštíme registrace</span>,
            budete mít natrénováno na urozené disciplíny? Ale nezaspi na
            vavřínech, registrovat se můžeš do
            <span className="txt-bold">1. 5.!</span>
          </p>
          <NavToPageBlueButton
            linkText="více informací"
            linkTo="./majalesKing.html"
          />
        </div>
      </div>
    </section>
  );
};

export default KingQueen;
