import { useContext } from 'react';
import AlertContext from './context';
import CustomAlert from './alert';
import Box from '@mui/material/Box';

export const useAlert = () => {
    return useContext(AlertContext);
};

export default function AlertContainer({ alerts }) {
    return (
        <Box role='alertdialog' sx={{
            position: 'fixed',
            top: '1em',
            right: '.5em',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            gap: '.5rem',
        }}>
            {
                alerts.map(alert => <CustomAlert alert={alert} key={alert.id} />)
            }
        </Box>


    );
}

