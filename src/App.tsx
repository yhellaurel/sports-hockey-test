import { useState, useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import HockeyGamesV1 from './db/hockeygames.json';
import GamesList from './../src/pages/games/games-list';
import Typography from '@mui/material/Typography';

function App() {
  const [currGamesData, setCurrGamesData] = useState<any[]>([]);
  useEffect(()=> {
      setCurrGamesData(HockeyGamesV1)
  }, [HockeyGamesV1])

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold underline'>Welcome to the Latest Hockey Scores</h1>
        <Typography>View The Games</Typography>
        <GamesList games_data={currGamesData}/>
      </div>
    </>
  )
}

export default App
