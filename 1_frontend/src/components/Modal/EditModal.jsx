import ReactDOM from 'react-dom';
import Form from '../Form/Form';
import {
  StyledModal,
  StyledModalWrapper,
  StyledOverlay,
} from './EditModal.style';

const EditModal = ({ onClose, customerId, put }) => {
  // Funtions
  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === 'modalWrapper') onClose();
  };

  return ReactDOM.createPortal(
    <>
      <StyledOverlay></StyledOverlay>
      <StyledModalWrapper data-id="modalWrapper" onClick={closeOnOverlay}>
        <StyledModal>
          <Form put={put} customerId={customerId}>
            <button type={'submit'} style={{ marginRight: '10px' }}>
              Atnaujinti
            </button>
            <button
              type={'button'}
              style={{ backgroundColor: 'red' }}
              onClick={onClose}
            >
              Uždaryti
            </button>
          </Form>
        </StyledModal>
      </StyledModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

export default EditModal;
