import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const upload = () => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:3000/upload', formData)
      .then(res => {
        console.log(res.data); 
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <input type="file" onChange={handleFileChange} />
      <button onClick={upload}>Submit</button>
    </div>
  );
}

export default App;
