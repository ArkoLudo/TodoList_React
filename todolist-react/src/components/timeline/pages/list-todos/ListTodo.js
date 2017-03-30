import React from 'react';

import Todos from '../todos/Todos.js';

export default class ListTodo extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index)=><Todos deleteTodo={this.props.deleteTodo} todo={todo} key={todo.text} />)}
      </ul>
    )
  }
}
