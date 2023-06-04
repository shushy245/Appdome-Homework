import React from 'react';
import { Select, MenuItem } from '@mui/material';

const CustomSelect = ({ options, ...props }) =>
    <Select {...props}>
        {options?.map((option, index) =>
            <MenuItem key={index} value={option}>{option}</MenuItem>
        )}
    </Select>

export default CustomSelect;