function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
            },
        },
    },
}}

const game = gameObject();
const players = playersObject();
const teams = Object.values(game);
let teamObj = game[gameKey];

function numPointsScored(playerName){
    const game = gameObject();
for (let gameKey in game) {
    let teamObj = game[gameKey];
    debugger;
    for (let teamKey in teamObj) {
        if (teamKey == "players") {
            let players = teamObj[teamKey];
            debugger
            for (let player in players){
                if (player == playerName) {
                    return players[player].points;
                }
            }
        }
    }
}
return players[playerName].points
}
function shoeSize(playerName){
    const game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey];
        debugger;
        for (let teamKey in teamObj) {
            if (teamKey == "players") {
                let players = teamObj[teamKey];
                debugger
                for (let player in players){
                    if (player == playerName) {
                        return players[player].shoe;
                    }
                }
            }
        }
    }
    return players[playerName].shoe
}

function findTeamName(teamName){
    return teams.find(team => team.teamName === teamName)
}

function teamColors(teamName){
    return findTeamName(teamName).colors
}

function teamNames(){
    return teams.map(team => team.teamName)
}

//function homeTeam() {
//    const game = gameObject();
//    return game.home
//}
//function awayTeam() {
//    const game = gameObject();
//    return game.away
//}

const playerNumbers = teamName => {
       const found = findTeamName(teamName)
       if (found) return Object.values(found.players).map(obj => obj.number)
}

function findPlayerName(playerName) {
    const game = gameObject();
    const teams = Object.values(game);
    for (team in game) {
        const wholeTeam = game[team].players
        for (player in wholeTeam) {
            if (player === playerName) {
                return wholeTeam[player]
            }
        }
    }
}
const playerStats = playerName => findPlayerName(playerName)

function getAllPlayers() {
    //declare a variable home players and assign it equal to all the home players
    const homePlayers = gameObject().home.players;
    //declare a variable away players and assign it equal to all the away players
    const awayPlayers = gameObject().away.players;
    //copy both of the home and away players objects into one single object
    const allPlayers = {...homePlayers, ...awayPlayers};
    return allPlayers;
}

function bigShoeRebounds () {
    const allNames = getAllPlayers();
    let bigShoeSize = {shoesize: 0};
    for (const playerName in allNames) {
        const players = allNames[playerName] 
    if (players.shoe > bigShoeSize.shoesize) {
        bigShoeSize.shoesize = players.shoe;
        bigShoeSize.rebounds = players.rebounds;
    } 
    }
    return bigShoeSize.rebounds;
}
    // - Build a function, `bigShoeRebounds`, that will return the number of rebounds
    // associated with the player that has the largest shoe size. Break this one
    // down into steps:
    // - First, find the player with the largest shoe size
    // - Then, return that player's number of rebounds
    // - Remember to think about return values here. Use `debugger` to drop into
    //   your function and understand what it is returning and why.
    
    