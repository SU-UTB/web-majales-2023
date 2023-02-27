import kingQueenImg from '../../../assets/king/king_queen02.png';
import { ROUTES, ROUTE_PATHS } from '../../../lib/constants/Routes';
import NavToPageBlueButton from '../../atoms/header/NavToPageBlueButton';

const KingQueen = () => {
  return (
    <section id='king-queen' className='py-8'>
      <div className="flex w-full  bg-[url('/src/assets/home/.png')] md:bg-[url('/src/assets/king/king_queen_bg.png')] bg-no-repeat bg-top bg-cover">
        <div className='flex mx-auto gap-10 md:w-4/5 lg:w-3/5 md:py-16'>
          <div className='md:w-1/2 lg:w-1/2 bg-[#1D6858]'>
            <img src={kingQueenImg} alt='král a královna Majálesu' />
          </div>

          <div className='md:w-1/2 lg:w-1/2'>
            <h5 className='mb-8 section-heading'>
              Král a&nbsp;královna <br />
              Majálesu
            </h5>
            <p className='mb-4'>
              Utkej se společně se svým fakultním parťákem v Majálesovém turnaji
              a&nbsp;vybojujte si titul krále a&nbsp;královny univerzity!
            </p>
            <p className='mb-8'>
              <span className='txt-bold'>18. 4. spouštíme registrace</span>,
              budete mít natrénováno na urozené disciplíny? Ale nezaspi na
              vavřínech, registrovat se můžeš do
              <span className='txt-bold'> 1. 5.!</span>
            </p>
            <NavToPageBlueButton
              linkText='Registruj se'
              linkTo={ROUTE_PATHS.MAJALES_KING_QUEEN.path}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KingQueen;
