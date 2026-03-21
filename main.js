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

const max_width = 2560
const max_height = 1440

const pos_top = 0
const pos_left = 0
const pos_bot = 1440
const pos_right = 2560

// display page after content is loaded
document.addEventListener("DOMContentLoaded", () => {

function background() {
    os.filter = "brightness(90%)"
    os.drawImage(bg_image, pos_left, pos_top, max_width, max_height)
}

function taskbar() {
    const set_height = 60
    const icon_size = 60
    const pos_vertical = pos_bot - set_height

    os.drawImage(bar_image, pos_left, pos_vertical, max_width, set_height)
    os.drawImage(lightbar_image, pos_left + 1900, pos_vertical, 700, set_height)
    os.drawImage(startbar_image, pos_left, pos_vertical, 170, set_height)
    os.drawImage(wicon_image, pos_left, pos_vertical, icon_size, icon_size)
    text_style_1("start", pos_left + 60, pos_vertical + 45)
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

const set_height = 60
const pos_vertical = pos_bot - set_height

let current_time 
current_time = new Date().getTime()
const clock_interval = 200  // clock refresh rate in ms

// since 60fps is visually too high for clock update, stagger data input
function clock(){
    text_style_2(`${current_time}ms since 01-01-1970`, pos_left + 2050, pos_vertical + 43)

    function update_time(){
        current_time = new Date().getTime()
    }

    if (clock_interval < elapsed_ms){    // fetch new data when a set interval is reached
        update_time()
        elapsed_ms = 0
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

function bird_desktop_button_click() {
birdbutton.addEventListener("click", (e) => {bird_desktop_clicked = !bird_desktop_clicked;
    e.currentTarget.blur() })
}

function bird_play_button_click() {
bird_play_button.addEventListener("click", (e) => {bird_play_clicked = !bird_play_clicked;
    e.currentTarget.blur() })
}

 function hide_bird_menu() {
    bird_play_button.style.display = "none"
}

function show_bird_menu() {
    bird_play_button.style.display = "block"
}  

function show_game_area() {
    document.getElementById("game_canvas").style.display = "block"
}

function hide_game_area() {
    document.getElementById("game_canvas").style.display = "none"
}

let game_speed = 2

const jump_height = 40

const game_pos_x = 4
const game_pos_y = 32

const window_size_x = 500
const window_size_y = 400

const game_size_x = 500 - 4
const game_size_y = 400 - 36

function window_ui() {
    game.drawImage(window_bottom_bar, 4, window_size_y - 4, window_size_x - 8, 5)
    game.drawImage(window_bottom_left_bar, -1, window_size_y - 4, 5, 5)
    game.drawImage(window_bottom_right_bar, window_size_x - 4, window_size_y - 4, 5, 5)
    game.drawImage(window_left_bar, -1, 16, 5, window_size_y - 19)
    game.drawImage(window_right_bar, window_size_x - 4, 16, 5, window_size_y - 19)
    game.drawImage(window_top_bar, 5, 0, window_size_x - 10, 16 * 2)
    game.drawImage(window_top_left_corner, 0, 0, 5, 16 * 2)
    game.drawImage(window_top_right_bar, window_size_x - 5, 0, 5, 16 * 2)
}


const character_size_x = 65
const character_size_y = 50

let character_position_x = 50
let character_position_y = 100

let character_max_pos_y = game_pos_y + game_size_y - character_size_y

let character_min_pos_y = game_pos_y + 15

let hide_bird_menu_items = false

let bird_desktop_clicked = false

let bird_play_clicked = false


function jump() {
    document.addEventListener('keydown', logKey)

    function logKey(e) {
        if (`${e.code}` === "Space") {

            if (character_min_pos_y >= character_position_y) {
                
            }

            else {
                character_position_y -= jump_height
            }
        }
        }

}
jump()

function show_bird_menu_items() {
    if (hide_bird_menu_items) return
    show_game_area()

    game.drawImage(game_main_menu_image,
    game_pos_x,
    game_pos_y,
    game_size_x - 4,
    game_size_y)

    game.drawImage(flappy_image,
    game_pos_x - 60,
    game_pos_y - 60,
    400,
    200)

    game.drawImage(sunny_logo_image,
    game_pos_x + 200,
    game_pos_y + 50,
    300,
    150)
}

function gravity() {

    if (character_position_y >= character_max_pos_y) {
    }
        
    else if (character_position_y < character_max_pos_y) {
        character_position_y += game_speed
    }
}


function bird_menu_state() {

    text_style_window("Flappy Bird - It's Always Sunny in Philadelphia Version", 10, 23)
    game.drawImage(minimize_image, window_size_x - 84, 4, 25, 25)
    game.drawImage(maximize_image, window_size_x - 57, 4, 25, 25)
    game.drawImage(close_image, window_size_x - 30, 4, 25, 25)
    
}

let background1_x = game_pos_x
let background2_x = game_size_x

function background_scroll(){
    background1_x = background1_x - game_speed
    background2_x = background2_x - game_speed
}


let top_obstacle1_height = Math.floor(Math.random() * 140)

let top_obstacle2_height = Math.floor(Math.random() * 140)

let top_obstacle3_height = Math.floor(Math.random() * 140)

let top_obstacle4_height = Math.floor(Math.random() * 140)


let bot_obstacle1_height = Math.floor(Math.random() * 140)

let bot_obstacle2_height = Math.floor(Math.random() * 140)

let bot_obstacle3_height = Math.floor(Math.random() * 140)

let bot_obstacle4_height = Math.floor(Math.random() * 140)

const obstacle_width = 50

let obstacle1 = 250
let obstacle2 = 386.5
let obstacle3 = 523
let obstacle4 = 659.5

function obstacle_scroll() {
    obstacle1 = obstacle1 - game_speed
    obstacle2 = obstacle2 - game_speed
    obstacle3 = obstacle3 - game_speed
    obstacle4 = obstacle4 - game_speed
}

function bird_play_state() {
    
    background_scroll()
    obstacle_scroll()

    game.drawImage(bricks_image, background1_x, game_pos_y, game_size_x, game_size_y)
    game.drawImage(bricks_image, background2_x, game_pos_y, game_size_x, game_size_y)

    if (background1_x <= game_pos_x - game_size_x) {
        background1_x = game_size_x
    }

    if (background1_x == game_pos_x){
        background2_x = game_size_x
    }

    if (background2_x <= game_pos_x - game_size_x) {
        background2_x = game_size_x
    }

    if (obstacle1 <= game_pos_x - 50) {
        obstacle1 = game_size_x
        top_obstacle1_height = Math.floor(Math.random() * 80)
        bot_obstacle1_height = Math.floor(Math.random() * 200)
    }

    if (obstacle2 <= game_pos_x - 50) {
        obstacle2 = game_size_x
        top_obstacle2_height = Math.floor(Math.random() * 140)
        bot_obstacle2_height = Math.floor(Math.random() * 140)
    }

    if (obstacle3 <= game_pos_x - 50) {
        obstacle3 = game_size_x
        top_obstacle3_height = Math.floor(Math.random() * 200)
        bot_obstacle3_height = Math.floor(Math.random() * 80)
    }

    if (obstacle4 <= game_pos_x - 50) {
        obstacle4 = game_size_x
        top_obstacle4_height = Math.floor(Math.random() * 140)
        bot_obstacle4_height = Math.floor(Math.random() * 140)
    }    

    game.fillRect(obstacle1, game_pos_y, obstacle_width, top_obstacle1_height)
    game.fillRect(obstacle1, game_pos_y + game_size_y - bot_obstacle1_height, obstacle_width, bot_obstacle1_height)

    game.fillRect(obstacle2, game_pos_y, obstacle_width, top_obstacle2_height)
    game.fillRect(obstacle2, game_pos_y + game_size_y - bot_obstacle2_height, obstacle_width, bot_obstacle2_height)

    game.fillRect(obstacle3, game_pos_y, obstacle_width, top_obstacle3_height)
    game.fillRect(obstacle3, game_pos_y + game_size_y - bot_obstacle3_height, obstacle_width, bot_obstacle3_height)

    game.fillRect(obstacle4, game_pos_y, obstacle_width, top_obstacle4_height)
    game.fillRect(obstacle4, game_pos_y + game_size_y - bot_obstacle4_height, obstacle_width, bot_obstacle4_height)

    game.drawImage(game_bird_image,
        character_position_x,
        character_position_y,
        character_size_x,
        character_size_y)

    if (obstacle1 + obstacle_width > character_position_x + character_size_x &&
        obstacle1 < character_position_x + character_size_x &&
        character_position_y < game_pos_y + top_obstacle1_height) {
        game_over()
    }

    if (obstacle2 + obstacle_width > character_position_x + character_size_x &&
        obstacle2 < character_position_x + character_size_x &&
        character_position_y < game_pos_y + top_obstacle2_height) {
        game_over()
    }

    if (obstacle3 + obstacle_width > character_position_x + character_size_x &&
        obstacle3 < character_position_x + character_size_x &&
        character_position_y < game_pos_y + top_obstacle3_height) {
        game_over()
    }

    if (obstacle4 + obstacle_width > character_position_x + character_size_x &&
        obstacle4 < character_position_x + character_size_x &&
        character_position_y < game_pos_y + top_obstacle4_height) {
        game_over()
    }

    if (obstacle1 + obstacle_width > character_position_x &&
        obstacle1 < character_position_x + character_size_x &&
        character_position_y + character_size_y > game_pos_y + game_size_y - bot_obstacle1_height) {
        game_over()
    }

    if (obstacle2 + obstacle_width > character_position_x + character_size_x &&
        obstacle2 < character_position_x + character_size_x &&
        character_position_y + character_size_y > game_pos_y + game_size_y - bot_obstacle2_height) {
        game_over()
    }

    if (obstacle3 + obstacle_width > character_position_x + character_size_x &&
        obstacle3 < character_position_x + character_size_x &&
        character_position_y + character_size_y > game_pos_y + game_size_y - bot_obstacle3_height) {
        game_over()
    }

    if (obstacle4 + obstacle_width > character_position_x + character_size_x &&
        obstacle4 < character_position_x + character_size_x &&
        character_position_y + character_size_y > game_pos_y + game_size_y - bot_obstacle4_height) {
        game_over()
    }
}



function hide_bird_window() {
    hide_game_area()
    hide_bird_menu()    
    bird_play_clicked = false
    bird_desktop_clicked = false
    hide_bird_menu_items = false
}

let current_bird_score = 0
let bird_score_adder = 0

let is_playing = true

function bird_score() {
    if (!is_playing) return
    bird_score_adder += game_speed
    text_style_game(current_bird_score, 20, 75)
   

    if (bird_score_adder > 50) {
        current_bird_score += 8
        bird_score_adder = 0     
    }

}



function game_over() {
    is_playing = false
    game.drawImage(game_main_menu_image,
    game_pos_x,
    game_pos_y,
    game_size_x - 4,
    game_size_y)

    text_style_game("SCORE: " + current_bird_score, 20, 75)
    
    bird_play_clicked = false


    character_position_x = 50
    character_position_y = 100

    obstacle1 = 250
    obstacle2 = 386.5
    obstacle3 = 523
    obstacle4 = 659.5

    current_bird_score = 0
}

function bird_game_logic() {

    if (bird_desktop_clicked) {
        window_ui()
        show_bird_menu()
        show_bird_menu_items()
        bird_menu_state()

        if (bird_play_clicked) {
            is_playing = true
            gravity()
            hide_bird_menu()
            hide_bird_menu_items = true
            bird_play_clicked = true

            bird_play_state()
            window_ui()
            bird_score()
            bird_menu_state()
            

        }
    }
    
    else {
        hide_bird_window()
    }
}

const fps_60 = 1000 / 60
setInterval(update, fps_60)

function screensaver_click() {
    screenclick.addEventListener("click", () => {screensaver_active = !screensaver_active})
}

function screen_clicked() {
    if (screensaver_active) {
        wallpaper_counter = 0
        screensaver_timer = 0
        elapsed_ms = 0
        screensaver_active = false
    }
}

window.onmousemove = function(e) {
    e.clientX
    e.clientY
    wallpaper_counter = 0
    screensaver_timer = 0
    elapsed_ms = 0
    screensaver_active = false
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