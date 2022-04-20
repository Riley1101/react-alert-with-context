
# Alert System in React

A reuseable alert system with React.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Riley1101/react-alert-with-context
```

Go to the project directory

```bash
  cd react-alert-with-context
```

Install dependencies

```bash
  yarn 

```

Start the server

```bash
  yarn add
```


## Component Props

#### Alert component Props


```javascript
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

```
#### Alert container 

```javascript 

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

```

## Setup 

To use react-alert-with-context , wrap main app body with AlertProvider

```
import AlertProvider from '..../alert/provider';
```

```bash
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AlertProvider>
        <App />
      </AlertProvider>
  </React.StrictMode>
);
```

## To reuse the alert in your project 

```
import { useAlert } from '..../alert';
```

```javascript
let { dispatch } = useAlert();
```
### Example

```javascript
<Button
    variant='outlined'
    onClick={() =>
        dispatch({
            type: "CLEAR",
        })}>
    Close
</Button>

```

### Dispatch actions

```javascript
// to call an alert component
dispatch({
    type: "ADD",            // dispatch action types
    alerttype: 'success',   // success,info,warning,error
    duration: duration,     // duration on how long the alert to be shown default is 3000ms
    content: {
            title: title,
            message: message,
            link: link
        }
})
```

```javascript
// to remove specific alert component
dispatch({
    type: "REMOVE",            // dispatch action types
    alert : 'id'               // id of the alert 
})
```


```javascript
// to remove all alerts
dispatch({
    type: "CLEAR",            // dispatch action types

})
```