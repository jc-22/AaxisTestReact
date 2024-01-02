import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function BasicButton({...props}) {
    const { tittle, onClick, isDisabled } = props;

    return (
        <Box sx={{margin: '1rem'}}>
            <Button variant="contained" onClick={onClick} disabled={isDisabled}>{tittle}</Button>
        </Box>
    );
}