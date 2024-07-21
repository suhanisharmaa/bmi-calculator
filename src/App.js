import { useMemo, useState } from 'react';
import './App.css';


function App() {

  const [weight,setWeight] = useState(70);
  const [height,setHeight] = useState(160);

  function handleWeightchange(event){
     setWeight(event.target.value);
  }
  function handleHeightchange(event){
    setHeight(event.target.value);
  }

  const bmi = useMemo(()=>{
    const heightinmeters = height/100
    return (weight/(heightinmeters*heightinmeters)).toFixed(2);;
  },[height,weight])

  return (
    <div className="bmi-calculator">
      <div className="bmi">
        <h1>BMI CALCULATOR</h1>

        <div className="inputsec">
          <p className="weight">Weight:{weight} kg</p>
          <input type="range" step='1' min='40' max='220' className="input" onChange={handleWeightchange}/>
        </div>

        <div className="inputsec">
          <p className="height">Height:{height} cm</p>
          <input type="range" step='1' min='80' max='300' className="input" onChange={handleHeightchange}/>
        </div>
        
        <div className="output">
          <p className="outputsec">Your BMI is</p>
          <p className='out'>{bmi}</p>
        </div>

      </div>
    </div>
  );
}

export default App;
