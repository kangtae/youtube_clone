import './App.css';
import { Outlet } from 'react-router-dom';
import SearchHeader from "./components/SearchHeader";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
	const queryClient = new QueryClient();
  return (
		<>
			<SearchHeader/>
			<QueryClientProvider client={queryClient}>
				<Outlet />
			</QueryClientProvider>
		</>
	)
}

export default App;
