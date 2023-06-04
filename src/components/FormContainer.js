import React from 'react';
import { useTheme } from '@mui/material';

import { Column } from '../layout';

const FormContainer = ({ children, ...options }) => {
    const { palette } = useTheme();

    return (
        <Column sx={{ backgroundColor: palette.container, height: '90%', width: '50%', borderRadius: '8px', minHeight: 'fit-content', justifyContent: 'space-around' }} {...options}>
            {children}
        </Column>
    );
}

export default FormContainer;