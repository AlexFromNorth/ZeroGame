import { Player } from './player';
import { Position } from "../types/types";

export class Room {
    
    // свойства
    private position: Position
    private trait: { color: string } = { color: 'green' }
    static readonly chance: number = 0.1
    

    // конструктор
    constructor(position: Position) {
        this.position = position;
    }

    // методы
    getPosition(){
        return this.position
    }
        
    getTrait(){
        return this.trait
    }  
}


