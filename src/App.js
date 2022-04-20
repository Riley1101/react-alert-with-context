import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import './App.css';

import { useAlert } from './components/alert';

function App() {
  let [title, setTitle] = React.useState('Alert Title')
  let [message, setMessage] = React.useState('Here is how alert system works')
  let [link, setLink] = React.useState('https://www.google.com')
  let [duration, setDuration] = React.useState(10000)
  let { dispatch } = useAlert();

  let demos = ['success', 'info', 'warning', 'error']
  let handleLinkToggle = () => {
    if (link) {
      setLink(null)
    } else {
      setLink('https://google.com')
    }
  }
  return (
    <div className="App">
      <Container maxWidth='md' sx={{ padding: '1em' }}>
        <Typography variant="h1" component="div" gutterBottom sx={{ fontSize: '2em' }}>
          React Alert System
        </Typography>
        <Stack direction={'row'} spacing={'1em'} sx={{ my: '2em' }}>
          {
            demos.map(ctx => <Button
              key={ctx}
              color={ctx}
              variant='outlined'
              onClick={() =>
                dispatch({
                  type: "ADD",
                  alerttype: ctx,
                  duration: duration,
                  content: {
                    title: title,
                    message: message,
                    link: link
                  }
                })
              }>
              {ctx}
            </Button>)
          }

        </Stack>
        <Typography variant="h2" component="div" gutterBottom sx={{ fontSize: '1.5em', mb: '1em' }}>
          You can edit the alert context here !
        </Typography>
        <Stack spacing='1em'>
          <TextField
            label="Title"
            color="success"
            size='medium'
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Description"
            color="success"
            variant="standard"
            size='medium'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <TextField
            label="Duration in milliseconds"
            color="success"
            variant="standard"
            type={'number'}
            size='medium'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <TextField
            label="Link"
            color="success"
            variant="standard"
            size='medium'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked onClick={handleLinkToggle} />} label="Remove link" />
          </FormGroup>
        </Stack>
      </Container>

    </div>

  );
}

export default App;
