let is_explorer_visible = false
const explorerpos_x = 250
const explorerpos_y = 50
const explorerwindowpos_x = explorerpos_x - 48
const explorerwindowpos_y = explorerpos_y - 80

function explorer_click() {
    explorer_button.addEventListener("click", () => {is_explorer_visible = !is_explorer_visible})
}

function show_explorer(){
    if (is_explorer_visible){
        os.drawImage(youtube_image, explorerpos_x + 160, explorerpos_y + 60, 2090, 1160)
        os.drawImage(window1, explorerwindowpos_x, explorerwindowpos_y, 2500, 1400)
        text_style_3("YouTube - Don't be evil. - Windows Internet Explorer", explorerpos_x + 160, explorerpos_y + 40)
        os.drawImage(minimize_image, explorerpos_x + 2150, explorerpos_y + 20, 25, 25)
        os.drawImage(maximize_image, explorerpos_x + 2180, explorerpos_y + 20, 25, 25)
        os.drawImage(close_image, explorerpos_x + 2210, explorerpos_y + 20, 25, 25)
    }
}