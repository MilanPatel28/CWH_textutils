import React,{useState} from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert";
import About from "./About";


const Home = () => {
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
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
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
      {/* <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyze below"
        mode={mode}
      /> */}
      <About />
    </>
  );
};

export default Home;