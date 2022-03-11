import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import React, {useState} from 'react'
import Alert from './components/Alert';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(type,message)=>{
    setalert({
      mssg:message,
      type:type
    });

    setTimeout(() => {
      setalert(null)
    }, 1000);
  }

const toggle=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#00354d';
      showAlert('success','Dark Mode Enabled');

    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert('success','light Mode Enabled');
    }
  }

  return (
     <>
      <Navbar title="Textutils" about="About" mode={mode} toggle={toggle} theme={mode==='dark'?'light':'dark'}/>
      <Alert alert={alert} />
      
      <div className="container" >
      {/* <TextForm mode={mode} heading="Enter the text to analyze" showAlert={showAlert} /> */}
      <Routes>
         
            
          <Route   path="/" element={ <TextForm mode={mode} heading="Enter the text to analyze" showAlert={showAlert} />}/>
          <Route   path="about" element={<About/>} />
           
         
      </Routes>
        
        
       
      </div>
     
     

     </>
  );
}

export default App;
