let activeWindows = []

class DesktopWindow {
    constructor(title, top, left, width, height) {
        this.title = title
        this.x = top
        this.y = left
        this.w = width
        this.h = height

        this.canvas = document.createElement('canvas')
        this.canvas.width = this.w
        this.canvas.height = this.h
        this.ctx = this.canvas.getContext('2d')

        this.canvas.style.position = "absolute"
        this.canvas.style.left = `${this.x}px`
        this.canvas.style.top = `${this.y}px`
        this.canvas.style.zIndex = "1000"

        this.move_window = false

        document.body.appendChild(this.canvas)

        activeWindows.push(this)
  }

render() {
    let ctx = this.ctx
    let w = this.w
    let h = this.h

    if (global.mouse_y < this.y ||
        global.mouse_y > this.y + 32 ||
        global.mouse_x < this.x + 5 ||
        global.mouse_x > this.x + this.w - 84) {
    }

    else {
        if (global.mouse_down == true) {
            this.move_window = true
        }

        else {
            this.move_window = false
            this.canvas.style.left = `${this.x}px`
            this.canvas.style.top = `${this.y}px`
        }
    }

    if (this.move_window == true) {
        this.x = global.mouse_x - (this.w / 2)
        this.y = global.mouse_y - 16

        this.canvas.style.left = `${this.x}px`
        this.canvas.style.top = `${this.y}px`
    }

    ctx.drawImage(window_bottom_bar, 4, h - 4, w - 8, 5)
    ctx.drawImage(window_bottom_left_bar, -1, h - 4, 5, 5)
    ctx.drawImage(window_bottom_right_bar, w - 4, h - 4, 5, 5)

    ctx.drawImage(window_left_bar, -1, 16, 5, h - 19)
    ctx.drawImage(window_right_bar, w - 4, 16, 5, h - 19)

    ctx.drawImage(window_top_bar, 5, 0, w - 10, 32)

    ctx.drawImage(window_top_left_corner, 0, 0, 5, 32)
    ctx.drawImage(window_top_right_bar, w - 5, 0, 5, 32)

    this.drawTitle(this.title, 10, 23)
    ctx.drawImage(minimize_image, w - 84, 4, 25, 25)
    ctx.drawImage(maximize_image, w - 57, 4, 25, 25)
    ctx.drawImage(close_image, w - 30, 4, 25, 25)

}

// Inside your DesktopWindow class...
drawTitle(text, x, y) {
    // Pass 'this.ctx' so the font function knows which window to draw on
    
    window_style(this.ctx, text, x, y);
}

}




