import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const url = "http://localhost:3004/";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
     

  }


  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div className="App">
      <h1> grpahql </h1>
      <h2>{data}  </h2>

    </div>
  );
}

export default App;
