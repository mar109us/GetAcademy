const wordpad_window = new DesktopWindow("Document - WordPad", 400, 150, 500, 400)
wordpad_window.onRenderContent = wordpad

const textarea = document.getElementById("myTextarea")

wordpad_button.addEventListener("click", () => {global.wordpad_visible = !global.wordpad_visible})

textarea.addEventListener('focus', () => {global.focus_wordpad = true})

textarea.addEventListener('focusout', () => {global.focus_wordpad = false})

function show_wordpad() {
    wordpad_window.canvas.style.display = "block"
    textarea.style.display = "block"
}

function hide_wordpad() {
    wordpad_window.canvas.style.display = "none"
    textarea.style.display = "none"
}

function wordpad(ctx, focus_window, current_pos_x, current_pos_y, pos_x, pos_y, size_x, size_y, currentzindex) {

    if (global.wordpad_visible) {
        show_wordpad()
        getValue()
    }

    else {
        hide_wordpad()
    }

    function getValue() {

        const wordpad_menu_background = 70

        ctx.fillStyle='white'
        
        ctx.fillRect(pos_x, pos_y, size_x, size_y)

        ctx.fillStyle='lightgray'

        ctx.fillRect(pos_x, pos_y, size_x, wordpad_menu_background)

        ctx.font = "13px Tahoma"
        ctx.fillStyle = "black"
        ctx.fillText("File   Edit   View   Insert   Format   Help", pos_x + 10, pos_y + 20)

        const text_margin = 10
        const text_margin_right = 5

        textarea.style.display = "block"
        textarea.style.position = "absolute"
        textarea.style.zIndex = "2000"

        textarea.style.color = "black"

        textarea.style.left = `${current_pos_x + pos_x}px`
        textarea.style.top = `${current_pos_y + pos_y + wordpad_menu_background + 5}px`

        textarea.style.width = `${size_x - pos_x - (text_margin_right * 2)}px`
        textarea.style.height = `${size_y - pos_x - wordpad_menu_background - 5}px`
        textarea.style.border = "none"
        textarea.style.outline = "none"
        textarea.style.background = "none"

        textarea.style.fontSize = "20px"

        textarea.style.marginLeft = `${text_margin}px`

    }
}

