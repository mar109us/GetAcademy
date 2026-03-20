const c = document.getElementById("draw_area")
const ctx = c.getContext("2d")

const g = document.getElementById("game_area")
const game = g.getContext("2d")

function text_style_1(text, x, y) {
    ctx.font = "40px Tahoma"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 1.5
    ctx.strokeText(text, x + 1, y + 0.4)
    ctx.fillStyle = "white"
    ctx.fillText(text, x, y)
}

function text_style_2(text, x, y) {
    ctx.font = "30px Tahoma"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 1.5
    ctx.strokeText(text, x + 1, y + 0.4)
    ctx.fillStyle = "white"
    ctx.fillText(text, x, y)
}

function text_style_3(text, x, y) {
    ctx.font = "20px Tahoma"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 1.3
    ctx.strokeText(text, x + 0.1, y + 0.1)
    ctx.fillStyle = "white"
    ctx.fillText(text, x, y)
}

function text_style_window(text, x, y) {
    game.font = "15px Tahoma"
    game.strokeStyle = "black"
    game.lineWidth = 0.8
    game.strokeText(text, x + 0.5, y + 0.5)
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

const bg_image = document.getElementById("bg")
const bar_image = document.getElementById("bar")
const wicon_image = document.getElementById("wicon")
const startbar_image = document.getElementById("startbar")
const window1 = document.getElementById("window1")

const profile_image = document.getElementById("profile")
const heart_image = document.getElementById("heart")
const comment_image = document.getElementById("comment")
const share_image = document.getElementById("share")
const tom_image = document.getElementById("tom")
const ad_image = document.getElementById("ad")
const youtube_image = document.getElementById("youtube")
const lightbar_image = document.getElementById("lightbar")
const virus_image = document.getElementById("virus")
const game_bird_image = document.getElementById("game_bird")
const game_main_menu_image = document.getElementById("game_main_menu")
const sunny_logo_image = document.getElementById("sunny_logo")
const flappy_image = document.getElementById("flappy")
const bricks_image = document.getElementById("bricks")

//  window images
const minimize_image = document.getElementById("minimize")
const maximize_image = document.getElementById("maximize")
const close_image = document.getElementById("close")

const window_bottom_bar = document.getElementById("window_bottom_bar")
const window_bottom_left_bar = document.getElementById("window_bottom_left_bar")
const window_bottom_right_bar = document.getElementById("window_bottom_right_bar")
const window_left_bar = document.getElementById("window_left_bar")
const window_right_bar = document.getElementById("window_right_bar")
const window_top_bar = document.getElementById("window_top_bar")
const window_top_left_corner = document.getElementById("window_top_left_corner")
const window_top_right_bar = document.getElementById("window_top_right_bar")

//const  = document.getElementById("")

// get button elements and default to hidden
const video1 = document.getElementById("parrot_source")
const tiktok_button = document.getElementById("tiktok_button")
const explorer_button = document.getElementById("explorer_button")
const tom_button = document.getElementById("tom_button")
const screenclick = document.getElementById("screenclick")
const birdbutton = document.getElementById("birdbutton")
const bird_play_button = document.getElementById("main_menu_button")

function background() {
    ctx.filter = "brightness(90%)"
    ctx.drawImage(bg_image, pos_left, pos_top, max_width, max_height)
}

function taskbar() {
    const set_height = 60
    const icon_size = 60
    const pos_vertical = pos_bot - set_height

    ctx.drawImage(bar_image, pos_left, pos_vertical, max_width, set_height)
    ctx.drawImage(lightbar_image, pos_left + 1900, pos_vertical, 700, set_height)
    ctx.drawImage(startbar_image, pos_left, pos_vertical, 170, set_height)
    ctx.drawImage(wicon_image, pos_left, pos_vertical, icon_size, icon_size)
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
        ctx.drawImage(video1, videopos_x, videopos_y, 480, 854)
        ctx.drawImage(window1, windowpos_x, windowpos_y, 573, 1000)
        text_style_3("TikTok", videopos_x + 10, videopos_y + 8)
        ctx.drawImage(minimize_image, videopos_x + 390, videopos_y - 12, 25, 25)
        ctx.drawImage(maximize_image, videopos_x + 420, videopos_y - 12, 25, 25)
        ctx.drawImage(close_image, videopos_x + 450, videopos_y - 12, 25, 25)
        ctx.drawImage(ad_image, videopos_x + 10, videopos_y + 30, 450, 80)

        const icon_offset = 380
        const iconpos_y = videopos_y + icon_offset
        ctx.drawImage(profile_image, videopos_x + 400, iconpos_y + 20, 70, 70)
        ctx.drawImage(heart_image, videopos_x + 406, iconpos_y + 100, 55, 55) 
        ctx.drawImage(comment_image, videopos_x + 410, iconpos_y + 200, 55, 55) 
        ctx.drawImage(share_image, videopos_x + 405, iconpos_y + 300, 50, 50)

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
        ctx.drawImage(youtube_image, explorerpos_x + 160, explorerpos_y + 60, 2090, 1160)
        ctx.drawImage(window1, explorerwindowpos_x, explorerwindowpos_y, 2500, 1400)
        text_style_3("YouTube - Don't be evil. - Windows Internet Explorer", explorerpos_x + 160, explorerpos_y + 40)
        ctx.drawImage(minimize_image, explorerpos_x + 2150, explorerpos_y + 20, 25, 25)
        ctx.drawImage(maximize_image, explorerpos_x + 2180, explorerpos_y + 20, 25, 25)
        ctx.drawImage(close_image, explorerpos_x + 2210, explorerpos_y + 20, 25, 25)
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
        ctx.drawImage(tom_image, tompos_x + 160, tompos_y + 20, 2090, 1210)
        ctx.drawImage(window1, tomwindowpos_x, tomwindowpos_y, 2500, 1400)
        text_style_3("tom.JPG", tompos_x + 160, tompos_y + 40)
        ctx.drawImage(minimize_image, tompos_x + 2150, tompos_y + 20, 25, 25)
        ctx.drawImage(maximize_image, tompos_x + 2180, tompos_y + 20, 25, 25)
        ctx.drawImage(close_image, tompos_x + 2210, tompos_y + 20, 25, 25)
    }
}

