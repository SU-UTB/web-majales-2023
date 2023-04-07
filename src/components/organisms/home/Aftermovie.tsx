import aftermovie from '../../../assets/video/aftermovie.mp4';
// import aftermoviePoster from '../../../assets/video/aftermoviePoster.jpg';

const Aftermovie = () => {
  return (
    <section id='aftermovie' className='relative -top-10 md:-top-16'>
      <div className='px-4 mx-auto lg:w-3/5 md:w-4/5 md:px-0 '>
        <div className='video-container'>
          <video
            controls
            className='green-shadow '
            // poster={aftermoviePoster}
          >
            <source src={aftermovie} type='video/mp4' />
            <track kind='captions' />
            Tvúj prohlížeč nepodporuje formát videa
          </video>
        </div>
        <p className='mt-4 text-xl text-right uppercase txt-extrabold'>
          Aftermovie 2019
        </p>
      </div>
    </section>
  );
};

export default Aftermovie;
