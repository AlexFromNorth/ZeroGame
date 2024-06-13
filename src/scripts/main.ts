import { randomVector } from "../utils/utils";
import { GameCanvas } from "./canvas";
import { Player } from "./player";
import { Room } from "./room";
import { HealRoom } from "./roomAction/healRoom";

const roomSize = 50
const roomGap = 10
const player = new Player(15)

const canvas = new GameCanvas()

const rooms: Map<string, Room> = new Map([
    [`${player.getPosition().x},${player.getPosition().y}`, new Room({ x: player.getPosition().x, y: player.getPosition().y })]
])
loop()

const room1 = new Room({x: 1, y: 2})
const healRoom = new HealRoom({x: 10, y: 20}, 20)


function createRoom() {
    
    setInterval(() => {
        let vector = { x: player.getPosition().x, y: player.getPosition().y }
        if (Math.random() < 0.5) {
            vector.x += randomVector()
        } else {
            vector.y += randomVector()
        }

        
        player.setPosition(vector)

        if (rooms.has(`${vector.x},${vector.y}`)) {
            loop()

            const room = new HealRoom(vector)
            rooms.set(`${vector.x},${vector.y}`, room)

            room.setHeal(5)
            room.activate(player)

            console.log(player.getHealth())
            return
        }
        const room = new HealRoom(vector)
        rooms.set(`${vector.x},${vector.y}`, room)
        // room.activate(player)

        loop()
    }, 1000)
}

createRoom()

function loop() {
    canvas.getContext().clearRect(0, 0, canvas.getWidth(), canvas.getHeight())
    
        
    rooms.forEach((room, key) => {
        canvas.getContext().fillStyle = room.getTrait().color
        canvas.getContext().fillRect(roomGap * room.getPosition().x + roomSize * room.getPosition().x - ((player.getPosition().x + 1) * roomSize + (player.getPosition().x + 1) * roomGap) + window.innerWidth / 2, roomGap * room.getPosition().y + roomSize * room.getPosition().y - ((player.getPosition().y + 1) * roomSize + (player.getPosition().y + 1) * roomGap) + window.innerHeight / 2, roomSize, roomSize)
    })

    canvas.getContext().strokeStyle = 'blue'
    canvas.getContext().lineWidth = player.getHealth()
    canvas.getContext().strokeRect(window.innerWidth / 2 - roomSize - roomGap, window.innerHeight / 2 - roomSize - roomGap, roomSize, roomSize)

}



