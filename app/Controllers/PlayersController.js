import { appState } from "../AppState.js";
import { playerServices } from "../Services/PlayerServices.js";

export class PlayersController {
    constructor() {
        this.loadPlayers()
        console.log(appState.players)
        this.drawCharacters()
    }

    drawCharacters() {
        console.log('drawing characters');
        let template = '';
        appState.players.forEach(p => {
            template += `<div class="col-2">
            <div class="card p-2 text-center align-items-center">
              <h1>${p.name}</h1>
              <img
                src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                class="img-fluid player-avatar">
              <h3>Skill Level: ${p.skillLevel}</h3>
              <h2>Score: ${p.score}</h2>
              <button class="btn btn-success" onclick="app.playersController.increaseScore('${p.name}')">Increase Score</button>
            </div>
          </div>`
        })
        document.getElementById('players').innerHTML = template
    }

    increaseScore(name) {
        playerServices.increaseScore(name);
        this.drawCharacters()
        this.savePlayers()
    }

    createPlayer() {
        window.event.preventDefault()
        console.log('is this working?')
        const form = window.event.target;

        let playerData = {
            name: form.name.value,
            skillLevel: form.skillLevel.value
        }

        playerServices.createPlayer(playerData)

        form.reset()
        this.savePlayers()
        console.log(appState.players)
        this.drawCharacters()
    }

    savePlayers() {
        window.localStorage.setItem("players", JSON.stringify(appState.players))
        console.log('players')
    }

    loadPlayers() {
        let storedPlayers = window.localStorage.getItem('players');
        playerServices.resetPlayersArray(storedPlayers);
        this.drawCharacters()

    }
}

