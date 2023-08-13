import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';
import { GoalKeeperInterface, PlayerInfoInterface } from '@/index';
import TeamInfoModal from '../modal/modal';
import StatsPlayerBar from '../stats-bar/stats-bar-player';


interface PlayerInfoGen {
    img: string,
    title: string, 
    author: string,
    rows: number,
    cols: number,
    featured: boolean,
}

interface PlayerInfoNestedModalInterfaceGK {
    goals_against: number,
    saves: number,
    savePercentage: number,
    penaltyMinutes: number,
    shotsAgainst: number,
    shotsNotOnGoal: number,
}

interface PlayerInfoNestedModalInterfacePlayer {
    goals: number,
    assists: number,
    totalPoints: number,
    penaltyMinutes: number,
    shotsOnGoal: number,
    shotsWide: number,
    powerPlayGoals: number,
    shortHandedGoals: number,
    faceoffPercentage: number,
}

export interface CombinedProps extends PlayerInfoGen, Partial<PlayerInfoNestedModalInterfaceGK>, Partial<PlayerInfoNestedModalInterfacePlayer> {}

export interface OneProp {
    children: React.ReactNode
    mode: string
    data: CombinedProps
}

export default function PlayerInfoNestedModal(props: OneProp) {
    console.log(props, "check2123")
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);

    return (
        <div style={{width: "100%", height: "100%"}} key={props.data.title}>
            {props.data.title} - {props.data.author}
            <p>Player Statistics</p>
            {props.mode === 'GK' ? 
                <div className='flex flex-col gap-6'>
                    <StatsPlayerBar name="Goals Against" score={props.data.goals_against} />
                    <StatsPlayerBar name="Saves" score={props.data.saves} />
                    <StatsPlayerBar name="Save Percentage" score={props.data.savePercentage} />
                    <StatsPlayerBar name="Penalty Minutes" score={props.data.penaltyMinutes} />
                    <StatsPlayerBar name="Shots Against" score={props.data.shotsAgainst} />
                    <StatsPlayerBar name="Shots Not on Goal" score={props.data.shotsNotOnGoal} />
                </div>
            :
                <div className='flex flex-col gap-6'>
                    <StatsPlayerBar name="Goals" score={props.data.goals} />
                    <StatsPlayerBar name="Assists" score={props.data.assists} />
                    <StatsPlayerBar name="Total Points" score={props.data.totalPoints} />
                    <StatsPlayerBar name="Penalty Minutes" score={props.data.penaltyMinutes} />
                    <StatsPlayerBar name="Shots on Goal" score={props.data.shotsOnGoal} />
                    <StatsPlayerBar name="Shots Wide" score={props.data.shotsWide} />
                    <StatsPlayerBar name="Power Play Goals" score={props.data.powerPlayGoals} />
                    <StatsPlayerBar name="Short Handed Goals" score={props.data.shortHandedGoals} />
                    <StatsPlayerBar name="Faceoff Percentage" score={props.data.faceoffPercentage} />
                </div>
            }
        </div>
    );
}