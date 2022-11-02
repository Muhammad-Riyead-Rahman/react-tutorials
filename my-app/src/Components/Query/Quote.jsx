import { useQuery } from "react-query";
import getQuote from './getQuoteApi';

const Quote = () => {
  const { data, isLoading } = useQuery("quote", () => getQuote());
  
  return (
    <div>
      <h1>Get Quote Using Fetch API</h1>
      <div>{data?.content}</div>
    </div>
  )
}

export default Quote