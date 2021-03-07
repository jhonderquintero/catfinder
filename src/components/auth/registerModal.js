import React, { useState, useEffect} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export const RegisterModal = ({show}) => {
    const [open, setOpen] = useState(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        setOpen(show);
    }, [show])

    switch (show) {
        case true:
            return (
                <div>
                <Modal open={open} onClose={onCloseModal} center>
                    <h2>Oops, you have some error..</h2>
                    <h2>Please try again!</h2>
                    <br/>
                    <p>Names: Should have a string (letters) length of 3 to 16 characters</p><br/>
                    <p>Email: Should introduce a valid email</p><br/>
                    <p>Password: Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long</p><br/>
                </Modal>
                </div>
            );
        default: return null;
    }
};

export default RegisterModal;