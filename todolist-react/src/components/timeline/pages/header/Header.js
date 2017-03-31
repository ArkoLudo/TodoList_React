import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.handleCountTodo = this.handleCountTodo.bind(this);
  }
  handleCountTodo(count) {
    let countTodo = [this.props.todos];
    this.setstate({
      count: countTodo
    });
    console.log(count);
  }
  render() {
    return (
      <div className="timeline-header">
        <h3>Vous avez {this.props.todos.length} tâches en cours</h3>
        <hr />
      </div>
    );
  }
}

export default Header;
