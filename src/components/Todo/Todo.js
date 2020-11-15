import React from "react";
import PageHeader from "../PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { connect } from "react-redux";

const Todo = ({ list, search, description, filteredList }) => {
  return (
    <div className="container">
      <PageHeader name="Lista de Tarefas" small="" />
      <TodoForm />
      {console.log(search)}
      {search && (
        <div className="mt-4">
          <strong>Pesquisando por: </strong>
          {description}
        </div>
      )}

      <TodoList list={search ? filteredList : list} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.todo.list,
    description: state.todo.description,
    search: state.todo.search,
    filteredList: state.todo.filteredList,
  };
};

export default connect(mapStateToProps)(Todo);
