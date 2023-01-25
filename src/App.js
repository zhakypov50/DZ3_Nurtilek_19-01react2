import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import MainPage from "./pages/mainPage/MainPage";
import {increment, decrement} from "./redux/something";
import CounterReducer from "./redux/CounterReducer";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
      <div className="App">
          <MainPage/>
              <CounterReducer/>
                  <h3>Counter</h3>
                  <h3>{counter}</h3>
                  <button onClick={() => dispatch(increment())}>Increase</button>
                  <button onClick={() => dispatch(decrement())}>Decrease</button>
      </div>
  );
}

export default App;