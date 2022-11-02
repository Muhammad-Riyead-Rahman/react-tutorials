import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch("http://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    };

    fetchQuote();

  }, []);
  
  return (
    <div>
      <h1>Get Quote Using Fetch API</h1>
      <div>{quote?.content}</div>
    </div>
  )
}

export default Quote