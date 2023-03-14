import SectionHeadingBig from '../components/atoms/section/SectionHeadingBig';
import ineKafe from '../assets/lineup/bands/IneKafe.png';
import LineUpRow from '../components/layout/LineUpRow';
import LineUpRight from '../components/layout/LineUpRight';
import LineUpLeft from '../components/layout/LineUpLeft';
import LineUpPhone from '../components/layout/LineUpPhone';
import LineUpLeftHalf from '../components/layout/LineUpLeftHalf';
import paulieGarand from '../assets/lineup/bands/paulieGarand.png';
import sofian from '../assets/lineup/bands/sofian.png';
import aiko from '../assets/lineup/bands/aiko.png';
import djNadja from '../assets/lineup/bands/djNadja.png';
import goofyCow from '../assets/lineup/bands/goofyCow.png';
import kapelaRobin from '../assets/lineup/bands/kapelaRobin.png';
import qocna from '../assets/lineup/bands/qocna.png';
import StyledImg from '../components/atoms/imgs/StyledImg';

const Lineup = () => {
  return (
    <div
      id='lineup'
      className="w-full py-8 md:py-12 bg-[url('/src/assets/lineup/lineUp_bg_phone.png')] md:bg-[url('/src/assets/lineup/lineUp_bg.png')] bg-no-repeat bg-cover"
    >
      <div className='flex mx-auto w-full px-4 gap-4 md:w-4/5 md:px-0'>
        <SectionHeadingBig color='white'>Line-up</SectionHeadingBig>
      </div>
      <div className=' hidden lg:flex flex-col w-full gap-4 items-center'>
        <LineUpRow>
          <div className='flex md:w-3/5 bg-[#1D6858] min-h-[350px] green-shadow'>
            <div className='relative'>
              <div className='absolute bottom-6 left-0 text-white p-2 font-bold'>
                <span className='text-2xl'>???</span>
              </div>
              <div className='absolute bottom-0 left-0 text-white p-2 text-lg'>
                ???
              </div>
            </div>
          </div>

          <div className='flex md:w-2/5 bg-[#1D6858] min-h-[350px] green-shadow'>
            <div className='relative'>
              <div className='absolute bottom-6 left-0 text-white p-2 font-bold'>
                {/* <span className='text-2xl'>PAULIE GARAND</span>
                <span className='text-sm'> X KENNY ROUGH</span> */}
                <span className='text-2xl'>???</span>
              </div>
              <div className='absolute bottom-0 left-0 text-white p-2 text-lg'>
                ???
              </div>
              {/* <StyledImg src={paulieGarand} alt='Paulie Garand x Kenny Rough' /> */}
            </div>
          </div>
        </LineUpRow>

        <LineUpRow>
          <LineUpLeft>
            <LineUpLeftHalf name='SOFIAN MEDJMEDJ' genre='genre'>
              <StyledImg src={sofian} alt='Sofian MedjMedj' />
            </LineUpLeftHalf>
            <LineUpLeftHalf name='AIKO' genre='CZ/EN POP'>
              <StyledImg src={aiko} alt='Aiko' />
            </LineUpLeftHalf>
          </LineUpLeft>

          <LineUpRight name='DJ NADJA' genre='genre'>
            <StyledImg src={djNadja} alt='DJ Nadja' />
          </LineUpRight>
        </LineUpRow>

        <LineUpRow>
          <LineUpLeft>
            <LineUpLeftHalf name='GOOFY COW' genre='genre'>
              <StyledImg src={goofyCow} alt='Goofy Cow' />
            </LineUpLeftHalf>
            <LineUpLeftHalf name='KAPELA ROBIN' genre='CZ/EN POP'>
              <StyledImg src={kapelaRobin} alt='Kapela Robin' />
            </LineUpLeftHalf>
          </LineUpLeft>

          <LineUpRight name='QOČNA' genre='genre'>
            <StyledImg src={qocna} alt='Qocna' />
          </LineUpRight>
        </LineUpRow>
      </div>

      <div className='flex lg:hidden flex-col w-full gap-4 items-center'>
        <LineUpRow>
          <LineUpPhone />
          <LineUpPhone />
          <LineUpPhone />
          <LineUpPhone />
          <LineUpPhone />
        </LineUpRow>
      </div>
    </div>
  );
};

export default Lineup;
