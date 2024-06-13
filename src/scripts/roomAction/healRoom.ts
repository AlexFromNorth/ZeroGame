import { Position } from '../../types/types'
import { Player } from '../player'
import { Room } from '../room'

export class HealRoom extends Room {
    private _heal: number = 0
    static readonly chance: number = 0.1


    constructor(position: Position, heal: number = 19) {
        super(position)
    }

    setHeal(heal: number){
        this._heal = heal
    }
    getHeal(){
        return this._heal
    }


    activate(player: Player) {
        player.addHealth(this._heal)
    }

}
