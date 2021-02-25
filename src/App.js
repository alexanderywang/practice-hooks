import React from "react";
import "./App.css";
import UseRefHook from "./components/UseRefHook";
import UseStateHook from "./components/UseStateHook";
import UseReducerHook from "./components/UseReducerHook";
import UseEffectHook from "./components/UseEffectHook";
import UseCallbackHook from "./components/UseCallbackHook";
import UseMemoHook from "./components/UseMemoHook";
import UseContextHook from "./components/UseContextHook";
import CustomHook from "./components/CustomHook";

const App = () => {
  return (
    <div className="App">
      <h3> hooks practice </h3>
      <div>
        <UseRefHook />
      </div>
      <div>
        <UseStateHook />
      </div>
      <div>
        <UseReducerHook />
      </div>
      <div>
        <UseEffectHook />
      </div>
      <div>
        <UseCallbackHook />
      </div>
      <div>
        <UseMemoHook />
      </div>
      <div>
        <UseContextHook />
      </div>
      <div>
        <CustomHook />
      </div>
    </div>
  );
};

export default App;
