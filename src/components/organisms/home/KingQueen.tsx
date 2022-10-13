import kingQueenImg from '../../../assets/home/king_queen.jpg';
import { ROUTES, ROUTE_PATHS } from '../../../lib/constants/Routes';
import NavToPageBlueButton from '../../atoms/header/NavToPageBlueButton';

const KingQueen = () => {
  return (
    <section id="king-queen" className="py-8">
      <div className="flex flex-col items-center py-8 mx-auto md:w-4/5 md:py-16 lg:flex-row">
        <div className="px-8 king-queen-img md:w-3/4 lg:w-1/2 md:px-2">
          <img src={kingQueenImg} alt="král a královna Majálesu" />
        </div>
        <div className="px-12 king-queen-desc lg:w-1/2 md:px-4">
          <h5 className="mb-8 text-left section-heading text-light_blu md:w-4/5 2xl:w-3/5">
            Král a&nbsp;královna <br />
            Majálesu
          </h5>
          <p className="mb-4 md:w-4/5">
            Utkej se společně se svým fakultním parťákem v Majálesovém turnaji
            a&nbsp;vybojujte si titul krále a&nbsp;královny univerzity!
          </p>
          <p className="mb-8 md:w-4/5 md:mb-12">
            <span className="txt-bold">18. 4. spouštíme registrace</span>,
            budete mít natrénováno na urozené disciplíny? Ale nezaspi na
            vavřínech, registrovat se můžeš do
            <span className="txt-bold">1. 5.!</span>
          </p>
          <NavToPageBlueButton
            linkText="více informací"
            linkTo={ROUTE_PATHS.MAJALES_KING_QUEEN.path}
          />
        </div>
      </div>
    </section>
  );
};

export default KingQueen;
