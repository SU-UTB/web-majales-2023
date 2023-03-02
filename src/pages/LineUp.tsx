import SectionHeadingBig from '../components/atoms/section/SectionHeadingBig';
import ineKafe from '../assets/lineup/bands/IneKafe.png';
import LineUpRow from '../components/layout/LineUpRow';
import LineUpRight from '../components/layout/LineUpRight';
import LineUpLeftHalf from '../components/layout/LineUpLeftHalf';
import LineUpLeft from '../components/layout/LineUpLeft';

const Lineup = () => {
  return (
    <section
      id='lineup'
      className="w-full py-8 bg-[url('/src/assets/lineup/lineUp_bg_phone.png')] md:bg-[url('/src/assets/lineup/lineUp_bg.png')] bg-no-repeat bg-cover"
    >
      <div className='flex flex-col mx-auto w-full px-4 gap-4 md:w-4/5 md:flex-row md:px-0'>
        <SectionHeadingBig color='white'>Line-up</SectionHeadingBig>
      </div>
      <div className='flex flex-col w-full gap-4 items-center'>
        <LineUpRow>
          <div className='flex md:w-3/5'>
            <img src={ineKafe} alt='INE KAFE' />
          </div>

          <LineUpRight />
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
    </section>
  );
};

export default Lineup;
