import React from "react";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";
import { connect } from "react-redux";
import {
  changeDescription,
  clearDescription,
  addTodo,
  todoFilter,
  todoCancelSearch,
} from "../../store/actions/todo";

const TodoForm = ({
  description,
  changeDescription,
  todoCancelSearch,
  search,
  addTodo,
  todoFilter,
}) => {
  const handleKey = (e) => {
    if (e.key === "Enter") addTodo(description);
  };

  return (
    <div role="form" className="todoForm">
      <div className="row">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            type="text"
            placeholder="Adicione uma tarefa"
            value={description}
            onKeyUp={handleKey}
            onChange={({ target }) => changeDescription(target.value)}
          />
        </Grid>

        <Grid cols="12 3 2">
          <IconButton
            customStyle="primary"
            disabled={search || !description}
            title="Adicionar tarefa"
            icon="plus"
            onClick={() => addTodo(description)}
          />
          <IconButton
            customStyle="info"
            icon="search"
            disabled={!description}
            title="Pesquisar tarefa"
            onClick={() => todoFilter(description)}
          />
          <IconButton
            customStyle="light"
            disabled={!search}
            title="Cancelar pesquisa"
            icon="close"
            onClick={todoCancelSearch}
          />
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    description: state.todo.description,
    search: state.todo.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDescription(newDescription) {
      const action = changeDescription(newDescription);
      dispatch(action);
    },
    clearDescription(newDescription) {
      const action = clearDescription(newDescription);
      dispatch(action);
    },
    addTodo(newDescription) {
      const action = addTodo(newDescription);
      dispatch(action);
    },
    todoFilter(filter) {
      const action = todoFilter(filter);
      dispatch(action);
    },
    todoCancelSearch(filter) {
      const action = todoCancelSearch(filter);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
