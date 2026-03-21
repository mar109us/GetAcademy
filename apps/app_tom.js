let is_tom_visible = false
const tompos_x = 250
const tompos_y = 50
const tomwindowpos_x = tompos_x - 48
const tomwindowpos_y = tompos_y - 80

function tom_click(){
    tom_button.addEventListener("click", () => {is_tom_visible = !is_tom_visible})
}

function show_tom(){
    if (is_tom_visible){
        os.drawImage(tom_image, tompos_x + 160, tompos_y + 20, 2090, 1210)
        os.drawImage(window1, tomwindowpos_x, tomwindowpos_y, 2500, 1400)
        text_style_3("tom.JPG", tompos_x + 160, tompos_y + 40)
        os.drawImage(minimize_image, tompos_x + 2150, tompos_y + 20, 25, 25)
        os.drawImage(maximize_image, tompos_x + 2180, tompos_y + 20, 25, 25)
        os.drawImage(close_image, tompos_x + 2210, tompos_y + 20, 25, 25)
    }
}