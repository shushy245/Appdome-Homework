import React, { useState, useRef, useEffect } from 'react';
import { Add } from '@mui/icons-material';
import { Button, Chip, Input, InputLabel, MenuItem, Select, Switch, Typography, useTheme } from '@mui/material';

import UseField from '../hooks/UseField';
import { useForm } from '../providers/FormProvider';
import { Column, Container, FullRow } from '../layout';

const FieldContainer = ({ children }) => <Column sx={{ width: '70%', alignItems: 'start', margin: '5px' }}>{children}</Column>

const AddField = () => {
    const { title, handleTitleChange,
        options, handleOptionsChange,
        required, handleRequiredChange,
        fieldType, handleFieldTypeChange,
        resetFieldValues } = UseField();
    const { addField } = useForm();

    const [adding, setAdding] = useState(false);
    const optionsRef = useRef();

    useEffect(() => {
        if (!optionsRef.current?.value) return

        optionsRef.current.value = '';
    }, [options])

    const toggleAdding = () => {
        setAdding(x => !x);
    }

    const handleAddField = () => {
        toggleAdding();
        addField({ title, options, required, fieldType });
        resetFieldValues();
    }

    return <Column sx={{ height: '65%', width: '100%' }}>
        {adding ?
            <>
                <FieldContainer>
                    <InputLabel>
                        {'Enter Title...'}
                    </InputLabel>
                    <Input onChange={handleTitleChange} />
                </FieldContainer>
                <FieldContainer>
                    <InputLabel>
                        {'Is The Field Required?'}
                    </InputLabel>
                    <Switch onChange={handleRequiredChange} label={'Required'} />
                </FieldContainer>
                <FieldContainer>
                    <InputLabel>
                        {'Select Field Type...'}
                    </InputLabel>
                    <Select value={fieldType} defaultValue={'Text Input'} onChange={handleFieldTypeChange}>
                        <MenuItem key={'input'} value={'input'}>{'Text Input'}</MenuItem>
                        <MenuItem key={'checkbox'} value={'checkbox'}>{'Checkbox'}</MenuItem>
                        <MenuItem key={'select'} value={'select'}>{'Select Dropdown'}</MenuItem>
                        <MenuItem key={'radio'} value={'radio'}>{'Radio Buttons'}</MenuItem>
                    </Select>
                </FieldContainer>
                {(fieldType == 'select' || fieldType == 'radio') &&
                    <FieldContainer>
                        <InputLabel>
                            {'Enter Options...'}
                        </InputLabel>
                        <Input inputRef={optionsRef} onKeyDown={handleOptionsChange} />
                        <FullRow sx={{ overflow: 'scroll' }}>
                            {options?.map((option, index) => <Chip key={index} label={option} />)}
                        </FullRow>
                    </FieldContainer>
                }
                <Button onClick={handleAddField} sx={{ margin: '5px' }}>
                    {'Add Field'}
                </Button>
            </>
            :
            <Button onClick={toggleAdding}>
                <Add fontSize={'large'} />
                <Typography variant={'h4'}>{'Add New Field...'}</Typography>
            </Button>
        }
    </Column>;
}

export default AddField;