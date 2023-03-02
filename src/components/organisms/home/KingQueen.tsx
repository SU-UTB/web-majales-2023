import kingQueenImg from '../../../assets/king/king_queen02.png';
import ButtonRegister from '../../atoms/buttons/ButtonRegister';
import SectionHeadingBig from '../../atoms/section/SectionHeadingBig';
import SectionWrapper from '../../layout/SectionWrapper';

const KingQueen = () => {
  return (
    <SectionWrapper linkTo='king-queen'>
      <div className="flex w-full py-12 md:py-4 bg-[url('/src/assets/king/king_queen_bg_phone.png')] md:bg-[url('/src/assets/king/king_queen_bg.png')] bg-no-repeat bg-top bg-cover">
        <div className='flex flex-col md:flex-row px-4 mx-auto gap-10 md:w-4/5 md:px-0 lg:w-3/5 md:py-16'>
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
            <ButtonRegister>Registruj&nbsp;se</ButtonRegister>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default KingQueen;
