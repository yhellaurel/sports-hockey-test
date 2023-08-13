export interface GeneralPlayerInfoInterface{
    player: number;
    game: number;
    team: string;
    jersey: number;
    line: number;
    position: string;
    firstName: string;
    familyName: string;
    pim: number;
    actiontype: string;
    teamId: string;
}

export interface PlayerInfoInterface extends GeneralPlayerInfoInterface{
    hits: number;
    g: number;
    a: number;
    toi: string;
    shg: number;
    ppg: number;
    fo_perc: number;
    sw: number;
    sog: number;
    ppsog: number;
    nep: number;
    pop: number;
    netPlusMinus: number;
    tp: number;
    fo_tot: number;
    fow: number;
    fol: number;
}

export interface GoalKeeperInterface extends GeneralPlayerInfoInterface{
    tot_ga: number;
    tot_soga: number;
    tot_spga: number;
    tot_svs: number;
    tot_svs_perc: number;
    tot_nonso_svs_perc: number;
}

export interface TeamDataInterface{
    GK: GoalKeeperInterface[];
    players: PlayerInfoInterface[];
}


export interface PlayersByTeamInterface {
    [teamName: string]: TeamDataInterface;
    [teamName: string]: TeamDataInterface;
}


export interface GameRecap {
    periodNumber: number;
    gameStatsId: number;
    status: string;
    awayTeamId: string;
    awayTeamName: string;
    awayG: number;
    awayPIM: number;
    awayFOW: number;
    awaySOG: number;
    awaySPG: number;
    awaySaves: number;
    awayGA: number;
    awaySavesPerShot: number;
    awayPP_perc: number;
    awaySH_perc: number;
    awayPPG: number;
    awaySHG: number;
    awayPPGA: number;
    awaySHGA: number;
    awayNumPP: number;
    awayNumSH: number;
    awayHits: number;
    awayPPSOG: number;
    awayactiontype: string;
    awayteamId: string;
    startDateTime: string;
    endDateTime: string;
    statusString: string;
    statsId: number;
    homeTeamId: string;
    homeTeamName: string;
    homeG: number;
    homePIM: number;
    homeFOW: number;
    homeSOG: number;
    homeSPG: number;
    homeSaves: number;
    homeGA: number;
    homeSavesPerShot: number;
    homePP_perc: number;
    homeSH_perc: number;
    homePPG: number;
    homeSHG: number;
    homePPGA: number;
    homeSHGA: number;
    homeNumPP: number;
    homeNumSH: number;
    homeHits: number;
    homePPSOG: number;
    homeactiontype: string;
    hometeamId: string;
}

export interface RecapData {
    gameRecap: GameRecap;
    "0": GameRecap;
    "1": GameRecap;
    "2": GameRecap;
    "3": GameRecap;
}


export interface HockeyGamesListJSON {
    id: number,
    playersByTeam: PlayersByTeamInterface,
    recaps: RecapData,
    gameState: string,
}


export interface TeamStats {
    possession: number;
    shots: number;
    passes: number;
    corner: number;
    crosses: number;
    tackles: number;
    blocks: number;
    clearance: number;
    fouls: number;
    offsides: number;
    gameRecap: {
      goals: number;
      shotsOnGoal: number;
      penaltyMinutes: number;
      faceOffsWon: number;
      powerPlayGoals: number;
      penaltyKillingGoals: number;
      numberOfPowerPlayGoals: number;
      numberOfPenaltyKills: number;
    };
    [key: string ]: {
      goals: number;
      shotsOnGoal: number;
      penaltyMinutes: number;
      faceOffsWon: number;
      powerPlayGoals: number;
      penaltyKillingGoals: number;
      numberOfPowerPlayGoals: number;
      numberOfPenaltyKills: number;
    } | number | any;
  }