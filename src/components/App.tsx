import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

const App = () => {
  // const ADD = "ADD";
  // const MINUS = "MINUS";
  // const counterModifier = (state = 0, action: { type: string }) => {
  //   switch (action.type) {
  //     case ADD:
  //       return state + 1;
  //     case MINUS:
  //       return state - 1;
  //     default:
  //       return state;
  //   }
  // };

  // const store = createStore(counterModifier);

  // const change = () => {
  //   const ccou = document.getElementById("count") as HTMLElement;
  //   ccou.innerText = String(store.getState());
  // };

  // store.subscribe(change);

  // const handleAdd = () => {
  //   store.dispatch({ type: ADD });
  // };
  // const handleMinus = () => {
  //   store.dispatch({ type: MINUS });
  // };

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
