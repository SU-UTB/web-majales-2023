import kingQueenImg from '../../../assets/king/king_queen02.png';
import ButtonRegister from '../../atoms/buttons/ButtonRegister';
import StyledImg from '../../atoms/imgs/StyledImg';
import SectionHeadingBig from '../../atoms/section/SectionHeadingBig';
import Modal, { Styles as ReactModalStyles } from 'react-modal';
import { useState } from 'react';
import { CloseIcon } from '../../../assets/icons/closeIcon';
import ReactModal from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const KingQueenModal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  const modalStyle: ReactModalStyles = {
    content: {
      margin: 'auto',
      backgroundColor: '#C9C9C9',
      maxWidth: '90%',
      maxHeight: '70%',
    },
  };

  ReactModal.setAppElement('#root'); // set app element here

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyle}>
      <div className='flex w-full justify-end mb-4'>
        <button className='flex bg-white p-2 green-shadow' onClick={closeModal}>
          <CloseIcon />
        </button>
      </div>

      <h5 className='mb-6 uppercase text-xl md:text-3xl txt-bold'>
        Pravidla pro účast v soutěži Král&nbsp;a&nbsp;Královna Majálesu UTB 2022
      </h5>

      <p className='modal-item'>
        <strong>1. </strong> Zúčastnit se může každý, kdo je v tomto roce
        studentem UTB (i dálkové studium).
      </p>
      <p className='modal-item'>
        <strong>2. </strong> Soutěží se v párech. Každý pár se musí skládat z
        jednoho muže a jedné ženy.
      </p>
      <p className='modal-item'>
        <strong>3. </strong> Tým nemusí být ze stejné fakulty.
      </p>
      <p className='modal-item'>
        <strong>4. </strong> Registrovat se je možné do 30. 4. 23:59.
      </p>
      <p className='modal-item'>
        <strong>5. </strong> Registrace probíhá pomocí přihlašovacího formuláře.
      </p>
      <p className='modal-item'>
        <strong>6. </strong> Pro výhru v soutěži je potřeba účastnit se všech
        kol soutěže, které proběhnou 5. 5. v areálu konání akce. Způsob
        jednotlivých soutěžních kol bude upřesněn. Kola budou bodovaná.
      </p>
      <p className='modal-item'>
        <strong>7. </strong> Čas a místo srazu v den soutěže bude upřesněn skrze
        e-maily účastníků.
      </p>
      <div className='mx-auto'>
        <ButtonRegister redirect='https://docs.google.com/forms/d/1VSCF5O6vCvNVXFqxJ5iP2ogdxWfiU5GsxKYrdycHA80'>
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
      id='kral'
      className="flex w-full py-12 md:py-4 bg-gradient-to-r from-[#da920f] to-[#dcc785] lg:bg-[url('/src/assets/king/king_queen_bg.png')] bg-no-repeat bg-top bg-cover"
    >
      <div className='flex flex-col lg:flex-row px-4 mx-auto gap-10 md:w-4/5 md:px-0 md:py-16'>
        <div className='flex w-full lg:w-1/2'>
          <StyledImg src={kingQueenImg} alt='král a královna Majálesu' />
        </div>

        <div className='w-full lg:w-1/2'>
          <SectionHeadingBig color='white'>
            Meatfly Král a&nbsp;královna <br />
            Majálesu
          </SectionHeadingBig>

          <p className='mb-4'>
            Utkej se společně se svým parťákem v Majálesovém turnaji
            a&nbsp;vybojujte si titul krále a&nbsp;královny univerzity!
          </p>
          <p className='mb-8'>
            Tak započni trénink na urozené disciplíny. Ale nezaspi na vavřínech,
            registrovat se můžeš do
            <span className='txt-bold'> 30.&nbsp;4.!</span>
          </p>
          <ButtonRegister onClick={openModal}>Registruj&nbsp;se</ButtonRegister>
          <KingQueenModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default KingQueen;
