import { useState } from 'react';

const UseField = () => {
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState([]);
  const [required, setRequired] = useState(false);
  const [fieldType, setFieldType] = useState('input');

  const handleTitleChange = ({ target: { value } }) => {
    setTitle(value);
  }

  const handleRequiredChange = ({ target: { checked } }) => {
    setRequired(checked);
  }

  const handleFieldTypeChange = ({ target: { value } }) => {
    setFieldType(value);
  }

  const handleOptionsChange = ({ target: { value }, key }) => {
    if (key !== 'Enter' || !value.trim()) return

    setOptions(x => [...x, value]);
  }

  const resetFieldValues = () => {
    setFieldType('input');
    setRequired(false);
    setOptions([]);
    setTitle('');
  }

  return {
    title, setTitle,
    options, setOptions,
    required, setRequired,
    fieldType, setFieldType,
    handleTitleChange, handleFieldTypeChange,
    handleOptionsChange, handleRequiredChange,
    resetFieldValues
  };
};

export default UseField;