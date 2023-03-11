import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const test = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const { hash } = router.query;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/verifyemail/${hash}`)
      .then((res) => {
        console.log(res.data);
        setValue('Email Verified');
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.data && !err.response.data.success) {
          setValue('User Not Found');
          
        }
      });
  },[hash]);
  return (
    <>
      <h1>{value}</h1>
    </>
  );
};

export default test;
