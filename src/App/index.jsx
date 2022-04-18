import { useState, useEffect} from 'react'; //hooks
import '../App.css';
import ParentButton from './component/parent_button';
import { useSelector } from "react-redux";

function App() {
  const {value, value2} = useSelector((status) => status );

  useEffect(() => {
    console.log('ini lifecycle react');
  }, [])


  return (
    <div className="App">
      <ParentButton />
      <h5>{value}</h5>
      <h5>{value2}</h5>
    </div>
  );
}

export default App;