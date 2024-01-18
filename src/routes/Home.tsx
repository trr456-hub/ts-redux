import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store/store";

interface HomeProps {
  toDos: any[]; // toDos의 타입은 알맞게 지정해 주세요.
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
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}
function mapStateToProps(state: any) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addToDo: (text: any) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
