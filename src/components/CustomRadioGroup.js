import React from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const CustomRadioGroup = ({ options, ...props }) =>
    <RadioGroup {...props}>
        {options?.map((option, index) =>
            <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
        )}
    </RadioGroup>

export default CustomRadioGroup;