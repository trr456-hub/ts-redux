import { createStore } from "redux";

const App = () => {
  const ADD = "ADD";
  const MINUS = "MINUS";
  const counterModifier = (state = 0, action: { type: string }) => {
    switch (action.type) {
      case ADD:
        return state + 1;
      case MINUS:
        return state - 1;
      default:
        return state;
    }
  };

  const store = createStore(counterModifier);

  const change = () => {
    const ccou = document.getElementById("count") as HTMLElement;
    ccou.innerText = String(store.getState());
  };

  store.subscribe(change);

  const handleAdd = () => {
    store.dispatch({ type: ADD });
  };
  const handleMinus = () => {
    store.dispatch({ type: MINUS });
  };

  // add.addEventListener("click", () => handleAdd);
  // minus.addEventListener("click", () => handleMinus);

  // const [count, setCount] = useState<number>(0);
  // const add = () => {
  //   setCount(count + 1);
  // };
  // const minus = () => {
  //   setCount(count - 1);
  // };

  return (
    <div>
      <button id="minus" onClick={handleMinus}>
        마이너스
      </button>
      <span id="count"></span>
      <button id="plus" onClick={handleAdd}>
        플러스
      </button>
    </div>
  );
};

export default App;
