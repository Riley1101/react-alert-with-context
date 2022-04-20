import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Link from '@mui/material/Link';
import React from 'react';
import { useAlert } from '..';
import PropTypes from 'prop-types';

const CustomAlert = ({ alert }) => {
    const { dispatch } = useAlert();
    React.useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: 'REMOVE',
                alert: alert.id
            });
        }, alert.duration);
    }, [dispatch, alert]);

    return (
        <Alert severity={alert.alerttype ? alert.alerttype : 'success'}
            key={alert.id} id={alert.id}>
            <AlertTitle>{alert.content.title}</AlertTitle>
            {alert.content.message} <br />
            {alert.content.link &&
                <Link href={alert.content.link} color="inherit" target={'_blank'}>
                    {alert.content.link}
                </Link>}
        </Alert>
    );
}

export default CustomAlert;

let ALERT_TYPES = ['success', 'info', 'warning', 'error'];

CustomAlert.propTypes = {
    alert: PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.shape({
            title: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            link: PropTypes.string
        }),
        duration: PropTypes.number,
        alerttype: PropTypes.oneOf(ALERT_TYPES),
    })
};