

function window_test_function(ctx, current_pos_x, current_pos_y, pos_x, pos_y, size_x, size_y) {

        function getValue() {
            let textarea = document.getElementById("myTextarea")

            textarea.style.position = "absolute"
            textarea.style.zIndex = "2000"
/*             textarea.style.left = `${this.x + pos_x}px`
            textarea.style.top = `${this.y + pos_y}px` */

/*             textarea.style.left = `${current_pos_x + pos_x}px`
            textarea.style.top = `${current_pos_y + pos_y}px` */

textarea.style.transform = `translate(${current_pos_x + pos_x}px, ${current_pos_y + pos_y}px)`

            textarea.style.width = `${size_x - pos_x}px`
            textarea.style.height = `${size_y - pos_x}px`
            textarea.style.border = "none"

        }
        getValue()
}
