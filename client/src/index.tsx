import React from 'react';
import * as ReactDOM from 'react-dom';
// 함수형 컴포넌트 타입을 명시하는 React.FC
const App: React.FC = () => {
  return <h1>Hello World!!!!</h1>;
};

ReactDOM.render(<App />, document.getElementById('root'));