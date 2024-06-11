class GameCanvas {
    private canvas: HTMLCanvasElement = document.getElementById('game') as HTMLCanvasElement
    private ctx: CanvasRenderingContext2D

    constructor() {
        if (this.canvas == null) {
            this.canvas = document.createElement('canvas')
            this.canvas.id = 'game'
            const footer = document.getElementsByTagName('footer')[0]
            if (footer != null) {
                document.body.insertBefore(this.canvas, footer)
            } else {
                document.body.appendChild(this.canvas)
            }
        }
    
        this.canvas.width = window.innerWidth
        this.canvas.height = this.canvas.width / 1.5
    
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D

    }

    get context(): CanvasRenderingContext2D {
        return this.ctx
    }

}

export { GameCanvas }
