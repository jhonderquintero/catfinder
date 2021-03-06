import React, { useState} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

            <p> </p>
export const LoginModalComponent = ({show = false, change}) => {
    const [open, setOpen] = useState(true);

    const onCloseModal = () => setOpen(false);

    switch (show) {
        case true:
            return (
                <div>
                <Modal open={open} onClose={onCloseModal} center>
                    <h2>Try Again</h2>
                    <p>User or Password Incorrect</p>
                </Modal>
                </div>
            );
        default: return null;
    }
};

export default LoginModalComponent;