//const double_click_time = 500

let elapsed_ms = 0

let screensaver_timer = 0

const screensaver_set_minutes = 5
let screensaver_start_calc = screensaver_set_minutes * 60 * 1000
let screensaver_set_init = screensaver_start_calc

let screensaver_active = false

//  size speed
const set_cube_x_size_speed = 1000
const set_cube_y_size_speed = 1000
let cube_x_size_speed = set_cube_x_size_speed
let cube_y_size_speed = set_cube_y_size_speed

//  size
const set_cube_size_x = 100
const set_cube_size_y = 100
let cube_size_x = set_cube_size_x
let cube_size_y = set_cube_size_y

// position speed
const set_cube_x_pos_speed = 200 * 1.5
const set_cube_y_pos_speed = 500 * 1.5
let cube_x_pos_speed = set_cube_x_pos_speed
let cube_y_pos_speed = set_cube_y_pos_speed

//  position
const set_cube_pos_x = 1
const set_cube_pos_y = 1
let cube_pos_x = set_cube_pos_x
let cube_pos_y = set_cube_pos_y

// position min/max
const cube_pos_x_min = 0
const cube_pos_y_min = 0

const cube_rotate_interval = 1
let rotate_timer = 0

let wallpaper_counter = 0

function make_dark() {
    ctx.resetTransform()
    ctx.lineWidth = 200
    ctx.fillStyle = `rgba(0,0,0,0)`
    ctx.strokeStyle = `rgba(0,0,0, 0.2000000`
}

