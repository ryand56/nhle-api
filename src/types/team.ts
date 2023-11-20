import { IDisplayName, DisplayName } from "./display";

export interface IStandingsTeam {
    conferenceAbbrev: string;
    conferenceHomeSequence: number;
    conferenceL10Sequence: number;
    conferenceName: string;
    conferenceRoadSequence: number;
    conferenceSequence: number;
    date: string;
    divisionAbbrev: string;
    divisionHomeSequence: number;
    divisionL10Sequence: number;
    divisionName: string;
    divisionRoadSequence: number;
    divisionSequence: number;
    gameTypeId: number;
    gamesPlayed: number;
    goalDifferential: number;
    goalDifferentialPctg: number;
    goalAgainst: number;
    goalFor: number;
    goalsForPctg: number;
    homeGamesPlayed: number;
    homeGoalDifferential: number;
    homeGoalsAgainst: number;
    homeGoalsFor: number;
    homeLosses: number;
    homeOtLosses: number;
    homePoints: number;
    homeRegulationPlusOtWins: number;
    homeRegulationWins: number;
    homeTies: number;
    homeWins: number;
    l10GamesPlayed: number;
    l10GoalsDifferential: number;
    l10GoalsAgainst: number;
    l10GoalsFor: number;
    l10Losses: number;
    l10OtLosses: number;
    l10Points: number;
    l10RegulationPlusOtWins: number;
    l10RegulationWins: number;
    l10Ties: number;
    l10Wins: number;
    leagueHomeSequence: number;
    leagueL10Sequence: number;
    leagueRoadSequence: number;
    leagueSequence: number;
    losses: number;
    otLosses: number;
    placeName: IDisplayName;
    pointPctg: number;
    points: number;
    regulationPlusOtWinPctg: number;
    regulationPlusOtWins: number;
    regulationWinPctg: number;
    regulationWins: number;
    roadGamesPlayed: number;
    roadGoalDifferential: number;
    roadGoalsAgainst: number;
    roadGoalsFor: number;
    roadLosses: number;
    roadOtLosses: number;
    roadPoints: number;
    roadRegulationPlusOtWins: number;
    roadRegulationWins: number;
    roadTies: number;
    roadWins: number;
    seasonId: number;
    shootoutLosses: number;
    shootoutWins: number;
    streakCode: string;
    streakCount: number;
    teamName: DisplayName;
    teamAbbrev: IDisplayName;
    teamLogo: string;
    ties: number;
    waiversSequence: number;
    wildcardSequence: number;
    winPctg: number;
    wins: number;
}