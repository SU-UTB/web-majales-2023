import bandContestImg from '../../../assets/home/band_contest.jpg';
import { ROUTE_PATHS } from '../../../lib/constants/Routes';
import NavToPageBlueButton from '../../atoms/header/NavToPageBlueButton';

const BandContest = () => {
  return (
    <section
      id="band-contest"
      className="text-white py-8 bg-[url('/src/assets/home/home_band_contest.png')] bg-no-repeat bg-center bg-cover"
    >
      <div className="flex justify-center items-center flex-wrap">
        <div className="md:w-4/5 lg:w-2/5 py-8 md:py-16 px-8 md:px-0">
          <h5 className="section-heading text-left md:w-4/5 lg:w-3/5 mb-8">
            Soutěž kapel
          </h5>
          <p className="md:w-4/5 lg:w-3/5 xl:w-1/2">
            <span className="txt-bold">Nech sebe a svou kapelu zazářit!</span>
            Nezkusíš, nezažiješ. Přímo na Majálesu se tváří v tvář kolegům
            utkáte o hlavní cenu, kterou je
            <span className="txt-bold">roční zásoba piva!</span>
          </p>
          <p className="mb-8 md:mb-12">
            <span className="txt-bold">Pošli do 31. 3. svou registraci</span>
            a&nbsp;ukaž, co v tobě je!
          </p>
          <NavToPageBlueButton
            linkText="více informací"
            linkTo={ROUTE_PATHS.BAND_CONTEST.path}
          />
        </div>
        <div className="px-8 md:px-0 md:w-3/4 lg:w-4/12">
          <img className="" src={bandContestImg} alt="Soutěž kapel" />
        </div>
      </div>
    </section>
  );
};

export default BandContest;
