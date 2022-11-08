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


}

export const playerServices = new PlayerServices()
// Player

// appState