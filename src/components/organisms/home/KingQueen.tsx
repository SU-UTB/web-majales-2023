import kingQueenImg from '../../../assets/king/king_queen02.png';
import ButtonRegister from '../../atoms/buttons/ButtonRegister';
import StyledImg from '../../atoms/imgs/StyledImg';
import SectionHeadingBig from '../../atoms/section/SectionHeadingBig';
import Modal, { Styles as ReactModalStyles } from 'react-modal';
import { useState } from 'react';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const KingQueenModal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const modalStyle: ReactModalStyles = {
    content: {
      backgroundColor: '#C9C9C9',
      maxWidth: '500px',
      maxHeight: '70%',
      margin: 'auto',
    },
  };

  const handleGoGoogleForm = () => {
    window.open(
      'https://docs.google.com/forms/d/1VSCF5O6vCvNVXFqxJ5iP2ogdxWfiU5GsxKYrdycHA80',
      '_blank',
      'noreferrer'
    );
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyle}>
      <SectionHeadingBig>
        Pravidla pro účast v soutěži Král a Královna Majálesu UTB 2022
      </SectionHeadingBig>

      <p className='modal-item'>
        <strong>1. </strong> Zúčastnit se může každý, kdo je v tomto roce
        studentem UTB (i dálkové studium).
      </p>
      <p className='modal-item'>
        <strong>2. </strong> Soutěží se v párech. Každý pár se musí skládat z
        jednoho muže a jedné ženy.
      </p>
      <p className='modal-item'>
        <strong>3. </strong> Celý tým musí být ze stejné fakulty.
      </p>
      <p className='modal-item'>
        <strong>4. </strong> Registrovat se je možné od 18. 4. 00:01 do 1. 5.
        23:59.
      </p>
      <p className='modal-item'>
        <strong>5. </strong> Registrace probíhá pomocí přihlašovacího formuláře.
      </p>
      <p className='modal-item'>
        <strong>6. </strong> Pro výhru v soutěži je potřeba účastnit se všech
        kol soutěže, které proběhnou 6. 5. v areálu konání akce. Způsob
        jednotlivých soutěžních kol bude upřesněn. Kola budou bodovaná.
      </p>
      <p className='modal-item'>
        <strong>7. </strong> Čas a místo srazu v den soutěže bude upřesněn skrze
        e-maily účastníků.
      </p>
      <div className='mx-auto'>
        <ButtonRegister onClick={handleGoGoogleForm}>
          Registruj&nbsp;se
        </ButtonRegister>
      </div>
    </Modal>
  );
};

const KingQueen = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      id='kingqueen'
      className="flex w-full py-12 md:py-4 bg-[url('/src/assets/king/king_queen_bg_phone.png')] lg:bg-[url('/src/assets/king/king_queen_bg.png')] bg-no-repeat bg-top bg-cover"
    >
      <div className='flex flex-col lg:flex-row px-4 mx-auto gap-10 md:w-4/5 md:px-0 md:py-16'>
        <div className='flex w-full lg:w-1/2'>
          <StyledImg src={kingQueenImg} alt='král a královna Majálesu' />
        </div>

        <div className='w-full lg:w-1/2'>
          <SectionHeadingBig>
            Král a&nbsp;královna <br />
            Majálesu
          </SectionHeadingBig>

          <p className='mb-4'>
            Utkej se společně se svým fakultním parťákem v Majálesovém turnaji
            a&nbsp;vybojujte si titul krále a&nbsp;královny univerzity!
          </p>
          <p className='mb-8'>
            <span className='txt-bold'>17. 3. spouštíme registrace</span>,
            budete mít natrénováno na urozené disciplíny? Ale nezaspi na
            vavřínech, registrovat se můžeš do
            <span className='txt-bold'> 30. 4.!</span>
          </p>
          <ButtonRegister onClick={openModal}>Registruj&nbsp;se</ButtonRegister>
          <KingQueenModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default KingQueen;
