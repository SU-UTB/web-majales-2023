import MajalesSocials from './MajalesSocials';
import StudentUnionSocials from './StudentUnionSocials';

const SocialsContainer = () => {
  return (
    <div className='flex flex-col gap-2 md:gap-6'>
      <MajalesSocials />
      <StudentUnionSocials />
    </div>
  );
};

export default SocialsContainer;
