
import AllGames from './hockeygames.json';
import { HockeyGamesListJSON } from 'index';

const InputToType = JSON.stringify(AllGames);
export const HockeyGamesV1 : HockeyGamesListJSON[] = JSON.parse(InputToType)
