import SectionHeadingBig from '../components/atoms/section/SectionHeadingBig';
import LineUpRow from '../components/layout/LineUpRow';
import LineUpRight from '../components/layout/LineUpRight';
import LineUpLeft from '../components/layout/LineUpLeft';
import LineUpLteTablet from '../components/layout/LineUpLteTablet';
import LineUpLeftHalf from '../components/layout/LineUpLeftHalf';

import rez from '../assets/lineup/bands/rez.png';
import mers from '../assets/lineup/bands/mers.png';

import StyledImg from '../components/atoms/imgs/StyledImg';
import LineUpTabletRow from '../components/layout/LineUpTabletRow';
import { lineUp } from '../contents/lineUp.content';
import LineUpHeadlinerLeft from '../components/layout/LineUpHeadlinerLeft';
import LineUpBandContest from '../components/layout/LineUpBandContest';

const Lineup = () => {
  return (
    <div
      id='lineup'
      className="w-full py-8 md:py-12 bg-gradient-to-r from-[#5fb298] to-[#b9d5ca] md:bg-[url('/src/assets/lineup/lineUp_bg.png')] bg-no-repeat bg-cover"
    >
      <div className='flex mx-auto w-full md:w-4/5 md:px-0 pl-4'>
        <SectionHeadingBig color='white'>Line-up</SectionHeadingBig>
      </div>

      {/* Desktop: > 1024px*/}
      <div className='hidden lg:flex flex-col w-full gap-4 items-center'>
        <h6 className="uppercase font-bold">Lineup připravujeme</h6>
      </div>

      {/* Phone: < 480px*/}
      <div className='flex xs:hidden flex-col w-full gap-4 items-center gap'>
        <h6 className="uppercase font-bold">Lineup připravujeme</h6>
      </div>

      <div className='flex w-full mx-auto justify-center mt-20 mb-8 px-4'>
        <SectionHeadingBig color='white'>
          Výherci soutěže kapel 2023
        </SectionHeadingBig>
      </div>
      <div className='flex flex-col lg:flex-row w-full lg:w-4/5 m-auto px-4 justify-center mb-10'>
        <div className='flex flex-col lg:flex-row w-full xs:w-1/2 md:2/5 lg:w-3/5  md:px-0  gap-4 lg:gap-4 m-auto'>
          <LineUpBandContest
            name='REZ'
            genre='POP / ALTERNATIVE'
            igLink='https://www.instagram.com/rez_kapela/'
            spotifyLink='https://open.spotify.com/artist/2QNnxjgdgUJbojXzoxUg6v'
          >
            <StyledImg src={rez} alt='REZ' />
          </LineUpBandContest>
          <LineUpBandContest
            name='MERS'
            genre='POP / ROCK'
            igLink='https://www.instagram.com/mersband/'
          >
            <StyledImg src={mers} alt='MERS' />
          </LineUpBandContest>
        </div>
      </div>
    </div>
  );
};

export default Lineup;
