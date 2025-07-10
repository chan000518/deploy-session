import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TodosNoQueryPage() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

   useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        );
        setTodos(res.data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, []);
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">📋 Todos</h1>

      <Link to="/">⬅️ 홈으로 돌아가기</Link>

      {isLoading && <p className="text-gray-600">로딩 중...</p>}
      {isError && <p className="text-red-500">에러 발생: {isError}</p>}
      {!isLoading && !isError && (
        <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-auto">
          {JSON.stringify(todos.slice(0, 5), null, 2)}
        </pre>
      )}
    </div>
  );
}
