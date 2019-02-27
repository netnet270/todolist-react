import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <section>
        <ul>
          {
            this.props.todoList.map((element, index) => {
              return (
                <li className="todos-input list-todo">
                  <input type="checkbox" className="check-box li-check"
                    onChange={event => this.props.completeTodo(element.id, event.target.checked)}
                    checked={element.completed} />

                  <span className="todos-name" style={{
                    color: element.completed ? '#969494' : 'black',
                    textDecoration: element.completed ? 'line-through' : 'none'
                  }}>{element.name}</span>

                  <div className="clear-one" onClick={() => this.props.deleteTodo(element.id)}>&#10006;</div>
                </li>
              );
            })
          }
        </ul>
      </section>
    );
  }
}

export { TodoList };
