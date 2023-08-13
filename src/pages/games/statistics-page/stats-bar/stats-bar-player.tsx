import React from "react"
import { ColorPallette } from "../statistics-page";

interface StatsBarPlayerInterface {
    name: string,
    score: number | undefined,
}

const StatsPlayerBar = (props: StatsBarPlayerInterface) => {
    
    const { name, score} = props;
    const scorePercentage = (score as number % 1 === 0) ? score as number: score as number * 100;
    return (
        <div>
            <div className="flex">
                <header className="flex justify-start" style={{ width: "20%" }}>
                <div alt-name="Home-Score" className="font-bold text-md" style={{color: ColorPallette.font_color}}>
                    {scorePercentage.toFixed(0)}
                </div>
                </header>
                <figure className="flex flex-col items-end justify-center mx-3" style={{width: "80%"}}>
                    <div className="flex" style={{height: "10px" , width: "100%"}}>
                        <div style={{background: ColorPallette.gray_color, width: "100%"}} className="flex justify-start">
                            <div className="w-25" style={{height: "10px", background: ColorPallette.light_color, width: `${scorePercentage?.toFixed(0)}%`}}></div>
                        </div>
                    </div>
                </figure>
            </div>
            <div className="text-xs font-medium opacity-80 flex justify-end pr-2" alt-name="score-name">
                {name ?? 'Possession'}
            </div>
        </div>

    )
};

export default StatsPlayerBar;
