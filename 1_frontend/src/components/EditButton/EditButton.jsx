import { useState } from 'react';
import EditModal from '../Modal/EditModal';

const EditButton = ({ customerId }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <>
      <i
        className="fa-solid fa-user-pen"
        style={{
          color: 'green',
          marginRight: '5px',
          cursor: 'pointer',
        }}
        onClick={() => setIsEditOpen(true)}
      ></i>
      {isEditOpen && (
        <EditModal
          customerId={customerId}
          onClose={() => setIsEditOpen(false)}
          put={true}
        />
      )}
    </>
  );
};

export default EditButton;
