import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({target}) =>{
        setValues({
            ...values,
            [target.name]: target.value //description: target.value
        });
    }

    const reset = () =>{
        setValues(initialState);
    }

    return [values, handleInputChange, reset];
}