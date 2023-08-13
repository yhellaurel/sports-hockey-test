import React from "react"
import { HockeyGamesListJSON } from "index";
import { Link } from "react-router-dom";


interface GamesListInterface {
  games_data: HockeyGamesListJSON[]
} 

const GamesList = (props: GamesListInterface) => {
  const {games_data} = props;
  return (
    <ul>
      {games_data.map((item: HockeyGamesListJSON)=> {
        return(
          <li key={`${item.id}_list`}>
            <article>
              <Link to={`${item.id}`}>Game ID: {item.id}</Link>
            </article>
          </li>
        )
      })}
    </ul>
  )
};

export default GamesList;
