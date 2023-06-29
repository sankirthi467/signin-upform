import React,{useState} from 'react';
import './App.css';
import Signup from './signup';
import Signin from './signin';
function App() {
  const [currentForm,setCurrentForm] = useState('Signup');
  const toggleform =(formName)=>{
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      {
         currentForm === "Signup" ? <Signup onFormSwitch={toggleform}/> : <Signin onFormSwitch={toggleform}/> 
      }
     
    </div>
  );
}

export default App;
