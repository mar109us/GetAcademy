const os_canvas_link = document.getElementById("os_canvas")
const os = os_canvas_link.getContext("2d")

const g = document.getElementById("game_canvas")
const canvas_name = g.getContext("2d")

// display page after content is loaded
document.addEventListener("DOMContentLoaded", () => {

//const double_click_time = 500



const alertWindow = new DesktopWindow("Error!", 200, 200, 400, 300);

const fps_60 = 1000 / 60
setInterval(update, fps_60)

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

        activeWindows.forEach(win => {
            win.render()
        })
        
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