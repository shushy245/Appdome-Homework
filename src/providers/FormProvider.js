import React, { useState, createContext, useContext } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [fields, setFields] = useState([]);
    const [values, setValues] = useState([]);
    const [error, setError] = useState(false);
    const [isCreatingForm, setIsCreatingForm] = useState(true);

    const addField = newField => {
        setFields(fields => ([...fields, newField]));
    };

    const toggleCreatingForm = () => {
        setIsCreatingForm(x => !x)
    }

    return (
        <FormContext.Provider value={{ fields, isCreatingForm, setFields, addField, toggleCreatingForm, values, setValues, error, setError }}>
            {children}
        </FormContext.Provider>
    );
};

export const useForm = () => useContext(FormContext);