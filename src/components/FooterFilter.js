import React, { Component } from 'react';

class FooterFilter extends Component {
  render() {
    return (
      <footer className="todos-input" style={{ display: this.props.todoList.length > 0 ? 'flex' : 'none' }}>
        <div className="total-item">
          <span>{this.props.completingLength} items left</span>
        </div>
        <div className="status-todos">
          <a onClick={() => this.props.viewAll()}>All</a>
          <a onClick={() => this.props.viewActive()}>Active</a>
          <a onClick={() => this.props.viewComplete()}>Completed</a>
        </div>
        <div className="clear-complete" style={{ visibility: this.props.existCompleting > 0 ? 'visible' : 'hidden' }}>
          <a onClick={() => this.props.clearComplete()}>Clear completed</a>
        </div>
      </footer>
    );
  }
}

export { FooterFilter };
