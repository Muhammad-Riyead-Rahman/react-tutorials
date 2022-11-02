import useSWR from 'swr';

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
}

const Quote = () => {
  const { data, error } = useSWR('http://api.quotable.io/random', fetcher, { suspense: true });
  console.log(data);

  if (error) {
    return <h1>There was an Server Side error</h1>
  }

  return (
    <div>
      <h1>Get Quote Using SWR API</h1>
      <div>{data.content}</div>
    </div>
  )
}

export default Quote 