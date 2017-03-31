import React from 'react';

import Header from './pages/header/Header';
import AddTodo from './pages/add-todo/AddTodo';
import ListTodo from './pages/list-todos/ListTodo';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }
  handleNewTodo(todo) {
    this.setState({todos:[...this.state.todos, todo]});
    console.log(this.state.todos);
  }
  handleDeleteTodo(todo) {
    let nextTodos = [...this.state.todos];
    nextTodos.splice(nextTodos.indexOf(todo), 1);
    this.setState({
      todos: nextTodos
    });
  }
  render() {
    return (
      <div className="timeline">
        <Header todos={this.state.todos}  />
        <ListTodo todos={this.state.todos} deleteTodo={(todo)=>this.handleDeleteTodo(todo)}/>
        <AddTodo newTodo={(todo)=>this.handleNewTodo(todo)}/>
      </div>
    )
  }
}

export default Timeline;
