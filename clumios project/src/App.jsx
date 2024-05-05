import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'; 
import HomePage from './Components/HomePage/HomePage';

const queryClient = new QueryClient(); 

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <HomePage />
    </div>
    </QueryClientProvider>
    
  );
}

export default App;
