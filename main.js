const os_canvas_link = document.getElementById("os_canvas")
const os = os_canvas_link.getContext("2d")

const g = document.getElementById("game_canvas")
const game = g.getContext("2d")

function text_style_1(text, x, y) {
    os.font = "40px Tahoma"
    os.strokeStyle = "black"
    os.lineWidth = 1.5
    os.strokeText(text, x + 1, y + 0.4)
    os.fillStyle = "white"
    os.fillText(text, x, y)
}

function text_style_2(text, x, y) {
    os.font = "30px Tahoma"
    os.strokeStyle = "black"
    os.lineWidth = 1.5
    os.strokeText(text, x + 1, y + 0.4)
    os.fillStyle = "white"
    os.fillText(text, x, y)
}

function text_style_3(text, x, y) {
    os.font = "20px Tahoma"
    os.strokeStyle = "black"
    os.lineWidth = 1.3
    os.strokeText(text, x + 0.1, y + 0.1)
    os.fillStyle = "white"
    os.fillText(text, x, y)
}

function text_style_window(text, x, y) {
    game.font = "15px Tahoma"
    game.strokeStyle = "black"
    game.lineWidth = 0.8
    game.strokeText(text, x + 0.5, y + 0.5)
    game.fillStyle = "white"
    game.fillText(text, x, y)
}

function text_style_game(text, x, y) {
    game.font = "40px Tahoma"
    game.strokeStyle = "black"
    game.lineWidth = 4
    game.strokeText(text, x + 0, y + 0)
    game.fillStyle = "white"
    game.fillText(text, x, y)
}

// display page after content is loaded
document.addEventListener("DOMContentLoaded", () => {

function background() {
    os.filter = "brightness(90%)"
    os.drawImage(bg_image, global.pos_left, global.pos_top, global.max_width, global.max_height)
}

const taskbar_height = 60

const bar_pos = global.pos_bot - taskbar_height

const lightbar_offset_x = 1900
const lightbar_x = global.pos_left + lightbar_offset_x
const lightbar_size_x = 700

const startbar_size_x = 190

const start_text_offset_x = 75
const start_text_pos_x = global.pos_left + start_text_offset_x

const start_text_offset_y = 45
const start_text_pos_y = bar_pos + start_text_offset_y

const icon_size_x = 60
const icon_size_y = 50

const icon_offset_x = 5
const icon_pos_x = global.pos_left + icon_offset_x

const icon_offset_y = 3
const icon_pos_y = bar_pos + icon_offset_y

function taskbar() {
    os.drawImage(bar_image, 
        global.pos_left,
        bar_pos,
        global.max_width,
        taskbar_height)

    os.drawImage(lightbar_image,
        lightbar_x,
        bar_pos,
        lightbar_size_x,
        taskbar_height)

    os.drawImage(startbar_image,
        global.pos_left,
        bar_pos,
        startbar_size_x,
        taskbar_height)

    os.drawImage(wicon_image,
        icon_pos_x,
        icon_pos_y,
        icon_size_x,
        icon_size_y)

    text_style_1("start",
        start_text_pos_x,
        start_text_pos_y)
    //ctx.drawImage(virus_image, 100, 100, 100, 100)
}   


let is_video_visible = false
const videopos_x = 1000
const videopos_y = 200
const windowpos_x = videopos_x - 48
const windowpos_y = videopos_y - 80

function tiktok_click() {
    tiktok_button.addEventListener("click", () => {is_video_visible = !is_video_visible})
}

function show_tiktok() {
    if (is_video_visible) {
        os.drawImage(video1, videopos_x, videopos_y, 480, 854)
        os.drawImage(window1, windowpos_x, windowpos_y, 573, 1000)
        text_style_3("TikTok", videopos_x + 10, videopos_y + 8)
        os.drawImage(minimize_image, videopos_x + 390, videopos_y - 12, 25, 25)
        os.drawImage(maximize_image, videopos_x + 420, videopos_y - 12, 25, 25)
        os.drawImage(close_image, videopos_x + 450, videopos_y - 12, 25, 25)
        os.drawImage(ad_image, videopos_x + 10, videopos_y + 30, 450, 80)

        const icon_offset = 380
        const iconpos_y = videopos_y + icon_offset
        os.drawImage(profile_image, videopos_x + 400, iconpos_y + 20, 70, 70)
        os.drawImage(heart_image, videopos_x + 406, iconpos_y + 100, 55, 55) 
        os.drawImage(comment_image, videopos_x + 410, iconpos_y + 200, 55, 55) 
        os.drawImage(share_image, videopos_x + 405, iconpos_y + 300, 50, 50)

        text_style_3("1.3M", videopos_x + 410, iconpos_y + 172)
        text_style_3("24.8M", videopos_x + 405, iconpos_y + 272)
        text_style_3("16.1K", videopos_x + 405, iconpos_y + 372)
        
        video1.play()
    }

    else {
        video1.pause()
    }
}

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