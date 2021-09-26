import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

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
    paddingTop: 20,
  },
  inputText: {
    width: 700,
  },
}));

const TableToken = ({ data }) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.container}
    >
      <div>
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
          <Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">
            <TableHead style={{ backgroundColor: '##AFAEAE' }}>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="left">Tipo</TableCell>
                <TableCell align="left">Token</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length
                ? data.map(({ Nombre, Tipo, Token }, i) => (
                    <TableRow
                      key={i}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="left">
                        {Nombre}
                      </TableCell>
                      <TableCell component="th" scope="row" align="left">
                        {Tipo}
                      </TableCell>
                      <TableCell component="th" scope="row" align="left">
                        {Token}
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default TableToken;
