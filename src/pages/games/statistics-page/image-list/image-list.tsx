import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Button, Typography } from '@mui/material';
import { GoalKeeperInterface, PlayerInfoInterface } from '@/index';
import TeamInfoModal from '../modal/modal';
import StatsPlayerBar from '../stats-bar/stats-bar-player';
import PlayerInfoNestedModal from '../player-info/player-info';
import PlayerInfoModal from '../modal/player-info-modal';
import { CombinedProps } from '../player-info/player-info';
import { OneProp } from '../player-info/player-info';

interface TitlebarImageListInterface {
    children: React.ReactNode
    teamName: string
    teamGoalKeeper: GoalKeeperInterface[];
    teamPlayers: PlayerInfoInterface[];
}


export default function TitlebarImageList(props: TitlebarImageListInterface) {
    const { children, teamName, teamGoalKeeper, teamPlayers} = props;
    const [ modalOpen, setModalOpen ] = React.useState<boolean>(false);
    const [ currData, setCurrData ] = React.useState<CombinedProps>({
        img: '',
        title: '', 
        author: ``,
        rows: 2,
        cols: 2,
        featured: true,
        goals_against: 0,
        saves: 0,
        savePercentage: 0,
        penaltyMinutes: 0,
        shotsAgainst: 0,
        shotsNotOnGoal: 0,
        goals: 0,
        assists: 0,
        totalPoints: 0,
        shotsOnGoal: 0,
        shotsWide: 0,
        powerPlayGoals: 0,
        shortHandedGoals: 0,
        faceoffPercentage: 0,
    });
    const itemData1 = teamGoalKeeper.map((item: GoalKeeperInterface)=> ({
        img: "/img/profile.png",
        title: `${item.firstName} ${item.familyName}`, 
        author: `${item.position} - Goalkeeper`,
        rows: 2,
        cols: 2,
        featured: true,
        goals_against: item.tot_ga ?? 0,
        saves: item.tot_svs ?? 0,
        savePercentage: item.tot_svs_perc ?? 0,
        penaltyMinutes: item.pim ?? 0,
        shotsAgainst: item.tot_soga ?? 0,
        shotsNotOnGoal: item.tot_spga ?? 0,
    }));
    const itemData2 = teamPlayers.map((item: PlayerInfoInterface)=> ({
        img: "/img/profile.png",
        title: `${item.firstName} ${item.familyName}`, 
        author: `${item.position} - Player`,
        rows: 2,
        cols: 2,
        featured: true,
        goals: item.g ?? 0,
        assists: item.a ?? 0,
        totalPoints: item.tp ?? 0,
        penaltyMinutes: item.pim ?? 0,
        shotsOnGoal: item.sog ?? 0,
        shotsWide: item.sw ?? 0,
        powerPlayGoals: item.ppg ?? 0,
        shortHandedGoals: item.shg ?? 0,
        faceoffPercentage: item.fo_perc ?? 0,
    }))
    return (
    <React.Fragment>
        <PlayerInfoModal nested={true} open={modalOpen} setOpen={setModalOpen}>
            <PlayerInfoNestedModal mode={currData.author.includes("Player") ? "Player": "GK"} data={currData}>
            </PlayerInfoNestedModal>
        </PlayerInfoModal>
        <ImageList sx={{ width: '100%', height: '100%' }} key={`imagelist${teamName}`}>
            <div className='flex justify-between' key={"header"}>
                {children}
                <div className='flex flex-col justify-center text-lg font-bold'>Team: {teamName}</div>
            </div>
            <ImageListItem key="Subheader" cols={2} data-name="subjeader">
                <ListSubheader component="div">Players By Team</ListSubheader>
            </ImageListItem>
            {itemData1.map((item, index) => (
                <React.Fragment>
                    <ImageListItem 
                        key={`${item.img}${index}GK`} 
                        onClick={()=> {
                        setCurrData(item);
                        setModalOpen((prevState)=> !prevState)
                        }} 
                        data-name={`${item.img}${index}GK`}>
                        <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        key={`${item.img}${index}GKimg`}
                        alt-name={`${item.img}${index}GKimg`}
                        />
                        <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                            <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}
                            >
                            <InfoIcon />
                            </IconButton>
                        }
                        />
                    </ImageListItem>
                </React.Fragment>
            ))}
            {itemData2.map((item, index) => (
            <ImageListItem 
                key={`${item.img}${index}Player`} 
                data-name={`${item.img}${index}Player`}
                onClick={()=> {
                    setCurrData(item);
                    setModalOpen((prevState)=> !prevState)
                }}
            >
                <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                // loading="lazy"
                />
                <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                    <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                    >
                    <InfoIcon />
                    </IconButton>
                }
                />
            </ImageListItem>
            ))}
        </ImageList>
    </React.Fragment>
    );
}