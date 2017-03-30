import React from 'react';

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.newTodo({
      text: this.state.text,
      checked: false
    });
    this.setState({text: ''});
  }
  handleTextChange(event) {
    this.setState({text:event.target.value});
  }

  render() {
    return (
      <form className="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" name="text" placeholder="Ajouter une tâche..." value={this.state.text} onChange={this.handleTextChange}/>
      </form>
    )
  }
}
