const initialState = {
  description: "",
  list: [],
  search: false,
  filteredList: "",
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_DESCRIPTION":
      return {
        ...state,
        description: action.payload,
      };
    case "CLEAR_DESCRIPTION":
      return {
        ...state,
        description: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        list: [...state.list, { description: action.payload, done: false }],
      };
    case "TODO_DONE":
      return {
        ...state,
        list: state.list.map((content, i) =>
          i === action.payload ? { ...content, done: !content.done } : content
        ),
      };
    case "TODO_REMOVE":
      return {
        ...state,
        list: state.list.filter((item) => item !== state.list[action.payload]),
      };
    case "TODO_FILTER":
      return {
        ...state,
        filteredList: state.list.filter((i) =>
          i.description.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "TODO_SEARCH":
      return {
        ...state,
        search: true,
      };
    case "TODO_CANCEL_SEARCH":
      return {
        ...state,
        search: false,
        filteredList: "",
        description: "",
      };
    default:
      return state;
  }
};

export default todoReducers;
