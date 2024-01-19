import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text: string) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id: number) => {
  return {
    type: DELETE,
    id,
  };
};
const reducer = (state: any[] = [], action: any) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
