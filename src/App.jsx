import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodosNoQueryPage from './pages/TodosNoQueryPage';
import TodosTanStackQueryPage from './pages/TodosTanStackQueryPage';
import TodosCrudPage from './pages/TodosCrudPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos-crud" element={<TodosCrudPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/todos-no-query" element={<TodosNoQueryPage />} />
        <Route
          path="/todos-tanstack-query"
          element={<TodosTanStackQueryPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
