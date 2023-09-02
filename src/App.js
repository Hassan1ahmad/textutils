import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Contactme from "./components/Contactme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import React,{useState} from 'react'


function App() {
  const [mode, setMode]= useState('light')
  const[alert,setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({
      message :message,
      type :type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  // for full dark mode
  const togglemode=()=>{
    if(mode === 'light'){
      setMode('dark');
      showalert('Dark Mode Enabled Successfully!','success')
    }
    else{
      setMode('light')  
      showalert('Light Mode Enabled Successfully!','success')
    }
  }
  
  return (
    <>
     <Router>
      <Navbar title = "Textutils" mode={mode} togglemode={togglemode} />
     <Alert alert={alert}/>
     
           <Switch>
          <Route path="/Contactme">
          <Contactme/>
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
          <div className="container">
          <TextForm heading = 'Enter Text Below to Analyze' mode={mode} alert={alert} showalert={showalert} />
          </div>
          </Route>
        </Switch>

     
     </Router>
    </>
  );
  
}

export default App;
