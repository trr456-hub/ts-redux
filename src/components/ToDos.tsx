import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store/store";

interface props {
  text: string;
  DeleteBtnClk: React.MouseEventHandler<HTMLButtonElement>;
  id: number;
}

const ToDo = ({ text, DeleteBtnClk, id }: props) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={DeleteBtnClk}>DEL</button>
    </li>
  );
};

function mapDispatchToProps(dispatch: any, ownProps: any) {
  return {
    DeleteBtnClk: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
