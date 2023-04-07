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
  headliner?: boolean;
}
const LineUpRight: React.FC<MyComponentProps> = ({
  children,
  name,
  secondName,
  genre,
  igLink,
  spotifyLink,
  headliner,
}) => {
  return (
    <div
      className={`w-full md:w-2/5 ${
        headliner ? 'min-h-[200px]' : 'min-h-[120px] md'
      } min-h-[120px] md:min-h-[120px] green-shadow uppercase `}
    >
      <div className='relative'>
        {children}
        {name && (
          <div className='absolute bottom-6 left-0 text-white px-2 font-bold text-xl xl:text-2xl'>
            {name} {secondName && <span className='text-lg'>{secondName}</span>}
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
          <>
            {spotifyLink ? (
              <a
                className='absolute top-10 xl:top-12 right-2'
                href={igLink}
                rel='noopener noreferrer'
                target='_blank'
              >
                <StyledIcon src={instagram} alt={`${name} ig`} />
              </a>
            ) : (
              <a
                className='absolute top-2 right-2'
                href={igLink}
                rel='noopener noreferrer'
                target='_blank'
              >
                <StyledIcon src={instagram} alt={`${name} ig`} />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LineUpRight;
