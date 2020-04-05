import React, { useState } from 'react';
import './App.css';


function App() {
  const [rangeArr, setRangeArr] = useState([1,2,3]);
  const [result, setResult] = useState(0);


  const addRange = (e = 0) => {
    e = e.target.value;
    console.log('addRange', e);
    //let arr =
      setRangeArr(rangeArr.map((el,i) => Math.abs(e *(i+1) )));
      console.log(rangeArr);

  };

  const chResult = (val) => {
    console.log('chResult');
    setResult(Number(result) + val);
  };

  const resset = () => {
    console.log('resset');
    setRangeArr([1,2,3]);
    setResult(0);
  };


  return (
    <div className="App">
      {rangeArr.reverse().map((el) => <button key={el+Math.random()} onClick={() => chResult(-el)}>{-el}</button>)}

      <input type="number" onChange={addRange}/>

      {
        rangeArr.reverse().map((el) => <button key={el+Math.random()} onClick={() => chResult(el)}>{el}</button>)
      }

      <h2>{result}</h2>

      <button onClick={resset}>Resset</button>

    </div>
  );
}

export default App;
