import { useRef } from "react";
import "./App.css";
import Child1 from "./components/Child1";

function App() {
  const ref = useRef()

  return (
    <>
      <div className="app">
      <button type="button" onClick={() => ref.current.changeState()}>Toggle child</button>
      </div>
      <Child1 ref={ref} />
    </>
  );
}

export default App;
