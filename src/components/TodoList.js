/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (<TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} />))}
      </ul>
    );
  }
}

export default TodoList;
