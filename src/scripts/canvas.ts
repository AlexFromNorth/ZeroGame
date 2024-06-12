class GameCanvas {
    private canvas: HTMLCanvasElement = document.getElementById('game') as HTMLCanvasElement
    private ctx: CanvasRenderingContext2D
    private isFullScreen: boolean = false

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
        this.canvas.height = window.innerHeight
    
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    }

    getContext(): CanvasRenderingContext2D {
        return this.ctx
    }

    getWidth(): number {
        return this.canvas.width
    }

    getHeight(): number {
        return this.canvas.height
    }

    toggleFullScreen() {
        if (this.isFullScreen) {
            this.disableFullScreen()
        } else {
            this.enableFullScreen()
        }
    }

    enableFullScreen() {
        if (this.isFullScreen) return

        this.isFullScreen = true
        this.canvas.requestFullscreen()
        this.updateSize()
    }

    disableFullScreen() {
        if (!this.isFullScreen) return

        this.isFullScreen = false
        document.exitFullscreen()
        this.updateSize()
    }

    private updateSize() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
    }
}

export { GameCanvas }
