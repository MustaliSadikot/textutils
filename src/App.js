import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  const [mode, updatemode] = useState(true);
  const [data, updateData] = useState("");

  const changemode = () => {
    updatemode(!mode);
    // console.log(mode);
  };

  const uppercase = () => {
    updateData(data.toUpperCase());
    console.log("UpperCase Click");
  };

  const lowercase = () => {
    updateData(data.toLowerCase());
    console.log("LowerCase Click");
  };

  const clear = () => {
    updateData("");
    console.log("Clear Click");
  };

  const copy = () => {
    navigator.clipboard.writeText(data);
    console.log("Copy Click");
  };

  const capitalize = () => {
    updateData(data.charAt(0).toUpperCase() + data.slice(1));
    console.log("Capitalize Click");
  };

  const handleData = (e) => {
    // console.log(e.target.value);
    updateData(e.target.value);
  };

  document.body.style.backgroundColor = mode
    ? "#f7f7f7"
    : "#36454F"; /*"#292b2c"*/
  return (
    <>
      <Router>
        <Navbar bar={changemode} mode={mode}></Navbar>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/"
            element={
              <div className={`container mt-5 text-${mode ? "dark" : "light"}`}>
                <h1 className="mt-5">Enter Text Here :</h1>
                <textarea
                  className={`form-control
          id=floatingTextarea bg-${mode ? "light" : "dark"} text-${
                    mode ? "dark" : "light"
                  }`}
                  rows={8}
                  value={data}
                  onChange={handleData}
                ></textarea>
                <label htmlFor="floatingTextarea"></label>

                <div className="d-flex flex-wrap">
                  <button
                    type="button"
                    className="btn btn-primary mx-2 mb-3"
                    onClick={uppercase}
                  >
                    Change To UpperCase
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mx-2 mb-3"
                    onClick={lowercase}
                  >
                    Change To LowerCase
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mx-2 mb-3"
                    onClick={clear}
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mx-2 mb-3"
                    onClick={copy}
                  >
                    Copy
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary mx-2 mb-3"
                    onClick={capitalize}
                  >
                    Capitalize
                  </button>
                </div>

                <h2 className="mt-4">Your Text Summary :</h2>
                <h6 className="mt-3">{data.split(" ").length} Words , {data.length} Characters</h6>
                <h6 className="mt-2">{0.008 * data.split(" ").length} Minute To Read</h6>
                <h2 className="mt-3">Preview :-</h2>
                <p style={{ lineBreak: "anywhere" }}>{data}</p>
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
