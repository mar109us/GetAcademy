const os_canvas_link = document.getElementById("os_canvas")
const os = os_canvas_link.getContext("2d")

const g = document.getElementById("game_canvas")
const game = g.getContext("2d")

// display page after content is loaded
document.addEventListener("DOMContentLoaded", () => {





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

//const double_click_time = 500



const fps_60 = 1000 / 60
setInterval(update, fps_60)

function screensaver_click() {
    screenclick.addEventListener("click", () => {screensaver_active = !screensaver_active})
}

function screen_clicked() {
    if (global.screensaver_active) {
        wallpaper_counter = 0
        screensaver_timer = 0
        elapsed_ms = 0
        global.screensaver_active = false
    }
}

onmousemove = function(e) {
    e.clientX
    e.clientY
    wallpaper_counter = 0
    screensaver_timer = 0
    elapsed_ms = 0
    global.screensaver_active = false
}

document.addEventListener('keydown', logKey);

function logKey(e) {
    if (`${e.code}` === "KeyL") {
        screensaver_timer = screensaver_set_init
    }
}

let ui_visibility = document.getElementsByClassName('ui')[0]
let screenclick_visibility = document.getElementsByClassName('screenclick')[0]

function update(){ 
    elapsed_ms += fps_60
    screensaver_timer += fps_60

    if (screensaver_timer > screensaver_set_init) {
        screensaver_loop()
        screen_clicked()

        ui_visibility.style.visibility = "hidden"
        screenclick_visibility.style.visibility = "visible"
        rotate_timer += fps_60
        wallpaper_counter++
    }

    if (screensaver_timer < screensaver_set_init ) { 
        os.resetTransform()

        ui_visibility.style.visibility = "visible"
        screenclick_visibility.style.visibility = "hidden"

        background()
        taskbar()
        clock()
        show_explorer()
        show_tom()
        show_tiktok()
        bird_game_logic()
        
    }
}
tiktok_click()
explorer_click()
tom_click()
screensaver_click()
bird_desktop_button_click()
bird_play_button_click()
hide_bird_menu()
})