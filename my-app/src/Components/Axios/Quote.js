import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch("http://api.quotable.io/random");
      setQuote(res.data);
    };

    fetchQuote();

  }, []);

  return (
    <div>
      <h1>Get Quote Using Axios API</h1>
      <div>{quote?.content}</div>
    </div>
  )
}

export default Quote