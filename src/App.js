import { useState, useEffect } from "react";
import img1 from "../src/1.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");

    // If dark mode is enabled - adds classes to update dark-mode styling.
    // Else, removes and styling is as normal.
    if (darkMode === true) {
      body.classList.add("dark-mode");
      toggle.classList.add("toggle-active");
    } else {
      body.classList.remove("dark-mode");
      toggle.classList.remove("toggle-active");
    }
  }, [darkMode]);

  const [calculation, setCalculation] = useState("");
  const [output, setOutput] = useState("0");
  const actions = ["/", "*", "+", "-", "."];
  const updateCalculation = (value) => {
    if (
      actions.includes(value) & (calculation === "") ||
      actions.includes(value) & actions.includes(calculation.slice(-1))
    ) {
      return;
    }


    setCalculation(calculation + value);

    if (!actions.includes(value)) {
      setOutput(eval(calculation + value).toString());
    }
  };
  // <button onClick={()=>updateCalculation(i.toString())} key={i}>{i}</button>

  const calculate = () => {
	if(calculation ==='' || calculation ==='0'){
		return
	}
    setCalculation(eval(calculation).toString());
  };
  const clear = () => {
    if (calculation === "") {
      return;
    }
    const value = calculation.slice(0, -1);
    setCalculation(value);
	if(value){
		if (!actions.includes(calculation.slice(0, -1).at(-1))) {
			setOutput(eval( value).toString());
		  }
	  }else{
		setOutput('0')
	  };
	}
	

  const DELETECALC = () => {
    setCalculation("");
    setOutput("0");
  };

  return (
    <div className={!darkMode ? "App light-App" : "App dark-App"}>
      <div
        className={
          !darkMode
            ? "calculator light-calculator"
            : "calculator dark-calculator"
        }
      >
        <div className="result">
          <div
            id="toggle"
            onClick={() =>
              darkMode === false ? setDarkMode(true) : setDarkMode(false)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#dadada"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={
                darkMode
                  ? "feather feather-moon svg-calc1 opacity-calc0"
                  : "feather feather-moon svg-calc1 opacity-calc1"
              }
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#212529"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={
                darkMode
                  ? "feather feather-sun svg-calc2 opacity-calc1"
                  : "feather feather-moon svg-calc2 opacity-calc0"
              }
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <div className="toggle-inner" />
          </div>
          <span>{calculation || 0}</span>
          <br />
          <p className={darkMode ? "white-text-calc" : "black-text-calc"}>
            {output ? output : ""}
          </p>
        </div>

        <div className="digits"></div>

        <section className="container-btn-calculator">
          <button
            className={!darkMode ? "lightYellow-calc" : "gray-calc"}
            onClick={DELETECALC}
          >
            AC
          </button>
          <button
            className={!darkMode ? "lightYellow-calc" : "gray-calc"}
            //  onClick={() => negativeSign}
          >
            +/-
          </button>
          <button
            className={!darkMode ? "lightYellow-calc" : "gray-calc"}
            onClick={() => updateCalculation("/")}
          >
            /
          </button>
          <button className="yellow-calc" onClick={clear}>
            {" "}
            <img width={28} height={28} src={img1} alt="00"/>
          </button>
          <button
            className={darkMode ? "dark-main-btn" : "light-main-btn"}
            onClick={() => updateCalculation("7")}
          >
            7
          </button>
          <button
            className={darkMode ? "dark-main-btn" : "light-main-btn"}
            onClick={() => updateCalculation("8")}
          >
            8
          </button>
          <button
            className={darkMode ? "dark-main-btn" : "light-main-btn"}
            onClick={() => updateCalculation("9")}
          >
            9
          </button>
          <button
            className="yellow-calc"
            onClick={() => updateCalculation("*")}
          >
            x
          </button>

          <button
            className={darkMode ? "dark-main-btn" : "light-main-btn"}
            onClick={() => updateCalculation("4")}
          >
            4
          </button>
          <button
            className={darkMode ? "dark-main-btn" : "light-main-btn"}
            onClick={() => updateCalculation("5")}
          >
            5
          </button>
          <button
            className={darkMode ? "dark-main-btn" : "light-main-btn"}
            onClick={() => updateCalculation("6")}
          >
            6
          </button>
          <button
            className="yellow-calc"
            onClick={() => updateCalculation("-")}
          >
            -
          </button>
          <button
            className={darkMode ? "dark-main-btn" : "light-main-btn"}
            onClick={() => updateCalculation("1")}
          >
            1
          </button>
          <button
            className={darkMode ? "dark-main-btn" : "light-main-btn"}
            onClick={() => updateCalculation("2")}
          >
            2
          </button>
          <button
            className={darkMode ? "dark-main-btn" : "light-main-btn"}
            onClick={() => updateCalculation("3")}
          >
            3
          </button>
          <button
            className="yellow-calc"
            onClick={() => updateCalculation("+")}
          >
            +
          </button>

          <button
            className={
              darkMode
                ? "dark-main-btn zero-calculaor"
                : "light-main-btn zero-calculaor"
            }
            onClick={() => updateCalculation("0")}
          >
            0
          </button>
          <button
            className={darkMode ? "dark-main-btn" : "light-main-btn"}
            onClick={() => updateCalculation(".")}
          >
            .
          </button>

          <button className="yellow-calc" onClick={calculate}>
            =
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
