import StyledIcon from '../atoms/imgs/StyledIcon';
import instagram from '../../assets/icons/instagram.png';
import spotify from '../../assets/icons/spotify.png';

interface MyComponentProps {
  children?: React.ReactNode;
  name?: string;
  secondName?: string;
  genre?: string;
  igLink?: string;
  spotifyLink?: string;
  black?: boolean;
}

const LineUpLteTablet: React.FC<MyComponentProps> = ({
  children,
  name,
  secondName,
  genre,
  igLink,
  spotifyLink,
  black,
}) => {
  return (
    <div className='flex w-full bg-[#1D6858] h-[150px] md:h-[200px] green-shadow uppercase'>
      <div className='relative flex w-full'>
        {children}
        {name && (
          <div
            className={`absolute bottom-5 left-0 px-2 font-bold text-xl ${
              black ? 'text-white' : 'text-white'
            }`}
          >
            {name} {secondName && <div className='text-lg'>{secondName}</div>}
          </div>
        )}
        {genre && (
          <div
            className={`absolute bottom-0 left-0  text-[14px] px-2 xs:text-[16px] ${
              black ? 'text-black' : 'text-white'
            }`}
          >
            {genre}
          </div>
        )}

        {spotifyLink && (
          <a
            className='absolute top-2 right-2'
            href={spotifyLink}
            rel='noopener noreferrer'
            target='_blank'
          >
            <StyledIcon src={spotify} alt={`${name} spotify`} />
          </a>
        )}

        {igLink && (
          <a
            className={`absolute ${
              spotifyLink ? 'top-12 xs:top-10 xl:top-12' : 'top-2'
            } right-2`}
            href={igLink}
            rel='noopener noreferrer'
            target='_blank'
          >
            <StyledIcon src={instagram} alt={`${name} ig`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default LineUpLteTablet;
