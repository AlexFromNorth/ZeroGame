import { GameCanvas } from "./canvas";

const gameCanvas = new GameCanvas()

console.log()

document.body.addEventListener('click', () => {
    gameCanvas.toggleFullScreen()
})