import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDos";
import { add } from "../store/store";

interface HomeProps {
  toDos: any[];
  addToDo: (text: string) => void;
}

function Home({ toDos, addToDo }: HomeProps) {
  const [text, setText] = useState("");
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}
function mapStateToProps(state: any) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addToDo: (text: any) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
