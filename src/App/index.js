import React, { useState } from 'react';
import { Button, Typography, useTheme } from '@mui/material';

import Form from '../components/Form';
import AddField from '../components/AddField';
import { Column, Container, FullColumn, FullRow } from '../layout';
import { useForm } from '../providers/FormProvider';
import SubmitModal from '../components/SubmitModal';
import FormContainer from '../components/FormContainer';

const App = () => {
  const { palette } = useTheme();
  const { fields, isCreatingForm, toggleCreatingForm, values, setValues, setFields, setError } = useForm();

  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);

  const handleSaveForm = () => {
    const values = Array(fields.length).fill('').map((value, index) => {
      if (fields[index].fieldType == 'checkbox') {
        return 'false';
      }

      return value;
    });

    toggleCreatingForm();
    setValues(values);
  }

  const handleSubmit = () => {
    const invalid = values.some((value, index) => !value && fields[index].required);
    setError(invalid);

    if (invalid) return;

    setData(() => JSON.stringify(fields.reduce((data, { title }, index) => {
      const key = (title in data || !title) ? index : title;
      data[key] = values[index] || '';
      return data;
    }, {}), 0, 4));
    setOpen(true);
  }

  const handleRestart = () => {
    setFields([]);
    setValues([]);
    toggleCreatingForm();
    setOpen(false);
  }

  return (
    <Container sx={{ backgroundImage: palette.background }}>
      <FormContainer>
        <FullRow sx={{ height: '10%' }}>
          <Typography variant='h3'>{'Dynamic Form Builder'}</Typography>
        </FullRow>
        <Column sx={{ width: '90%', height: '80%' }}>
          <Form fields={fields} sx={{ height: isCreatingForm ? '35%' : '100%' }} />
          {isCreatingForm && <AddField />}
        </Column>
        <FullRow sx={{ height: '10%' }}>
          {isCreatingForm ?
            <Button onClick={handleSaveForm} sx={{ margin: '10px' }}>
              {'Save Form'}
            </Button> :
            <Button onClick={handleSubmit} sx={{ margin: '10px' }}>
              {'Submit'}
            </Button>}
        </FullRow>
      </FormContainer>
      {open && data && <SubmitModal open={open} data={data} onRestart={handleRestart} />}
    </Container>)
}

export default App;