import SectionHeadingBig from '../components/atoms/section/SectionHeadingBig';
import ineKafe from '../assets/lineup/bands/IneKafe.png';
import LineUpRow from '../components/layout/LineUpRow';
import LineUpRight from '../components/layout/LineUpRight';
import LineUpLeftHalf from '../components/layout/LineUpLeftHalf';
import LineUpLeft from '../components/layout/LineUpLeft';
import LineUpPhone from '../components/layout/LineUpPhone';

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
          <div className='flex md:w-3/5 bg-[#1D6858] min-h-[350px]'></div>

          <div className='flex md:w-2/5 bg-[#1D6858] min-h-[350px]'></div>
        </LineUpRow>

        <LineUpRow>
          <LineUpLeft>
            <LineUpLeftHalf />
            <LineUpLeftHalf />
          </LineUpLeft>

          <LineUpRight />
        </LineUpRow>

        <LineUpRow>
          <LineUpLeft>
            <LineUpLeftHalf />
            <LineUpLeftHalf />
          </LineUpLeft>

          <LineUpRight />
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
