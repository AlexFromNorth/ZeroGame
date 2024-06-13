import { Position } from '../../types/types'
import { Player } from '../player'
import { Room } from '../room'

export class TrapRoom extends Room {
    private _damage: number = 0

    constructor(position: Position, damage: number = 2) {
        super(position)
    }

    // activate(player: Player) {
        // super.activate()
        // console.log(player, 'heal room')
    // }

    setDamage(damage: number){
        this._damage = damage
    }
    getDamage(){
        return this._damage
    }



    activate(player: Player) {
        player.addHealth(this._damage)

        // console.log(player, 'empty room')
    }

}


