import React, { useReducer } from 'react';
import { createPortal } from 'react-dom';
import AlertContainer from '..';
import AlertContext from '../context';
import alertReducer from '../reducer';

const AlertProvider = (props) => {
    // default state for dispatch
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