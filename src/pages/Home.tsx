import About from '../components/organisms/home/About';
import Aftermovie from '../components/organisms/home/Aftermovie';
import BandContest from '../components/organisms/home/BandContest';
import KingQueen from '../components/organisms/home/KingQueen';
import Landing from '../components/organisms/home/Landing';
import Lineup from '../components/organisms/home/Lineup';

const Home = () => {
  return (
    <>
      <Landing />
      <Aftermovie />
      <About />
      <Lineup />
      <BandContest />
      <KingQueen />
    </>
  );
};

export default Home;
