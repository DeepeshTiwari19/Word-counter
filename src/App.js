
import React, { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  //whether Dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)

  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is ON", "success");
      document.title = "Textutiles-Darkmode"
      // setInterval(() => {
      //   document.title = "Textutiles is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutiles now";
      // }, 1500);

    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is ON", "success");
      document.title = "Textutiles-Lightmode"
    }
  }

  return (
    <>
      {/* <Router> */}
      {/* <Navbar title="Textutiles" about="About Text" />  */}
      <Navbar title="Textutiles" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/about">
              <About />
            </Route> */}

        {/* <Route exact path="/"> */}
        <Textform showAlert={showAlert} heading="Enter text to Analysis" mode={mode} />
        {/* </Route>
          </Switch> */}

        {/* <About /> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
