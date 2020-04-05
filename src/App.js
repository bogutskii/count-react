import React, { useState } from 'react';
import './App.css';


function App() {
  const [rangeArr, setRangeArr] = useState([]);
  const [result, setResult] = useState(0)


  const addRange = (e) => {
    // setResult(Number(result) + (isNaN(Number(e.target.value)) ? 0 : Number(e.target.value) ))
    setRangeArr(isNaN(Number(e.target.value) ? 0 : Number(e.target.value)))
  };

  const chResult = (val) => {
    setResult(Number(result) + val);
    fillArr(val);
    return result;
  }

  const resset = () => {
    setRangeArr(0)
    setResult(0)
  }
  const fillArr = (val) => {
    let [arrPos, arrNeg] = [[], []];
    let temp = 0
    for (let i = 0; i < 3; i++) {
      arrPos.push(temp += val)
      arrNeg.push(temp -= val)
    }
    console.log([arrPos, arrNeg]);
    return [arrPos, arrNeg]
  }

  return (
    <div className="App">

      <input type="text" onChange={addRange}/>

      {

        // fillArr.map(el => <button key={el} onClick={() => chResult(el)}>{el}</button>)


      }

      <h2>{result}</h2>

      <button onClick={resset}>Resset</button>

    </div>
  );
}

export default App;
