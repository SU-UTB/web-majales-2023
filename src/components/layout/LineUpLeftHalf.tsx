import instagram from '../../assets/icons/instagram.png';
import spotify from '../../assets/icons/spotify.png';
import StyledIcon from '../atoms/imgs/StyledIcon';

interface MyComponentProps {
  children?: React.ReactNode;
  name?: string;
  genre?: string;
  igLink?: string;
  spotifyLink?: string;
}

const LineUpLeftHalf: React.FC<MyComponentProps> = ({
  children,
  name,
  genre,
  igLink,
  spotifyLink,
}) => {
  return (
    <div className='w-full md:w-1/2 bg-[#1D6858] min-h-[120px] green-shadow uppercase'>
      <div className='relative'>
        {children}
        {name && (
          <div className='absolute bottom-6 left-0 text-white px-2 font-bold text-xl xl:text-2xl '>
            {name}
          </div>
        )}
        {genre && (
          <div className='absolute bottom-0 left-0 text-white px-2 text-lg'>
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
              spotifyLink ? 'top-10 xl:top-12' : 'top-2'
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

export default LineUpLeftHalf;
