export class Room {
    
    private position: {x: number, y: number}
    private trait: { color: string }
    private ctx: CanvasRenderingContext2D
    
    // свойства

    // конструктор
    constructor(ctx: CanvasRenderingContext2D, position: {x: number, y: number}) {
        this.position = position;
        this.trait = { color: 'red' }
        this.ctx = ctx
    }


    // методы
    draw() {
        this.ctx.fillStyle = this.trait.color
        this.ctx.fillRect(this.position.x + 25, this.position.y + 25, 50, 50)
    }
    
}

