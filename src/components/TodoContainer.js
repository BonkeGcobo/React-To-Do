/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
import React from 'react';
import TodoList from './TodoList';
// eslint-disable-next-line react/prefer-stateless-function

class TodoContainer extends React.Component {
  // We are adding the todos here because we want it to be accessible by other children components as well(Lifting up the state)
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,

        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,

        },
      ],
    };
  }

  // The only component where we can change the state is the TodoContainer hence we added the event handler in this component.
  // In class components we need to use setState to update the state.
  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    }));
  }

  render() {
    return (
      /* We are passing down the state to the todoList as props */
      <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} />
    );
  }
}

export default TodoContainer;
