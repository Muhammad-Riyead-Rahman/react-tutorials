import { Suspense } from "react";

import { QueryClient, QueryClientProvider } from 'react-query';

import QuoteFetch from "./Components/Fetch/Quote";
import QuoteAxios from "./Components/Axios/Quote";
import QuoteSWR from "./Components/SWR/Quote";
import QuoteQuery from "./Components/Query/Quote";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <div>
      <QuoteFetch />
      <QuoteAxios />
      <Suspense fallback={<h1>Loading data...</h1>}>
        <QuoteSWR />
      </Suspense>


      <QueryClientProvider client={client}>
        <Suspense fallback={<h1>Loading data...</h1>}>
        <QuoteQuery />
          <QuoteQuery />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;   