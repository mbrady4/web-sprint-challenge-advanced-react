// write your custom hook here to control your checkout form
import React from 'react';
import { useState } from 'react';

const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return [values, showSuccessMessage, handleChanges, handleSubmit];
};

export default useForm;