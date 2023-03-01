import kingQueenImg from '../../../assets/king/king_queen02.png';
import { ROUTES, ROUTE_PATHS } from '../../../lib/constants/Routes';
import NavToPageBlueButton from '../../atoms/header/NavToPageBlueButton';
import SectionHeading from '../../atoms/section/SectionHeading';
import SectionHeadingBig from '../../atoms/section/SectionHeadingBig';

const KingQueen = () => {
  return (
    <section id='king-queen' className='py-8'>
      {/* <div className="flex w-full bg-[url('/src/assets/home/king_queen_bg_phone.png')] md:bg-[url('/src/assets/king/king_queen_bg.png')] bg-no-repeat bg-top bg-cover"> */}
      <div className="flex w-full bg-[url('/src/assets/king/king_queen_bg_phone.png')] md:bg-[url('/src/assets/king/king_queen_bg.png')] bg-no-repeat bg-top bg-cover">
        <div className='flex flex-col md:flex-row  px-8 mx-auto gap-10 md:w-4/5 lg:w-3/5 md:py-16'>
          <div className='w-full md:w-1/2 bg-[#1D6858]'>
            <img src={kingQueenImg} alt='král a královna Majálesu' />
          </div>

          <div className='w-full md:w-1/2'>
            <SectionHeadingBig>
              Král a&nbsp;královna <br />
              Majálesu
            </SectionHeadingBig>

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
