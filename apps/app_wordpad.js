const wordpad_window = new DesktopWindow("WordPad", 400, 50, 600, 500)
wordpad_window.onRenderContent = wordpad

let wordpad_visible = false

const textarea = document.getElementById("myTextarea")

wordpad_button.addEventListener("click", () => {wordpad_visible = !wordpad_visible})

textarea.addEventListener('focus', () => {global.focus_wordpad = true
    console.log(global.focus_wordpad)
})

textarea.addEventListener('focusout', () => {global.focus_wordpad = false
    console.log(global.focus_wordpad)
})

function show_wordpad() {
    wordpad_window.canvas.style.display = "block"
    textarea.style.display = "block"
}

function hide_wordpad() {
    wordpad_window.canvas.style.display = "none"
    textarea.style.display = "none"
}

/* if (focus_window == true) {
            textarea.focus()
        } */

function wordpad(ctx, focus_window, current_pos_x, current_pos_y, pos_x, pos_y, size_x, size_y) {

    if (wordpad_visible) {
        show_wordpad()
        getValue()
    }

    else {
        hide_wordpad()
    }

    function getValue() {

        ctx.fillStyle='lightgray'
        
        ctx.fillRect(pos_x, pos_y, size_x, size_y)



        const text_margin = 20
        const text_margin_right = 10

        textarea.style.display = "block"
        textarea.style.position = "absolute"
        textarea.style.zIndex = "2000"

        textarea.style.color = "black"

        textarea.style.left = `${current_pos_x + pos_x}px`
        textarea.style.top = `${current_pos_y + pos_y}px`

        textarea.style.width = `${size_x - pos_x - (text_margin_right * 2)}px`
        textarea.style.height = `${size_y - pos_x}px`
        textarea.style.border = "none"
        textarea.style.outline = "none"
        textarea.style.background = "none"

        textarea.style.fontSize = "20px"

        textarea.style.marginLeft = `${text_margin}px`

        

    }    
}

