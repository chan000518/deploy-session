import axios from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const fetchTodos = async () => {
  const res = await axios.get(
    'https://jsonplaceholder.typicode.com/todos',
  )
  return res.data;
}

export default function TodosTanStackQueryPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
    cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
  });
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">📋 Todos</h1>

      <Link to="/">⬅️ 홈으로 돌아가기</Link>

      {isLoading && <p className="text-gray-600">로딩 중...</p>}
      {isError && <p className="text-red-500">에러 발생: {error.message}</p>}
      {!isLoading && !isError && (
        <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-auto">
          {JSON.stringify(data.slice(0, 5), null, 2)}
        </pre>
      )}
    </div>
  );
}
