import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import getIdentifier from '../helpers/getIdentifier';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    paddingLeft: 5,
  },
  container: {
    paddingTop: 5,
    display: 'flex',
  },
  inputText: {
    width: 700,
  },
}));

const Form = ({ setData }) => {
  const classes = useStyles();
  const [codigo, setCodigo] = useState('');

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <div>
          <h1>ANALIZADOR LÉXICO</h1>
          <div className={classes.container}>
            <span className={classes.title}>Autor:</span>
            <span className={classes.text}>
              Jose Enmanuel Estrella 2-16-0823
            </span>
          </div>
          <div className={classes.container}>
            <span className={classes.title}>Lenguaje:</span>
            <span className={classes.text}>JavaScript</span>
          </div>
        </div>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <div>
          <div style={{ paddingTop: 100 }}>
            <TextField
              id="outlined-multiline-static"
              className={classes.inputText}
              label="Escribe o pega el código a analizar"
              multiline
              rows={10}
              defaultValue={codigo}
              onChange={({ target: { value } }) => setCodigo(value)}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <Button
              variant="contained"
              onClick={() => setData(getIdentifier(codigo))}
            >
              Analizar
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Form;
