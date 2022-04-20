import { v4 as uuidv4 } from 'uuid';

const alertReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state, {
                    id: uuidv4(),
                    type: action.type,
                    alerttype: action.alerttype,
                    content: {
                        title: action.content.title,
                        message: action.content.message,
                        link: action.content.link
                    },
                    duration: action.duration ? action.duration : 3000
                }
            ]
        case 'REMOVE':
            return state.filter(alert => alert.id !== action.alert)

        case 'CLEAR':
            return []
        default:
            return state;
    }
};

export default alertReducer;