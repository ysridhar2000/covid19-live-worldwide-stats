import { useState, useEffect } from "react";
import Sample from "./components/Sample";
import image from "./image.png";
import './App.css';

function App() {
  const [cases, setCases] = useState('');
  const [recovered, setRecovered] = useState('');
  const [dead, setDead] = useState('');
  const [updated, setUpdate] = useState('');
  const [infected, setInfected] = useState('');
  const [rate, setRate] = useState('');

  useEffect(() => {
    fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats').then((response) => response.json()).then((result) => {
      setCases(result.data.total_cases);
      setRecovered(result.data.recovery_cases);
      setDead(result.data.death_cases);
      setUpdate(result.data.last_update);
      setInfected(result.data.currently_infected);
      setRate(result.data.general_death_rate);
    });
  });


  return (
    <div className="App">
      <img src={image} width="100" height="100" />
      <h1>World :: Covid-19 Stats</h1>
      <div className="actualStuff">
      <div className="card">
          <label style={{color: "blue"}}>Last Updated on</label>
          <p>{updated}</p>
      </div>
        <div className="card">
          <label style={{color: "blue"}}>Total Cases</label>
          <p>{cases}</p>
        </div>
        <div className="card">
          <label style={{color: "blue"}}>Recovered</label>
          <p>{recovered}</p>
        </div>
    </div>




    <div className="App_t">
    <div className="actualStuff">
       <div className="card">
          <label style={{color: "blue"}}>Deaths</label>
          <p>{dead}</p>
        </div>
        
      <div className="card">
          <label style={{color: "blue"}}>Currently infected</label>
          <p>{infected}</p>
      </div>
      <div className="card">
          <label style={{color: "blue"}}>Death Rate</label>
          <p>{rate}</p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;