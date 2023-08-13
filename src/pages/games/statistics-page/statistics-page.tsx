import { useEffect, useState } from "react"
import { HockeyGamesV1 } from "./../../../db/index"
import { HockeyGamesListJSON } from "@/index";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import StatsBar from "./stats-bar/stats-bar-overall";
import { TeamStats } from "@/index";
import TeamInfoModal from "./modal/modal";
import TitlebarImageList from "./image-list/image-list";


export const enum ColorPallette{
  "font_color" = "rgb(120,51,128)",
  "dark_color" = "rgb(90,33,97)",
  "light_color" = "rgb(162,116,168)",
  "gray_color" = "rgb(205,205,205)",
}

interface StatisticsPageInterface {
    gameId: number,
}

const StatisticsPage = (props: StatisticsPageInterface) => {
    const [selectedGame, setSelectedGame] = useState<string>("gameRecap");
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [teamView, setTeamView] = useState<string>("");
    const handleGameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedGame(event.target.value);
    };
  
    const { gameId } = props;
    const [currGamesData, setCurrGamesData] = useState<HockeyGamesListJSON[]>([]);
    useEffect(()=> {
        if(gameId && HockeyGamesV1){
            const newData = HockeyGamesV1.filter((item: HockeyGamesListJSON)=> item.id === gameId)
            setCurrGamesData(newData);
        }
    }, [gameId])
  return (
    <div key={`${gameId}_statistics`}>
      {currGamesData.map((item: HockeyGamesListJSON)=> {
        console.log(item, "keme plays")
        const HomeTeam: TeamStats = {
            possession: 41.7,
            shots: 18,
            passes: 343,
            corner: 5,
            crosses: 16,
            tackles: 13,
            blocks: 5,
            clearance: 14,
            fouls: 6,
            offsides: 2,
            gameRecap: {
              goals: item.recaps.gameRecap.homeSOG ?? 0,
              shotsOnGoal: item.recaps.gameRecap.homeSOG ?? 0,
              penaltyMinutes: item.recaps.gameRecap.homePIM ?? 0,
              faceOffsWon: item.recaps.gameRecap.homeFOW ?? 0,
              powerPlayGoals: item.recaps.gameRecap.homePPG ?? 0,
              penaltyKillingGoals: item.recaps.gameRecap.homeSHG ?? 0,
              numberOfPowerPlayGoals: item.recaps.gameRecap.homeNumPP ?? 0,
              numberOfPenaltyKills: item.recaps.gameRecap.homeNumSH ?? 0,
            },
            0: {
              goals: item.recaps[0].homeSOG ?? 0,
              shotsOnGoal: item.recaps[0].homeSOG ?? 0,
              penaltyMinutes: item.recaps[0].homePIM ?? 0,
              faceOffsWon: item.recaps[0].homeFOW ?? 0,
              powerPlayGoals: item.recaps[0].homePPG ?? 0,
              penaltyKillingGoals: item.recaps[0].homeSHG ?? 0,
              numberOfPowerPlayGoals: item.recaps[0].homeNumPP ?? 0,
              numberOfPenaltyKills: item.recaps[0].homeNumSH ?? 0,
            },
            1: {
              goals: item.recaps[1].homeSOG ?? 0,
              shotsOnGoal: item.recaps[1].homeSOG ?? 0,
              penaltyMinutes: item.recaps[1].homePIM ?? 0,
              faceOffsWon: item.recaps[1].homeFOW ?? 0,
              powerPlayGoals: item.recaps[1].homePPG ?? 0,
              penaltyKillingGoals: item.recaps[1].homeSHG ?? 0,
              numberOfPowerPlayGoals: item.recaps[1].homeNumPP ?? 0,
              numberOfPenaltyKills: item.recaps[1].homeNumSH ?? 0,
            },
            2: {
              goals: item.recaps[2].homeSOG ?? 0,
              shotsOnGoal: item.recaps[2].homeSOG ?? 0,
              penaltyMinutes: item.recaps[2].homePIM ?? 0,
              faceOffsWon: item.recaps[2].homeFOW ?? 0,
              powerPlayGoals: item.recaps[2].homePPG ?? 0,
              penaltyKillingGoals: item.recaps[2].homeSHG ?? 0,
              numberOfPowerPlayGoals: item.recaps[2].homeNumPP ?? 0,
              numberOfPenaltyKills: item.recaps[2].homeNumSH ?? 0,
            },
            3: {
              goals: item.recaps[3]?.homeSOG ?? 0,
              shotsOnGoal: item.recaps[3]?.homeSOG ?? 0,
              penaltyMinutes: item.recaps[3]?.homePIM ?? 0,
              faceOffsWon: item.recaps[3]?.homeFOW ?? 0,
              powerPlayGoals: item.recaps[3]?.homePPG ?? 0,
              penaltyKillingGoals: item.recaps[3]?.homeSHG ?? 0,
              numberOfPowerPlayGoals: item.recaps[3]?.homeNumPP ?? 0,
              numberOfPenaltyKills: item.recaps[3]?.homeNumSH ?? 0,
            },
        }
        const AwayTeam: TeamStats= {
            possession: 58.3,
            shots: 18,
            passes: 480,
            corner: 11,
            crosses: 29,
            tackles: 19,
            blocks: 3,
            clearance: 13,
            fouls: 19,
            offsides: 1,
            gameRecap: {
              goals: item.recaps.gameRecap.awaySOG ?? 0,
              shotsOnGoal: item.recaps.gameRecap.awaySOG ?? 0,
              penaltyMinutes: item.recaps.gameRecap.awayPIM ?? 0,
              faceOffsWon: item.recaps.gameRecap.awayFOW ?? 0,
              powerPlayGoals: item.recaps.gameRecap.awayPPG ?? 0,
              penaltyKillingGoals: item.recaps.gameRecap.awaySHG ?? 0,
              numberOfPowerPlayGoals: item.recaps.gameRecap.awayNumPP ?? 0,
              numberOfPenaltyKills: item.recaps.gameRecap.awayNumSH ?? 0,
            },
            0: {
              goals: item.recaps[0].awaySOG ?? 0,
              shotsOnGoal: item.recaps[0].awaySOG ?? 0,
              penaltyMinutes: item.recaps[0].awayPIM ?? 0,
              faceOffsWon: item.recaps[0].awayFOW ?? 0,
              powerPlayGoals: item.recaps[0].awayPPG ?? 0,
              penaltyKillingGoals: item.recaps[0].awaySHG ?? 0,
              numberOfPowerPlayGoals: item.recaps[0].awayNumPP ?? 0,
              numberOfPenaltyKills: item.recaps[0].awayNumSH ?? 0,
            },
            1: {
              goals: item.recaps[1].awaySOG ?? 0,
              shotsOnGoal: item.recaps[1].awaySOG ?? 0,
              penaltyMinutes: item.recaps[1].awayPIM ?? 0,
              faceOffsWon: item.recaps[1].awayFOW ?? 0,
              powerPlayGoals: item.recaps[1].awayPPG ?? 0,
              penaltyKillingGoals: item.recaps[1].awaySHG ?? 0,
              numberOfPowerPlayGoals: item.recaps[1].awayNumPP ?? 0,
              numberOfPenaltyKills: item.recaps[1].awayNumSH ?? 0,
            },
            2: {
              goals: item.recaps[2].awaySOG ?? 0,
              shotsOnGoal: item.recaps[2].awaySOG ?? 0,
              penaltyMinutes: item.recaps[2].awayPIM ?? 0,
              faceOffsWon: item.recaps[2].awayFOW ?? 0,
              powerPlayGoals: item.recaps[2].awayPPG ?? 0,
              penaltyKillingGoals: item.recaps[2].awaySHG ?? 0,
              numberOfPowerPlayGoals: item.recaps[2].awayNumPP ?? 0,
              numberOfPenaltyKills: item.recaps[2].awayNumSH ?? 0,
            },
            3: {
              goals: item.recaps[3]?.awaySOG ?? 0,
              shotsOnGoal: item.recaps[3]?.awaySOG ?? 0,
              penaltyMinutes: item.recaps[3]?.awayPIM ?? 0,
              faceOffsWon: item.recaps[3]?.awayFOW ?? 0,
              powerPlayGoals: item.recaps[3]?.awayPPG ?? 0,
              penaltyKillingGoals: item.recaps[3]?.awaySHG ?? 0,
              numberOfPowerPlayGoals: item.recaps[3]?.awayNumPP ?? 0,
              numberOfPenaltyKills: item.recaps[3]?.awayNumSH ?? 0,
            },
        }
        const team1Name = Object.keys(item.playersByTeam)[0];
        const team1PlayersGK = (Object.values(item.playersByTeam)[0]).GK;
        const team1PlayersPlayers = (Object.values(item.playersByTeam)[0]).players;
        const team2Name = Object.keys(item.playersByTeam)[1];
        const team2PlayersGK = (Object.values(item.playersByTeam)[1]).GK;
        const team2PlayersPlayers = (Object.values(item.playersByTeam)[1]).players;
        return (
            <div className="flex flex-col" key={`${item.id}.returned`}>
                <article className="flex justify-center gap-6 relative p-12" alt-name="header-logos">
                    <TeamInfoModal open={modalOpen} setOpen={setModalOpen}>
                      <TitlebarImageList teamGoalKeeper={teamView==="1" ? team1PlayersGK : team2PlayersGK} teamPlayers={teamView === '1' ? team1PlayersPlayers : team2PlayersPlayers } teamName={teamView === "1" ?  team1Name : team2Name}>
                        {teamView === '1' ? <img key={'team-logo-child1'} src={`/img/${Object.keys(item.playersByTeam)[0]}-120.png`}></img> : <img key={'team-logo-child2'} src={`/img/${Object.keys(item.playersByTeam)[1]}-120.png`}></img>}
                      </TitlebarImageList>
                    </TeamInfoModal>
                    <div className="absolute" style={{top: 0, left: 0, color: ColorPallette.font_color}}><Link to="/">Go Back</Link></div>
                    <div className="absolute" style={{top: 0, right: 0, color: ColorPallette.font_color}}>
                      <select name="gameRecap" id="gameRecap" value={selectedGame} onChange={handleGameChange}>
                        <option value="gameRecap">Total</option>
                        <option value="0">Game 1</option>
                        <option value="1">Game 2</option>
                        <option value="2">Game 3</option>
                        {item.recaps[3]?<option value="3">Game 4</option> : null}
                      </select>

                    </div>
                    <div 
                      className="flex" 
                      alt-name="home-team-logo" 
                      onClick={()=> {
                      setTeamView("1")
                      setModalOpen((prevState)=> !prevState)
                      }}
                    >
                      <img src={`/img/${Object.keys(item.playersByTeam)[0]}-120.png`}></img>
                    </div>
                    <div className="flex justify-center flex-col font-bold text-xs" alt-name="vs-text">
                      VS
                    </div>
                    <div 
                      className="" 
                      alt-name="away-team-logo"
                      onClick={()=> {
                        setTeamView("2")
                        setModalOpen((prevState)=> !prevState)
                        }}
                    >
                      <img src={`/img/${Object.keys(item.playersByTeam)[1]}-120.png`}></img>
                    </div>
                </article>
                <StatsBar mode="score" name="Goals Scored" homeScore={HomeTeam[selectedGame]?.goals} awayScore={AwayTeam[selectedGame]?.goals}/>
                <StatsBar mode="score" name="Shots on Goal" homeScore={HomeTeam[selectedGame]?.shotsOnGoal} awayScore={AwayTeam[selectedGame]?.shotsOnGoal}/>
                <StatsBar mode="score" name="Penaly Minutes" homeScore={HomeTeam[selectedGame]?.penaltyMinutes} awayScore={AwayTeam[selectedGame]?.penaltyMinutes}/>
                <StatsBar mode="score" name="Face Offs Won" homeScore={HomeTeam[selectedGame]?.faceOffsWon} awayScore={AwayTeam[selectedGame]?.faceOffsWon}/>
                <StatsBar mode="score" name="Power Play Goals" homeScore={HomeTeam[selectedGame]?.powerPlayGoals} awayScore={AwayTeam[selectedGame]?.powerPlayGoals}/>
                <StatsBar mode="score" name="Penalty Killing Goals" homeScore={HomeTeam[selectedGame]?.penaltyKillingGoals} awayScore={AwayTeam[selectedGame]?.penaltyKillingGoals}/>
                <StatsBar mode="score" name="Number of Power Plays" homeScore={HomeTeam[selectedGame]?.powerPlayGoals} awayScore={AwayTeam[selectedGame]?.powerPlayGoals}/>
                <StatsBar mode="score" name="Number of Penalty Kills" homeScore={HomeTeam[selectedGame]?.numberOfPenaltyKills} awayScore={AwayTeam[selectedGame]?.numberOfPenaltyKills}/>
            </div>
        )
      })}
    </div>
  )
};

export default StatisticsPage;
