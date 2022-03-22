import './App.css';
import React from 'react';
import TodoContainer from './components/TodoContainer';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <TodoContainer />
      </>
    );
  }
}

export default App;
