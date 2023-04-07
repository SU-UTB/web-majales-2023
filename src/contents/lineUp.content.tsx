import LineUpItem from '../lib/types/TLineUpItem';
import paulieGarand from '../assets/lineup/bands/paulieGarand.png';
import sofian from '../assets/lineup/bands/sofian.png';
import aiko from '../assets/lineup/bands/aiko.png';
import djNadja from '../assets/lineup/bands/djNadja.png';
import goofyCow from '../assets/lineup/bands/goofyCow.png';
import kapelaRobin from '../assets/lineup/bands/kapelaRobin.png';
import qocna from '../assets/lineup/bands/qocna.png';

export const lineUp: LineUpItem[] = [
  {
    name: 'PAULIE GARAND',
    secondName: 'x KENNY ROUGH',
    genre: 'Rap',
    imageSrc: `${paulieGarand}`,
    zoomMid: true,
    imageAlt: 'Paulie Garand x Kenny Rough',
    igLink: 'https://instagram.com/pauliegarand',
    spotifyLink: 'https://open.spotify.com/artist/1E1taJPk3Mh3tRs9uLAu3n',
  },
  {
    name: 'SOFIAN MEDJMEDJ',
    genre: 'Pop / R&B',
    imageSrc: `${sofian}`,
    imageAlt: 'Sofian MedjMedj',
    black: true,
    igLink: 'https://instagram.com/sofianmedjmedj',
    spotifyLink: 'https://open.spotify.com/artist/2ZHJEckf6HJXMSuD2icSSW',
  },
  {
    name: 'AIKO',
    genre: 'CZ/EN POP',
    imageSrc: `${aiko}`,
    imageAlt: 'Aiko',
    igLink: 'https://instagram.com/aikomakesmusic?igshid=YmMyMTA2M2Y=',
    spotifyLink: 'https://open.spotify.com/artist/4rNUXX8pX47dfwyD6KL2zP',
  },
  {
    name: 'DJ NADJA',
    genre: 'Bass music, house, grime',
    imageSrc: `${djNadja}`,
    imageAlt: 'DJ Nadja',
    igLink: 'https://instagram.com/dj_nadja_hulkova?igshid=YmMyMTA2M2Y=',
    spotifyLink: 'https://open.spotify.com/artist/6QaMZbFyE4wGhHA3p7XbsS',
  },
  {
    name: 'GOOFY COW',
    genre: 'Pop punk / rock',
    imageSrc: `${goofyCow}`,
    imageAlt: 'Goofy Cow',
    igLink: 'https://instagram.com/goofycowcz',
    spotifyLink: 'https://open.spotify.com/artist/1gJeXJlVfqFmBTjHEvaOnf',
  },
  {
    name: 'KAPELA ROBIN',
    genre: 'CZ/EN POP',
    imageSrc: `${kapelaRobin}`,
    imageAlt: 'Kapela Robin',
    zoomMid: true,
    igLink: 'https://instagram.com/kapela_robin',
  },
  {
    name: 'Qočna',
    genre: 'Univerzitní mateřská škola',
    imageSrc: `${qocna}`,
    imageAlt: 'Qocna',
  },
];
