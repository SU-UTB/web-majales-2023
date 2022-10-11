import lineupIgImg from '../../../assets/lineup/ig.svg';
import spotifyImg from '../../../assets/lineup/spotify.svg';

type Props = {
  spotifyLink: string;
  igLink: string;
};

const VerticalBandSocial = ({ spotifyLink, igLink }: Props) => {
  return (
    <div className="vertical-band-soc flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 absolute {$$props.class}">
      <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
        <img
          src={spotifyImg}
          alt="spotify logo"
          className="w-6 h-6 xl:w-10 xl:h-10"
        />
      </a>
      <a href={igLink} target="_blank" rel="noopener noreferrer">
        <img
          src={lineupIgImg}
          alt="spotify logo"
          className="w-6 h-6 xl:w-10 xl:h-10"
        />
      </a>
    </div>
  );
};

export default VerticalBandSocial;
