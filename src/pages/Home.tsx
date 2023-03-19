import About from '../components/organisms/home/About';
import Aftermovie from '../components/organisms/home/Aftermovie';
import KingQueen from '../components/organisms/home/KingQueen';
import Heroe from '../components/organisms/home/Heroe';
import Lineup from './LineUp';

const Home = () => {
  return (
    <>
      <Heroe />
      <Aftermovie />
      <About />
      <Lineup />
      <KingQueen />
    </>
  );
};

export default Home;
