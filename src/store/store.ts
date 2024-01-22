import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

// Action
// reduxtoolkit(createAction) 작성법
// const addToDo = createAction<string>("ADD");
// const deleteToDo = createAction<number>("DELETE");

// 기본 redux 작성법
// const addToDo = (text: string) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id: number) => {
//   return {
//     type: DELETE,
//     id,
//   };
// };

// Reducer
interface ToDo {
  text: string;
  id: number;
}
const initialState: ToDo[] = [];
// createReducer 생성
// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(addToDo, (state, action: PayloadAction<string>) => {
//       // ToDo 추가 로직
//       state.push({ text: action.payload, id: Date.now() });
//     })
//     .addCase(deleteToDo, (state, action: PayloadAction<number>) => {
//       // ToDo 삭제 로직
//       return state.filter((toDo) => toDo.id !== action.payload);
//     });
// });

// reduxtoolkit(createAction을 적용한 기본 작성법 payload 를 호출함) 작성법
// const reducer = (state: any[] = [], action: any) => {
//   switch (action.type) {
//     case addToDo.type:
//       console.log(action);
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// 기본 Reducer 작성법
// const reducer = (state: any[] = [], action: any) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.id);
//     default:
//       return state;
//   }
// };

// reduxtoolkit(createSlice) 작성법
const toDos = createSlice({
  name: "toDosReducer",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});
console.log(toDos.actions);
// store
// const store = createStore(reducer);
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
