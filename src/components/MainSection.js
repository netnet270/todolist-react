import React, { Component } from 'react';
import { TodoList } from './TodoList';
import { FooterFilter } from './FooterFilter';

class MainSection extends Component {
  render() {
    return (
      <section className="todos-list">
        <TodoList todoList={this.props.mainSectionProp}
          deleteTodo={this.props.deleteTodo}
          completeTodo={this.props.completeTodo} />

        <FooterFilter existCompleting={this.props.existCompleting}
          completingLength={this.props.completingLength}
          todoList={this.props.mainSectionProp}
          viewAll={this.props.viewAll}
          viewActive={this.props.viewActive}
          viewComplete={this.props.viewComplete}

          clearComplete={this.props.clearComplete}
        />
      </section>
    );
  }
}

export { MainSection };