import React from 'react';
import Modal from 'react-modal';

interface PdfModalProps {
  isOpen: boolean;
  closeModal: () => void;
  pdfFile: string;
}

const PdfModal: React.FC<PdfModalProps> = ({ isOpen, closeModal, pdfFile }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='PDF Modal'
      className='modal'
      overlayClassName='overlay'
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(220, 199, 133, 0.75)',
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          height: '70vh',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          padding: 0,
          border: 'none',
          borderRadius: '0.5rem',
          outline: 'none',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.7)',
        },
      }}
    >
      <div className='flex justify-end mb-4'>
        <button
          className='focus:outline-none border border-black border-solid px-3 py-1 mr-1 rounded'
          onClick={closeModal}
        >
          X
        </button>
      </div>
      <div className='w-full h-full'>
        <embed className='w-full h-full' src={pdfFile} type='application/pdf' />
      </div>
    </Modal>
  );
};

export default PdfModal;
