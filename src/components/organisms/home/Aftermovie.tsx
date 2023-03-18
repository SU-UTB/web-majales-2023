import aftermovie from '../../../assets/video/aftermovie.mp4';
import SectionWrapper from '../../atoms/section/SectionWrapper';

const Aftermovie = () => {
  return (
    <section id='aftermovie' className='relative -top-10 md:-top-16'>
      <div className='px-4 mx-auto lg:w-3/5 md:w-4/5 md:px-0 '>
        {/* <video controls className='shadow-[-3px_3px_rgb(96,228,204)]'> */}
        <video controls className='green-shadow'>
          <source src={aftermovie} type='video/mp4' />
          <track kind='captions' />
          Tvúj prohlížeč nepodporuje formát videa
        </video>
        <p className='mt-4 text-xl text-right uppercase txt-extrabold'>
          Aftermovie 2019
        </p>
      </div>
    </section>
  );
};

export default Aftermovie;
