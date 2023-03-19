import About from '../components/organisms/home/About';
import Aftermovie from '../components/organisms/home/Aftermovie';
import BandContest from '../components/organisms/home/BandContest';
import KingQueen from '../components/organisms/home/KingQueen';
import Heroe from '../components/organisms/home/Heroe';
import Contact from './Contact';
import Lineup from './LineUp';

const Home = () => {
  return (
    <>
      <Heroe />
      <Aftermovie />
      <About />
      <Lineup />
      {/* <BandContest /> */}
      <KingQueen />
    </>
  );
};

export default Home;
