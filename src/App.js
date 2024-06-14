// import logo from './logo.svg';
// import './App.css';
// always refer documentation for reference

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";
// import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";

// According to version 6 of react-router-dom
// import { Route, Routes } from "react-router-dom";
// import Home from "./components/Home";

// const App = () => {
//   return (
//     <>
//     <Routes>
//       <Route exact path="/" element={<h1>Welcome To TextUtils</h1>} />
//       <Route
//         exact
//         path="/home"
//         element={<Home/>}
//       />
//       <Route exact path="/about" element={<About/ mode={mode}>} />
//     </Routes>/
//     </>
//   )
// };



function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  
  // setAlert is a function which will be used to change the state of alert
  const [alert, setAlert] = useState(null); // we are making alert an object because we want to display alert with different colors
  
  // showAlert is a function which will be used to display alert
  const showAlert = (message, type) => {
    // As you can see we use setAlert as an object
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Change in the text Enter the text to analyze below"
        mode={mode}
      />
      {/* <About mode={mode}/> */}
    </>
  );
}

export default App;

/*
Javascript Concepts:-
Named Export - named export is used to export multiple things from a file 
eg:- export const name = "Rahul"
Default Export - default export is used to export only one thing from a file
eg:- export default App
*/
