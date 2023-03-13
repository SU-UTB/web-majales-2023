import kingQueenImg from '../../../assets/king/king_queen02.png';
import ButtonRegister from '../../atoms/buttons/ButtonRegister';
import SectionHeadingBig from '../../atoms/section/SectionHeadingBig';

const KingQueen = () => {
  return (
    <div
      id='kingqueen'
      className="flex w-full py-12 md:py-4 bg-[url('/src/assets/king/king_queen_bg_phone.png')] lg:bg-[url('/src/assets/king/king_queen_bg.png')] bg-no-repeat bg-top bg-cover"
    >
      <div className='flex flex-col lg:flex-row px-4 mx-auto gap-10 md:w-4/5 md:px-0 md:py-16'>
        {/* <div className='flex w-full md:w-1/2 bg-[#1D6858]'> */}
        <div className='flex w-full lg:w-1/2'>
          <img src={kingQueenImg} alt='král a královna Majálesu' />
        </div>

        <div className='w-full lg:w-1/2'>
          <SectionHeadingBig>
            Král a&nbsp;královna <br />
            Majálesu
          </SectionHeadingBig>

          <p className='mb-4'>
            Utkej se společně se svým fakultním parťákem v Majálesovém turnaji
            a&nbsp;vybojujte si titul krále a&nbsp;královny univerzity!
          </p>
          <p className='mb-8'>
            <span className='txt-bold'>17. 3. spouštíme registrace</span>,
            budete mít natrénováno na urozené disciplíny? Ale nezaspi na
            vavřínech, registrovat se můžeš do
            <span className='txt-bold'> 30. 4.!</span>
          </p>
          <ButtonRegister>Registruj&nbsp;se</ButtonRegister>
        </div>
      </div>
    </div>
  );
};

export default KingQueen;
