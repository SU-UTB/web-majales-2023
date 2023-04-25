import About from '../components/organisms/home/About';
import Aftermovie from '../components/organisms/home/Aftermovie';
import KingQueen from '../components/organisms/home/KingQueen';
import Heroe from '../components/organisms/home/Heroe';
import Lineup from './LineUp';
import Partners from '../components/organisms/partners/Partners';

const Home = () => {
  return (
    <>
      <Heroe />
      <Aftermovie />
      <About />
      <Lineup />
      <KingQueen />
      <Partners />
    </>
  );
};

export default Home;