function screensaver_loop() {

    const wallpaper_init = 0
    const wallpaper_duration = 750
    const wallpaper_clear_duration = 150

    const wallpaper_run = wallpaper_duration + wallpaper_clear_duration

    const wallpaper1_start = wallpaper_init
    const wallpaper2_start = wallpaper_run
    const wallpaper3_start = wallpaper_run * 2

    let cube_pos_x_max = max_width - cube_size_x
    let cube_pos_y_max = max_height - cube_size_y

    ctx.lineWidth = 0.4

    if (cube_rotate_interval < rotate_timer){
        cube_rotate()
        rotate_timer = 0
    }

    function cube_rotate() {
        ctx.rotate(0.0001)
    }

    //  wallpaper 1 blue
    if (wallpaper_counter > wallpaper1_start && wallpaper_counter < wallpaper1_start + wallpaper_duration) {
        ctx.lineWidth = 0.4
        ctx.fillStyle = `rgba(0,0,0,1)`
        ctx.fillRect(0, 0, max_width, max_height)
        ctx.translate(5, -5)
        ctx.strokeStyle = `rgba(
        ${25 + Math.floor(Math.random() * 25)},
        ${10 + Math.floor(Math.random() * 90)},
        ${125 + Math.floor(Math.random() * 5)},
        ${Math.floor(Math.random() * 10) * 0.11})`   
    }

    //  make dark
    if (wallpaper_counter > wallpaper1_start + wallpaper_duration && wallpaper_counter < wallpaper1_start + wallpaper_run) { 
        make_dark()
    } 

    //  wallpaper red
    if (wallpaper_counter > wallpaper2_start && wallpaper_counter < wallpaper2_start + wallpaper_duration) {
        ctx.lineWidth = 0.4
        ctx.fillStyle = `rgba(0,0,0,0)`
        ctx.fillRect(0, 0, max_width, max_height)
        ctx.translate(5, -5)
        ctx.strokeStyle = `rgba(
        ${100 + Math.floor(Math.random() * 155)},
        ${50 + Math.floor(Math.random() * 40)},
        ${10 + Math.floor(Math.random() * 10)},
        ${Math.floor(Math.random() * 10) * 0.07})`
    } 

    if (wallpaper_counter > wallpaper2_start + wallpaper_duration && wallpaper_counter < wallpaper2_start + wallpaper_run) { 
        make_dark()
    } 

    //  wallpaper green
    if (wallpaper_counter > wallpaper3_start && wallpaper_counter < wallpaper3_start + wallpaper_duration) {
        ctx.lineWidth = 0.4    
        ctx.fillStyle = `rgba(0,0,0,0)`
        ctx.fillRect(0, 0, max_width, max_height)
        ctx.translate(5, -5)
        ctx.strokeStyle = `rgba(
        ${10 + Math.floor(Math.random() * 10)},
        ${100 + Math.floor(Math.random() * 155)},
        ${50 + Math.floor(Math.random() * 10)},
        ${Math.floor(Math.random() * 10) * 0.03})`
    }

    if (wallpaper_counter > wallpaper3_start + wallpaper_duration && wallpaper_counter < wallpaper3_start + wallpaper_run) { 
        make_dark()
    } 

    if (wallpaper_counter === wallpaper3_start + wallpaper_run) {
        make_dark()
        wallpaper_counter = 0
    }

    ctx.beginPath();
    ctx.arc(Math.floor(Math.random() * cube_pos_x), Math.floor(Math.random() * cube_pos_y), 500, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.beginPath();
    ctx.arc(Math.floor(Math.random() * cube_pos_x), Math.floor(Math.random() * cube_pos_y), 1000, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.beginPath();
    ctx.arc(Math.floor(Math.random() * cube_pos_x), Math.floor(Math.random() * cube_pos_y), 2000, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.beginPath();
    ctx.arc(Math.floor(Math.random() * cube_pos_x), Math.floor(Math.random() * cube_pos_y), 2500, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.beginPath();
    ctx.arc(Math.floor(Math.random() * cube_pos_x), Math.floor(Math.random() * cube_pos_y), 2800, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.beginPath();
    ctx.arc(Math.floor(Math.random() * cube_pos_x), Math.floor(Math.random() * cube_pos_y), 2900, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.beginPath();
    ctx.arc(Math.floor(Math.random() * cube_pos_x), Math.floor(Math.random() * cube_pos_y), 3000, 0, 2 * Math.PI)
    ctx.stroke()

    //  x size
    if (cube_size_x >= set_cube_size_x) {
        cube_x_size_speed = -set_cube_x_size_speed
    }
    else if (cube_size_x <= 0) {
        cube_x_size_speed = set_cube_x_size_speed
    }

    //  y size
    if (cube_size_y >= set_cube_size_y) {
        cube_y_size_speed = -set_cube_y_size_speed
    }
    else if (cube_size_y <= 0) {
        cube_y_size_speed = set_cube_y_size_speed
    }

    //  x pos
    if (cube_pos_x >= cube_pos_x_max) {
        cube_x_pos_speed = -set_cube_x_pos_speed
    }
    else if (cube_pos_x <= cube_pos_x_min) {
        cube_x_pos_speed = set_cube_x_pos_speed
    }

    //  y pos
    if (cube_pos_y >= cube_pos_y_max) {
        cube_y_pos_speed = -set_cube_y_pos_speed
    }

    else if (cube_pos_y <= cube_pos_y_min) {
        cube_y_pos_speed = set_cube_y_pos_speed
    }

    cube_size_x += cube_x_size_speed
    cube_size_y += cube_y_size_speed
    cube_pos_x += cube_x_pos_speed
    cube_pos_y += cube_y_pos_speed
}

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
    document.getElementById("game_area").style.display = "block"
}

function hide_game_area() {
    document.getElementById("game_area").style.display = "none"
}

let game_speed = 4

const jump_height = 80

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


const character_size_x = 75
const character_size_y = 60

let character_offset_x = 50
let character_offset_y = 100

let character_position_x = game_pos_x + character_offset_x
let character_position_y = game_pos_y + character_offset_y

let character_max_pos_y = game_pos_y + game_size_y - character_size_y

let character_min_pos_y = game_pos_y + character_size_y

let hide_bird_menu_items = false

let bird_desktop_clicked = true /////////////// testing

let bird_play_clicked = true ///////////////// testing


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
    game_size_x,
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
    }

    if (obstacle2 <= game_pos_x - 50) {
        obstacle2 = game_size_x
    }

    if (obstacle3 <= game_pos_x - 50) {
        obstacle3 = game_size_x
    }

    if (obstacle4 <= game_pos_x - 50) {
        obstacle4 = game_size_x
    }    

    game.fillRect(obstacle1, game_pos_y, 50, 100)
    game.fillRect(obstacle1, game_pos_y + game_size_y -100, 50, 100)

    game.fillRect(obstacle2, game_pos_y, 50, 100)
    game.fillRect(obstacle2, game_pos_y + game_size_y -100, 50, 100)

    game.fillRect(obstacle3, game_pos_y, 50, 100)
    game.fillRect(obstacle3, game_pos_y + game_size_y -100, 50, 100)

    game.fillRect(obstacle4, game_pos_y, 50, 100)
    game.fillRect(obstacle4, game_pos_y + game_size_y -100, 50, 100)

    game.drawImage(game_bird_image,
    character_position_x,
    character_position_y,
    character_size_x,
    character_size_y)

    ///////////////     Collision

/*     if (character_position_x == game_size_x + background_move - character_size_x) {
    hide_game_area()
    hide_bird_menu()    
    bird_play_clicked = false
    bird_desktop_clicked = false
    hide_bird_menu_items = false
    } */

}

function hide_bird_window() {
    hide_game_area()
    hide_bird_menu()    
    bird_play_clicked = false
    bird_desktop_clicked = false
    hide_bird_menu_items = false
}

function bird_game_logic() {

    if (bird_desktop_clicked) {
        show_bird_menu()
        show_bird_menu_items()
        bird_menu_state()

        if (bird_play_clicked) {
            gravity()
            hide_bird_menu()
            hide_bird_menu_items = true

           
            bird_play_state()
            window_ui()
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
        ctx.resetTransform()

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