import "./App.css";
import React, { useState } from "react";
import { sendData, getResult } from "./fetchCalls.js";

function App() {
  //set the state hooks of the persisting data
  const [numbers, setNumbers] = useState([]);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("0");

  const handleButtonClick = (event) => {
    //If an operator is clicked; not including C (see clear function below)
    if (isNaN(event.target.value)) {
      setOperator(event.target.value);
      console.log(operator);
    }

    //If numbers are clicked:
    if (Number.isInteger(parseInt(event.target.value))) {
      if (numbers.length === 0) {
        setNumbers([parseInt(event.target.value)]);

        //if there are under 2 numbers currently stored
      } else if (numbers.length < 2) {
        setNumbers(numbers.concat(parseInt(event.target.value)));
        console.log(typeof parseInt(event.target.value));
      }
    }
  };

  //if C is pressed, the stored state is wiped
  const clear = () => {
    setNumbers([]);
    setOperator("");
    setResult("0");
  };

  const calculate = async () => {
    //Check data being sent
    console.log("final numbers were, ", numbers);

    //Send state data to backend; returns a result which is stored in the result state
    await sendData(numbers, operator).then(
      await getResult().then((data) => {
        if (Number.isInteger(data)) {
          setResult(data);
          console.log("**THE RESULT TO BE DISPLAYED IS: ", result);
        } else {
          setResult("Undefined")
          console.log("Sorry we cant show this calculation :(")
        }
      })
    );
  };

  //Table with a series of buttons and a display screen
  return (
    <>
      <h1>Single Digit Calculator</h1>
      <p className="header">by Jan Bock</p>
      <div className="App">
        <table className="container" border="1">
          <tr>
            <td colSpan="3">
              <div id="result">{result}</div>
            </td>
            <td>
              <input
                className="btns"
                id="clear"
                type="button"
                value="C"
                onClick={clear}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                className="btns"
                type="button"
                value="1"
                onClick={handleButtonClick}
              />
            </td>
            <td>
              <input
                className="btns"
                type="button"
                value="2"
                onClick={handleButtonClick}
              />{" "}
            </td>
            <td>
              <input
                className="btns"
                type="button"
                value="3"
                onClick={handleButtonClick}
              />{" "}
            </td>
            <td>
              <input
                className="btns"
                type="button"
                value="/"
                onClick={handleButtonClick}
              />{" "}
            </td>
          </tr>
          <tr>
            <td>
              <input
                className="btns"
                type="button"
                value="4"
                onClick={handleButtonClick}
              />{" "}
            </td>
            <td>
              <input
                className="btns"
                type="button"
                value="5"
                onClick={handleButtonClick}
              />{" "}
            </td>
            <td>
              <input
                className="btns"
                type="button"
                value="6"
                onClick={handleButtonClick}
              />{" "}
            </td>
            <td>
              <input
                className="btns"
                type="button"
                value="-"
                onClick={handleButtonClick}
              />{" "}
            </td>
          </tr>
          <tr>
            <td>
              <input
                className="btns"
                type="button"
                value="7"
                onClick={handleButtonClick}
              />{" "}
            </td>
            <td>
              <input
                className="btns"
                type="button"
                value="8"
                onClick={handleButtonClick}
              />{" "}
            </td>
            <td>
              <input
                className="btns"
                type="button"
                value="9"
                onClick={handleButtonClick}
              />{" "}
            </td>
            <td>
              <input
                className="btns"
                type="button"
                value="+"
                onClick={handleButtonClick}
              />{" "}
            </td>
          </tr>
          <tr>
            <td>
              {/* <input className="btns" type="button" value="" onClick={handleButtonClick}/>{" "} */}
              <img
                id="logo"
                src={require("./accenture_logo.png")}
                alt="accenture logo"
              ></img>
            </td>
            <td>
              <input
                className="btns"
                type="button"
                value="0"
                onClick={handleButtonClick}
              />{" "}
            </td>
            <td>
              <input
                className="btns"
                type="button"
                value="="
                onClick={calculate}
              />{" "}
            </td>
            <td>
              <input
                className="btns"
                type="button"
                value="*"
                onClick={handleButtonClick}
              />{" "}
            </td>
          </tr>
        </table>
        <div className="side-content">
          <h4>Hi!</h4>
          <p>Welcome to this simple single digit calculator.</p>
          <p>The core technologies this was built with are React.js, Express.js, Node.js.</p>
          <p className="p-break">I recently completed School of Tech and am searching for junior FE/FS roles.</p>
          <p>I'm hoping to find a role that will enable me to learn new technologies</p>
          <p>while also challenging me and putting myself outside of my comfort zone.</p>
        </div>
      </div>
    </>
  );
}

export default App;
