import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import SearchHeader from './components/SearchHeader';


function App() {
  
const queryClient = new QueryClient();
  return (
  <>
    <SearchHeader />
    <QueryClientProvider client={queryClient}>
      <Outlet/>
    </QueryClientProvider>
  </>
  )
}

export default App;

