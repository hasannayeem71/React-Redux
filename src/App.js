import { Provider } from "react-redux";
import "./App.css";
import Control from "./components/Control/Control";
import Count from "./components/Count/Count";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello react-redux</h1>
        <Count />
        <Control/>
      </div>
    </Provider>
  );
}

export default App;
//1. create a reducer
//2. create a store with the reducer
//3. subcribe to the store
//4. dispatch an action with must have type property
