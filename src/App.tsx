import { useState } from "react";
import { legacy_createStore } from "redux";

const App = () => {
  const reducer = (state = 0) => {
    return state;
  };

  const store = legacy_createStore(reducer);

  console.log(store.getState());

  // const [count, setCount] = useState<number>(0);
  // const add = () => {
  //   setCount(count + 1);
  // };
  // const minus = () => {
  //   setCount(count - 1);
  // };

  return (
    <div>
      {/* <button id="minus" onClick={minus}>
        마이너스
      </button>
      <span>{count}</span>
      <button id="plus" onClick={add}>
        플러스
      </button> */}
    </div>
  );
};

export default App;
