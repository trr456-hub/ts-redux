import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail: React.FC = () => {
  const id = useParams();
  console.log(id);
  return <h1>Deatil</h1>;
};

function mapStateToProps({ state, ownProps }: any) {
  console.log(state);
  console.log(ownProps);
}

export default connect(mapStateToProps)(Detail);
