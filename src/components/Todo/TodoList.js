import React from "react";
import IconButton from "../template/IconButton";
import "./TodoList.css";
import { connect } from "react-redux";
import { todoDone, todoRemove } from "../../store/actions/todo";

const TodoList = ({ list, todoDone, todoRemove }) => {
  return (
    <div>
      <table className="table mt-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col" className=" max-w">
              Ações
            </th>
          </tr>
        </thead>

        <tbody>
          {list &&
            list.map((item, i) => (
              <tr
                key={item.description + i}
                className={item.done ? "done" : ""}
              >
                <td className={`${item.done ? "done" : ""}`}>
                  {item.description}
                </td>
                <td className="max-w">
                  <IconButton
                    title={item.done ? "Desfazer tarefa" : "Tarefa finalizada"}
                    customStyle={item.done ? "warning" : "success"}
                    icon={item.done ? "redo" : "check"}
                    onClick={() => {
                      todoDone(i);
                    }}
                  />
                  {item.done && (
                    <IconButton
                      customStyle="danger"
                      title="Excluir tarefa"
                      icon="trash"
                      onClick={() => {
                        todoRemove(i);
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // list: state.todo.list,
    // filteredList: state.todo.filteredList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    todoDone(newDescription) {
      const action = todoDone(newDescription);
      dispatch(action);
    },
    todoRemove(newDescription) {
      const action = todoRemove(newDescription);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
