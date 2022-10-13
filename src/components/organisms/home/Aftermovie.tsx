import aftermovie from '../../../assets/video/aftermovie.mp4';

const Aftermovie = () => {
  return (
    <section id="aftermovie" className="relative -top-10 md:-top-24">
      <div className="px-8 mx-auto yt-video md:w-4/5 lg:w-3/5 2xl:h-1/2 md:px-0">
        <video controls>
          <source src={aftermovie} type="video/mp4" />
          <track kind="captions" />
          Tvúj prohlížeč nepodporuje formát videa
        </video>
        <p className="mt-4 text-xl text-right uppercase text-dark_blu txt-extrabold">
          Aftermovie 2019
        </p>
      </div>
    </section>
  );
};

export default Aftermovie;
