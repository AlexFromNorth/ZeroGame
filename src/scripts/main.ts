import { GameCanvas } from "./canvas";
import { Player } from "./player";
import { Room } from "./room";

console.log(new Player().getPosition())

const canvas = new GameCanvas()

const room = new Room(canvas.getContext(), {x: 0, y: 0})
room.draw()

