import React, { useState } from 'react';
import './App.css';


function App() {
  const [rangeArr, setRangeArr] = useState([1, 2, 3]);
  const [result, setResult] = useState(0);


  const addRange = (e = 0) => {
    e = e.target.value;
    console.log('addRange', e);

    // limit input
    if (e.length > 6) {
      e = e.slice(0, 6);
      document.getElementsByClassName('input-form')[0].value = e.slice(0, 6);
      setRangeArr(rangeArr.map((el, i) => Math.abs(e * (i + 1))));
    }
    //----
    if (e == 0) {
      e = 1;
      document.getElementsByClassName('input-form')[0].value = '';
      setRangeArr(rangeArr.map((el, i) => Math.abs(e * (i + 1))));
    }
    else {
      setRangeArr(rangeArr.map((el, i) => Math.abs(e * (i + 1))));
    }

  };

  const chResult = (val) => {
    setResult(Number(result) + val);
  };

  const resset = () => {
    document.getElementsByClassName('input-form')[0].value = '';
    setRangeArr([1, 2, 3]);
    setResult(0);

  };


  return (
    <div className="App">
      {rangeArr.reverse().map((el) => <button className='btn-count' key={el + Math.random()}
                                              onClick={() => chResult(-el)}>{-el}</button>)}

      <input className='input-form' type="number" onChange={addRange}/>

      {
        rangeArr.reverse().map((el) => <button className='btn-count' key={el + Math.random()}
                                               onClick={() => chResult(el)}>{el}</button>)
      }

      <h2>{result}</h2>

      <button className='btn-count' onClick={resset}>Resset</button>

    </div>
  );
}

export default App;
