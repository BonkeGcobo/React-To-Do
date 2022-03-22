/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class InputTodo extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Add todo" className="inputTodo" />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default InputTodo;
