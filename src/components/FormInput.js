import React, { Component } from 'react';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  
  handleAdd = event => {
    if (event.key === 'Enter') {
      if (this.state.text === undefined || this.state.text === null || this.state.text.trim() === '') {
        this.setState({ text: '' });
        return;
      }
      this.props.addTodo(this.state.text.trim());
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <header>
        <h1 className="app-name">todos</h1>
        <div className="todos-input" style={{ paddingLeft: 0 }}>
          <input type="checkbox" className="check-box" checked={this.props.isCheckAll}
            onChange={event => this.props.completeAllTodo(event.target.checked)} />

          <input type="text" placeholder="What needs to be done?" className="want-todos"
            value={this.state.text}
            onChange={event => this.setState({ text: event.target.value })}
            onKeyPress={event => this.handleAdd(event)} />
        </div>
      </header >
    );
  }
}

export { FormInput };
