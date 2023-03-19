import SectionHeadingBig from '../components/atoms/section/SectionHeadingBig';
import LineUpRow from '../components/layout/LineUpRow';
import LineUpRight from '../components/layout/LineUpRight';
import LineUpLeft from '../components/layout/LineUpLeft';
import LineUpLteTablet from '../components/layout/LineUpLteTablet';
import LineUpLeftHalf from '../components/layout/LineUpLeftHalf';
import paulieGarand from '../assets/lineup/bands/paulieGarand.png';
import sofian from '../assets/lineup/bands/sofian.png';
import aiko from '../assets/lineup/bands/aiko.png';
import djNadja from '../assets/lineup/bands/djNadja.png';
import goofyCow from '../assets/lineup/bands/goofyCow.png';
import kapelaRobin from '../assets/lineup/bands/kapelaRobin.png';
import qocna from '../assets/lineup/bands/qocna.png';
import ineKafe from '../assets/lineup/bands/ineKafe.png';
import StyledImg from '../components/atoms/imgs/StyledImg';
import LineUpTabletRow from '../components/layout/LineUpTabletRow';
import { lineUp } from '../contents/lineUp.content';

const Lineup = () => {
  return (
    <div
      id='lineup'
      className="w-full py-8 md:py-12 bg-gradient-to-r from-[#5fb298] to-[#b9d5ca] md:bg-[url('/src/assets/lineup/lineUp_bg.png')] bg-no-repeat bg-cover"
    >
      <div className='flex mx-auto w-full px-4 gap-4 md:w-4/5 md:px-0'>
        <SectionHeadingBig color='white'>Line-up</SectionHeadingBig>
      </div>

      {/* Desktop: > 1024px*/}
      <div className='hidden lg:flex flex-col w-full gap-4 items-center'>
        <LineUpRow>
          <div className='flex md:w-3/5 bg-[#1D6858] min-h-[250px] xl:min-h-[350px] green-shadow'>
            <div className='relative'>
              <div className='absolute bottom-6 left-0 text-white px-2 font-bold '>
                <span className='text-xl xl:text-2xl'>???</span>
              </div>
              <div className='absolute bottom-0 left-0 text-white px-2 text-lg'>
                ???
              </div>
            </div>
          </div>

          <div className='flex md:w-2/5 bg-[#1D6858] min-h-[250px] green-shadow'>
            <div className='relative'>
              <div className='absolute bottom-6 left-0 text-white px-2 font-bold'>
                {/* <span className='text-2xl'>PAULIE GARAND</span>
                <span className='text-sm'> X KENNY ROUGH</span> */}
                <span className='text-xl xl:text-2xl'>???</span>
              </div>
              <div className='absolute bottom-0 left-0 text-white px-2 text-lg'>
                ???
              </div>
              {/* <StyledImg src={paulieGarand} alt='Paulie Garand x Kenny Rough' /> */}
            </div>
          </div>
        </LineUpRow>

        <LineUpRow>
          <LineUpLeft>
            <LineUpLeftHalf
              name='SOFIAN MEDJMEDJ'
              genre='Pop / R&B'
              igLink='https://instagram.com/sofianmedjmedj'
              spotifyLink='https://open.spotify.com/artist/2ZHJEckf6HJXMSuD2icSSW'
            >
              <StyledImg src={sofian} alt='Sofian MedjMedj' />
            </LineUpLeftHalf>
            <LineUpLeftHalf
              name='AIKO'
              genre='CZ/EN POP'
              igLink='https://instagram.com/aikomakesmusic?igshid=YmMyMTA2M2Y='
              spotifyLink='https://open.spotify.com/artist/4rNUXX8pX47dfwyD6KL2zP'
            >
              <StyledImg src={aiko} alt='Aiko' />
            </LineUpLeftHalf>
          </LineUpLeft>

          <LineUpRight
            name='DJ NADJA'
            genre='Bass music, house, grime'
            igLink='https://instagram.com/dj_nadja_hulkova?igshid=YmMyMTA2M2Y='
            spotifyLink='https://open.spotify.com/artist/6QaMZbFyE4wGhHA3p7XbsS'
          >
            <StyledImg src={djNadja} alt='DJ Nadja' />
          </LineUpRight>
        </LineUpRow>

        <LineUpRow>
          <LineUpLeft>
            <LineUpLeftHalf
              name='GOOFY COW'
              genre='Pop punk / rock'
              igLink='https://instagram.com/goofycowcz'
              spotifyLink='https://open.spotify.com/artist/1gJeXJlVfqFmBTjHEvaOnf'
            >
              <StyledImg src={goofyCow} alt='Goofy Cow' />
            </LineUpLeftHalf>
            <LineUpLeftHalf
              name='KAPELA ROBIN'
              genre='CZ/EN POP'
              igLink='https://instagram.com/kapela_robin'
            >
              <StyledImg src={kapelaRobin} alt='Kapela Robin' />
            </LineUpLeftHalf>
          </LineUpLeft>

          <LineUpRight name='QOČNA' genre='Univerzitní mateřská škola'>
            <StyledImg src={qocna} alt='Qocna' />
          </LineUpRight>
        </LineUpRow>
      </div>

      {/* Tablet: 481-1023px*/}
      <div className='hidden xs:flex lg:hidden flex-col w-full gap-4 items-center gap'>
        <LineUpRow>
          <LineUpTabletRow>
            <LineUpLteTablet name='???' genre='???'></LineUpLteTablet>
            <LineUpLteTablet name='???' genre='???'></LineUpLteTablet>
          </LineUpTabletRow>

          <LineUpTabletRow>
            <LineUpLteTablet
              name='SOFIAN MEDJMEDJ'
              genre='Pop / R&B'
              igLink='https://instagram.com/sofianmedjmedj'
              spotifyLink='https://open.spotify.com/artist/2ZHJEckf6HJXMSuD2icSSW'
            >
              <StyledImg src={sofian} alt='Sofian MedjMedj' />
            </LineUpLteTablet>
            <LineUpLteTablet
              name='AIKO'
              genre='CZ/EN POP'
              igLink='https://instagram.com/aikomakesmusic?igshid=YmMyMTA2M2Y='
              spotifyLink='https://open.spotify.com/artist/4rNUXX8pX47dfwyD6KL2zP'
            >
              <StyledImg src={aiko} alt='Aiko' />
            </LineUpLteTablet>
          </LineUpTabletRow>

          <LineUpTabletRow>
            <LineUpLteTablet
              name='DJ NADJA'
              genre='Bass music, house, grime'
              igLink='https://instagram.com/dj_nadja_hulkova?igshid=YmMyMTA2M2Y='
              spotifyLink='https://open.spotify.com/artist/6QaMZbFyE4wGhHA3p7XbsS'
            >
              <StyledImg src={djNadja} alt='DJ Nadja' />
            </LineUpLteTablet>

            <LineUpLteTablet
              name='GOOFY COW'
              genre='Pop punk / rock'
              igLink='https://instagram.com/goofycowcz'
              spotifyLink='https://open.spotify.com/artist/1gJeXJlVfqFmBTjHEvaOnf'
            >
              <StyledImg src={goofyCow} alt='Goofy Cow' />
            </LineUpLteTablet>
          </LineUpTabletRow>

          <LineUpTabletRow>
            <LineUpLteTablet
              name='KAPELA ROBIN'
              genre='CZ/EN POP'
              igLink='https://instagram.com/kapela_robin'
            >
              <StyledImg src={kapelaRobin} alt='Kapela Robin' />
            </LineUpLteTablet>

            <LineUpLteTablet name='Qočna' genre='UTB mateřská škola'>
              <StyledImg src={qocna} alt='Qocna' />
            </LineUpLteTablet>
          </LineUpTabletRow>
        </LineUpRow>
      </div>

      {/* Phone: < 480px*/}
      <div className='flex xs:hidden flex-col w-full gap-4 items-center gap'>
        <LineUpRow>
          <div className='flex w-full bg-[#1D6858] min-h-[150px] md:min-h-[200px]  green-shadow'>
            <div className='relative'>
              <div className='absolute bottom-6 left-0 text-white p-2 font-bold'>
                <span className='text-xl'>???</span>
              </div>
              <div className='absolute bottom-0 left-0 text-white p-2 text-lg'>
                <span className='text-[14px]'> ???</span>
              </div>
            </div>
          </div>

          <div className='flex w-full bg-[#1D6858] min-h-[150px] md:min-h-[200px]  green-shadow'>
            <div className='relative'>
              <div className='absolute bottom-6 left-0 text-white p-2 font-bold'>
                <span className='text-xl'>???</span>
              </div>
              <div className='absolute bottom-0 left-0 text-white p-2 text-lg'>
                <span className='text-[14px]'>???</span>
              </div>
            </div>
          </div>

          {lineUp.map((item, index) => (
            <LineUpLteTablet
              key={index}
              name={item.name}
              genre={item.genre}
              black={item.black}
              igLink={item.igLink}
              spotifyLink={item.spotifyLink}
            >
              <StyledImg
                src={item.imageSrc}
                alt={item.imageAlt}
                zoomMid={item.zoomMid}
              />
            </LineUpLteTablet>
          ))}
        </LineUpRow>
      </div>
    </div>
  );
};

export default Lineup;
