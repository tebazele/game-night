import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";

class PlayerServices {
    increaseScore(name) {
        console.log(`increase ${name} score by one`);
        let player = appState.players.find(p => p.name == name);
        player.score++
        

    }

    createPlayer(playerData) {
        let newPlayer = new Player(playerData.name, playerData.skillLevel);
        console.log(newPlayer)

        appState.players.push(newPlayer)

    }

    // reset players array from array in local storage
    resetPlayersArray(storedPlayersParam) {
        if (!storedPlayersParam) {
            appState.players = appState.players;
        } else {
            appState.players = JSON.parse(storedPlayersParam);
        }

    }


}

export const playerServices = new PlayerServices()
// Player

// appState