import React from 'react';
import { Button, Modal, Typography, useTheme } from '@mui/material';

import { Column, Container } from '../layout';

const SubmitModal = ({ open, data, onRestart }) => {
    const { palette } = useTheme();

    return (
        <Modal open={open} component={Container} >
            <Column sx={{ height: '65%', width: '25%', borderRadius: '4px', justifyContent: 'space-around', backgroundColor: palette.container }}>
                <Typography component={'pre'} sx={{ maxWidth: '100%', overflowX: 'auto', overflow: 'auto' }}>
                    {data}
                </Typography>
                <Button onClick={onRestart}>
                    {'Restart'}
                </Button>
            </Column>
        </Modal>
    );
}

export default SubmitModal;