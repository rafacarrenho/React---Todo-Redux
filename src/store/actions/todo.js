export const changeDescription = (newDescription) => {
  return {
    type: "CHANGE_DESCRIPTION",
    payload: newDescription,
  };
};

export const clearDescription = () => {
  return {
    type: "CLEAR_DESCRIPTION",
    payload: "",
  };
};

export const addTodo = (newTodo) => {
  return [
    {
      type: "ADD_TODO",
      payload: newTodo,
    },
    clearDescription(),
  ];
};

export const todoDone = (todo) => {
  return {
    type: "TODO_DONE",
    payload: todo,
  };
};

export const todoRemove = (todo) => {
  return {
    type: "TODO_REMOVE",
    payload: todo,
  };
};

export const todoFilter = (filter) => {
  return [
    {
      type: "TODO_FILTER",
      payload: filter,
    },
    todoSearch(),
  ];
};

export const todoSearch = () => {
  return {
    type: "TODO_SEARCH",
  };
};

export const todoCancelSearch = () => {
  return {
    type: "TODO_CANCEL_SEARCH",
  };
};
