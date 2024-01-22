import { connect } from "react-redux";

interface more {
  state: any;
  ownProps: any;
  toDo: any;
}

function Detail({ toDo }: any) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps({ state, ownProps }: more) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find(({ toDo }: any) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
