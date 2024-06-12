import { Position } from "../types/types";

export class Player{
    
    // свойства
    private _position: Position = {x: 4, y: 4}
    private _health: number = 10

    // конструктор
    constructor(health: number, position?: Position) {
        this._health = health
        if(position) {
            this._position = position
        } 
    }

    // методы
    getPosition() {
        return this._position;
    }

    setPosition(value: Position) {
        this._position = value
    }

    getHealth() {
        return this._health;
    }

}
