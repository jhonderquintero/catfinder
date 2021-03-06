import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export const ModalComponent = (title, text) => {
    const [open, setOpen] = useState(true);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div>
        <button onClick={onOpenModal}>Open modal</button>
        <Modal open={open} onClose={onCloseModal} center>
            <h1>ERROR</h1>
        </Modal>
        </div>
    );
}

export default ModalComponent;