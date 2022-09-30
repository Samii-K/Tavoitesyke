import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(0)
  const [Upper, setUpper] = useState(0)
  const [Lower, setLower] = useState(0)

  function calculate(e){
    e.preventDefault()
    setUpper((220 - age) * 0.85)
    setLower((220 - age) * 0.65)
  }

  return (
    <div id="content">
      <form>
        <h3>Heart rate limits calculator</h3>
          <p>Age</p>
          <input type="number" min="1" max="200" value={age} onChange={e => setAge(e.target.value)}/>
          <p>Heart rate limits</p>
          <output>{Lower.toFixed(0)}<label>-</label>{Upper.toFixed(0)}</output><br/>
          <button type="button" onClick={calculate}>Calculate</button>
      </form> 
    </div>
  );
}
export default App;