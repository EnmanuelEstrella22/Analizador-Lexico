import React, { useState } from 'react';
import Form from '../components/Form';
import TableToken from '../components/Table';

const AnalizadorLexico = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <Form setData={setData} />
      <TableToken data={data} />
    </>
  );
};

export default AnalizadorLexico;
