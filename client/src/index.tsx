import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';

interface User {
  _id: string;
  name: string;
  age: number;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // GET 요청 보내기
    axios.get('/api/users')
      .then((response: any) => {
        // 요청이 성공하면 서버에서 받은 데이터를 상태에 저장
        setUsers(response.data);
      })
      .catch((error: any) => {
        // 요청이 실패하면 에러 처리
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Hello World!!</h1>

      <h2>Users:</h2>
      {/* 사용자 정보를 화면에 출력 */}
      {users.map(user => (
        <div key={user._id}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
