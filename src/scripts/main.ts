let canvas: HTMLCanvasElement | null = document.getElementById('game') as HTMLCanvasElement
let ctx: CanvasRenderingContext2D

if (canvas == null) {
    canvas = document.createElement('canvas')
    canvas.id = 'game'
    const footer = document.getElementsByTagName('footer')[0]
    if (footer != null) {
        document.body.insertBefore(canvas, footer)
    } else {
        document.body.appendChild(canvas)
    }
}

ctx = canvas.getContext('2d') as CanvasRenderingContext2D
