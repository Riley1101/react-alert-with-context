import { useContext } from 'react';
import AlertContext from './context';
import CustomAlert from './alert';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

// primary alert hook for further use in various components

export const useAlert = () => {
    return useContext(AlertContext);
};

export default function AlertContainer({ alerts }) {

    // css in js for further customization for alert position 
    let Position = {
        position: 'fixed',
        top: '1em',
        right: '.5em',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
    }

    return (
        <Box role='alertdialog' sx={Position}>
            {
                alerts.map(alert => <CustomAlert alert={alert} key={alert.id} />)
            }
        </Box>
    );
}

let ALERT_TYPES = ['success', 'info', 'warning', 'error'];

AlertContainer.propTypes = {
    alerts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            content: PropTypes.shape({
                title: PropTypes.string.isRequired,
                message: PropTypes.string.isRequired,
                link: PropTypes.string
            }),
            duration: PropTypes.number,
            alerttype: PropTypes.oneOf(ALERT_TYPES),
        })
    )
};
