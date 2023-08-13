import React from "react"
import { ColorPallette } from "../statistics-page";

interface StatsBarInterface {
    mode: string,
    name: string,
    homeScore: number,
    awayScore: number,
}

const StatsBar = (props: StatsBarInterface) => {
    
    const { mode, name, homeScore, awayScore} = props;
    const totalScore = homeScore + awayScore; 
    const percentageScore = (score: number, from?: string) => {
        if (mode === "percent"){
            return score
        } else {
            const totaler = from === 'away'? homeScore : awayScore
            console.log(((score / (score + totaler)) * 100), "percent")
            return ((score / (score + totaler))* 100).toFixed(2)   
        }
    }

    return (
        <div>
            <div className="flex">
                <header className="flex justify-end" style={{ width: "20%" }}>
                <div alt-name="Home-Score" className="font-bold text-md" style={{color: ColorPallette.font_color}}>
                    {homeScore}{mode === 'percent' ? '%' : ''}
                </div>
                </header>
                <figure className="flex flex-col items-end justify-center mx-3" style={{width: "60%"}}>
                <div className="flex" style={{height: "10px" , width: "100%"}}>
                    <div style={{background: ColorPallette.gray_color, width: "50%"}} className="flex justify-end">
                        <div className="w-25" style={{height: "10px", background: ColorPallette.light_color, width: `${percentageScore(homeScore, "home")}%`}}></div>
                    </div>
                    <div style={{background: ColorPallette.gray_color, width: "50%"}} className="flex justify-start">
                        <div className="w-25" style={{height: "10px", background: ColorPallette.dark_color, width: `${percentageScore(awayScore, "away")}%`}}></div>
                    </div>
                </div>
                </figure>
                <header className="flex justify-start" style={{width: "20%"}}>
                <div alt-name="Away-Score" className="font-bold" style={{color: ColorPallette.font_color, width: "20%"}}>
                    {awayScore}{mode === 'percent' ? '%' : ''}
                </div>
                </header>
            </div>
            <div className="text-xs font-medium opacity-80" alt-name="score-name">
                {name ?? 'Possession'}
            </div>
        </div>

    )
};

export default StatsBar;
