
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { fetchTodos} from './Redux/slice';
function App() {
  const state=useSelector((state)=>state);
  console.log(state)
  const dispatch=useDispatch( )
  return (
    <div className="App">
      <button onClick={(e)=>dispatch(fetchTodos())} >
        Fetch Data
      </button>
      
    </div>
  );
}

export default App;
