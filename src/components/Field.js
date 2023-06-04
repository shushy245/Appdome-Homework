import React from 'react';
import { InputLabel, Typography } from '@mui/material';

import { Column } from '../layout';
import { fieldTypeMap } from '../enums';
import { useForm } from '../providers/FormProvider';

const Field = ({ fieldType, title, required, options, index, Component = fieldTypeMap[fieldType], sx }) => {
    const { values, setValues, error, setError } = useForm();

    const handleChange = ({ target: { value: eventValue, checked } }, value) => {
        const eventValueMap = {
            checkbox: `${checked}`,
            radio: value
        }

        const newValue = eventValueMap[fieldType] || eventValue;

        setValues(values =>
            [...values.slice(0, index), newValue, ...values.slice(index + 1)])

        setError(!!newValue);
    };

    const handleBlur = ({ target: { value } }) => {
        if (required && !value.trim()) {
            setError(true);
            return;
        }

        setError(false);
    };

    return (
        <Column sx={{ width: '70%', alignItems: 'start', margin: '5px' }}>
            <InputLabel sx={{ width: '100%', ...sx }}>{`${title}${required ? ' *' : ''}`}</InputLabel>
            <Component options={options} required={required} index={index} onChange={handleChange} onBlur={handleBlur} />
            {error && required && !values[index]?.trim() && <Typography variant="caption" color="error">{'Field is required'}</Typography>}
        </Column>
    );
}

export default Field;