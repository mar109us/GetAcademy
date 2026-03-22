

function window_test_function(ctx, focus_window, current_pos_x, current_pos_y, pos_x, pos_y, size_x, size_y) {

        function getValue() {

            ctx.fillStyle='lightgray'
            
            ctx.fillRect(pos_x, pos_y, size_x, size_y)
            

            let textarea = document.getElementById("myTextarea")

            const text_margin = 20
            const text_margin_right = 10

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

            if (focus_window == true) {
                textarea.focus()
            }

        }
        getValue()
}
