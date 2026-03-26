let activeWindows = []

class DesktopWindow {
    constructor(title, left, top, width, height) {
        this.title = title
        this.x = left
        this.y = top
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
        this.grab_window = false

        document.body.appendChild(this.canvas)

        activeWindows.push(this)     
    }

    render() {
        let ctx = this.ctx
        let w = this.w
        let h = this.h

        let focus_window = false
        
        if (this.move_window == true) {

            if (this.y_offset === null) {
                this.y_offset = global.mouse_y - this.y
                this.x_offset = global.mouse_x - this.x
            }

            this.x = global.mouse_x - this.x_offset
            this.y = global.mouse_y - this.y_offset

            this.canvas.style.left = `${this.x}px`
            this.canvas.style.top = `${this.y}px`
        } 

        else {

            this.y_offset = null;
            this.x_offset = null;
        }    

        // out of bounds logic
        if (this.move_window == false) {

            if (this.x < window.global.pos_left) {
                this.x = 0
                this.canvas.style.left = `0px`
            }

            if (this.x + this.w > window.innerWidth) {
                this.x = window.innerWidth - this.w
                this.canvas.style.left = `${window.innerWidth - this.w}px`
            }

            if (this.y < window.global.pos_top) {
                this.y = 0
                this.canvas.style.top = `0px`
            }

            if (this.y + this.h > window.innerHeight - taskbar_height) {
                this.y = window.innerHeight - this.h - 30 // hardcoded number because im doing something dumb in os_ui.js
                this.canvas.style.top = `${window.innerHeight - this.h - 30}px` // hardcoded number because im doing something dumb in os_ui.js
            }     
        }

        // area outside of bar
        if (global.mouse_y < this.y ||
            global.mouse_y > this.y + 32 ||
            global.mouse_x < this.x + 5 ||
            global.mouse_x > this.x + this.w - 84) {
            
            if (global.mouse_down == true) {
                this.grab_window = false
                this.canvas.focus = false
            }

            else {
                this.grab_window = true
            }
        }

        // if inside bar
        else {

            if (global.mouse_down == true && this.grab_window == true) {
                this.move_window = true
                this.canvas.focus = true
            }

            else {
                this.move_window = false
                this.canvas.style.left = `${this.x}px`
                this.canvas.style.top = `${this.y}px`
            }
        }

        if (this.canvas.focus == true) {
            this.canvas.style.zIndex = 1001
        }

        if (this.canvas.focus == false) {
            this.canvas.style.zIndex = 1000
        }

        let currentzindex = this.canvas.style.zIndex
        
        let pos_x = 4
        let pos_y = 32

        let current_pos_x = this.x
        let current_pos_y = this.y

        let size_x = this.canvas.width - 8
        let size_y = this.canvas.height - 36

        ctx.fillRect(pos_x, pos_y, size_x, size_y)

        if (typeof this.onRenderContent === 'function') {
            this.onRenderContent(
                ctx,
                focus_window,
                current_pos_x,
                current_pos_y,
                pos_x,
                pos_y,
                size_x,
                size_y,
                currentzindex
            )
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

    drawTitle(text, x, y) {
        window_style(this.ctx, text, x, y);
    }
}