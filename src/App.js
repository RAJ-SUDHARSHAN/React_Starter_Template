import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import TestPage from "./containers/TestPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
