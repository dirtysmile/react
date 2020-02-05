import React from 'react';
import CounterCountainer from './containers/CounterCountainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterCountainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
