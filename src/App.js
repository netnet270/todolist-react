import React, { Component } from 'react';
import { FormInput } from './components/FormInput';
import { MainSection } from './components/MainSection';
import './CSS/index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      existCompleting: 0,
      isCheckAll: false,
      originalTodos: []
    };
  }

  addTodo = text => {
    let { todos } = this.state;
    const newTodo = {
      id: this.state.todos.reduce((maxId, e) => Math.max(maxId, e.id), -1) + 1,
      name: text,
      completed: false
    }
    let newTodosList = [...todos, newTodo];
    this.setState({ todos: newTodosList, originalTodos: newTodosList });
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(e => e.id !== id);
    let sumCompleting = todos.reduce((sumCompleting, element) => sumCompleting + (element.completed ? 1 : 0), 0);
    this.setState({ todos: todos, originalTodos: todos, existCompleting: sumCompleting });
    // this.setState({ todos });--> ES6 viết tắt khi biến nhận và biến giá trị giống nhau
  }

  completeTodo = (id, checked) => {
    let tmp_existCompleting = this.state.existCompleting;
    let todosLength = this.state.todos.length;
    let isCheckAll = this.state.isCheckAll;
    const todos = this.state.todos.map(e => {
      if (e.id === id && checked) {
        e.completed = true;
        tmp_existCompleting++;
        if (todosLength === tmp_existCompleting) {
          isCheckAll = true;
        }
      }
      if (e.id === id && !checked) {
        e.completed = false;
        tmp_existCompleting--;
        isCheckAll = false;
      }
      return e;
    });
    this.setState({ todos: todos, existCompleting: tmp_existCompleting, isCheckAll: isCheckAll });
  }


  // completeTodo = id => {
  //   const todos = this.state.todos.map(e => e.id === id ? { ...e, completed: !e.completed } : e);
  //   this.setState(todos);
  // }

  completeAllTodo = isCheck => {
    let todos = this.state.todos.map(e => {
      e.completed = isCheck ? true : false;
      return e;
    });
    this.setState({ todos: todos, existCompleting: isCheck ? todos.length : 0, isCheckAll: isCheck ? true : false });
  }

  // completeAllTodo = () => {
  //   const checked = this.state.todos.every(e => e.completed);
  //   const todos = this.state.todos.map(e => ({ ...e, completed: !checked }));
  //   this.setState({ todos });
  // }

  viewAll = () => {
    this.setState({ todos: this.state.originalTodos });
  }

  viewActive = () => {
    let tmp_todos = this.state.originalTodos;
    let todos = tmp_todos.filter(e => !e.completed);
    this.setState({ todos: todos });
  }

  viewComplete = () => {
    let tmp_todos = this.state.originalTodos;
    let todos = tmp_todos.filter(e => e.completed);
    this.setState({ todos: todos });
  }

  clearComplete = () => {
    let tmp_todos = this.state.todos.filter(e => !e.completed);
    this.setState({ todos: tmp_todos, originalTodos: tmp_todos, isCheckAll: false, existCompleting: 0 });
  }

  render() {
    return (
      <div className="container">
        <FormInput addTodo={this.addTodo}
          isCheckAll={this.state.isCheckAll}
          completeAllTodo={this.completeAllTodo} />

        <MainSection mainSectionProp={this.state.todos}
          completingLength={this.state.originalTodos.length - this.state.existCompleting}
          existCompleting={this.state.existCompleting}
          deleteTodo={this.deleteTodo}
          completeTodo={this.completeTodo}

          viewAll={this.viewAll}
          viewActive={this.viewActive}
          viewComplete={this.viewComplete}

          clearComplete={this.clearComplete} />
      </div>
    );
  }
}



export default App;