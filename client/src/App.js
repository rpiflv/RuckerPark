import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [teams, setTeams] = useState('');

  const getAllTeams = async () => {
    const teams = await axios.get('/api/hello/')
    // console.log(teams.data.league.standard)
    setTeams(teams.data)
  }

  useEffect(() => {
    getAllTeams()
  }, [])


  return (
    <div className="App">
      {teams}
    </div>
  );
}

export default App;
