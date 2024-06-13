import { Room } from "../room"
import { HealRoom } from "./healRoom"
import { Position } from "../../types/types"
import { TrapRoom } from "./trapRoom"


export class RoomGenerator {
    private static readonly rooms: {[key: string]: typeof Room} = {
        "HealRoom": HealRoom,
        "TrapRoom": TrapRoom
    }
    
    private static totalChance: number = Object.values(this.rooms).reduce((sum, room) => sum + room.chance, 0)

    public static createRandomRoom(position: Position): Room {
        const randomNumber = Math.random() * this.totalChance

        let currentChance = 0

        for (const roomName in this.rooms) {
            currentChance += this.rooms[roomName].chance
            if ( currentChance > randomNumber) {
                const RoomClass = this.rooms[roomName]
                const room = new RoomClass(position)
                return room
            }
        }

        throw new Error('Ошибка при генерации случайной комнаты')
    }

    public static getRandomRoomType(): typeof Room {
        const randomNumber = Math.random() * this.totalChance

        let currentChance = 0

        for (const roomName in this.rooms) {
            currentChance += this.rooms[roomName].chance
            if ( currentChance > randomNumber) {
                const RoomClass = this.rooms[roomName]
                return RoomClass
            }
        }

        throw new Error('Ошибка при генерации случайной комнаты')
    }
}

// const roomType = RoomGenerator.getRandomRoomType()
// const room = new roomType({x: 1, y: 2})
