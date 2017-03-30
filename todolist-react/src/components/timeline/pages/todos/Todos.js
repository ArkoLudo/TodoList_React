import React from 'react';

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo
    }
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }
  handleCheckChange(event) {
    this.setState({todo: {
      checked: event.target.checked,
      text: this.state.todo.text
    }});
  }

  render() {
    return (
      <li className={this.state.todo.checked && "checked"}>
        <input type="checkbox" className="toggle-checked" onChange={this.handleCheckChange} />
        <span className="text">
          {this.state.todo.text}
        </span>
        <span className="delete" onClick={()=>this.props.deleteTodo(this.props.todo)}>
        x
        </span>
      </li>
    )
  }
}
