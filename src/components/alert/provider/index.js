import React, { useReducer } from 'react';
import AlertContext from '../context';
import alertReducer from '../reducer';
import AlertContainer from '..'
import { createPortal } from 'react-dom';

const AlertProvider = (props) => {
    let defaultValue = []
    const [state, dispatch] = useReducer(alertReducer, defaultValue);
    return (
        <AlertContext.Provider value={{ state, dispatch }}>
            {props.children}

            {createPortal(<AlertContainer alerts={state} />, document.body)}
        </AlertContext.Provider>
    );
}

export default AlertProvider;