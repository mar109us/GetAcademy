const c = document.getElementById("draw_area")
const ctx = c.getContext("2d")

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
const minimize_image = document.getElementById("minimize")
const maximize_image = document.getElementById("maximize")
const close_image = document.getElementById("close")
const profile_image = document.getElementById("profile")
const heart_image = document.getElementById("heart")
const comment_image = document.getElementById("comment")
const share_image = document.getElementById("share")
const tom_image = document.getElementById("tom")
const ad_image = document.getElementById("ad")
const youtube_image = document.getElementById("youtube")
const lightbar_image = document.getElementById("lightbar")
const virus_image = document.getElementById("virus")

//const  = document.getElementById("")

// get button elements and default to hidden
const video1 = document.getElementById("parrot_source")
const tiktok_button = document.getElementById("tiktok_button")
const explorer_button = document.getElementById("explorer_button")
const tom_button = document.getElementById("tom_button")
const screenclick = document.getElementById("screenclick")

function background() {
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
const screensaver_set_init = 3000

let clicked_screensaver = false

function screensaver() {
    ctx.fillStyle = "black"     //background
    ctx.fillRect(0, 0, max_width, max_height)
}

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

function reset_transform() {
    ctx.resetTransform()
}

function screensaver_loop() {

    let cube_pos_x_max = max_width - cube_size_x
    let cube_pos_y_max = max_height - cube_size_y

    ctx.lineWidth = 0.15

    if (cube_rotate_interval < rotate_timer){
        cube_rotate()
        rotate_timer = 0
    }

    if (wallpaper_counter === 501) {  
        reset_transform()
    } 
    if (wallpaper_counter === 1001) {  
        reset_transform()
    } 
    if (wallpaper_counter === 1501) {  
        reset_transform()
        wallpaper_counter = 0
    } 

    function cube_rotate() {
        /* ctx.translate(5000, 5000) */
/*         ctx.translate(-3, 9) */
        ctx.translate(0, 12)
        ctx.rotate(0.0001)
    }

    if (wallpaper_counter > 0 && wallpaper_counter < 500) {
        ctx.strokeStyle = `rgba(
            ${10 + Math.floor(Math.random() * 15)},
            ${10 + Math.floor(Math.random() * 18)},
            ${30 + Math.floor(Math.random() * 3)},
            ${Math.floor(Math.random() * 10) * 0.8})`   
    }

    if (wallpaper_counter > 502 && wallpaper_counter < 1000) {  
        ctx.strokeStyle = `rgba(
            ${25 + Math.floor(Math.random() * 15)},
            ${5 + Math.floor(Math.random() * 10)},
            ${5 + Math.floor(Math.random() * 5)},
            ${Math.floor(Math.random() * 10) * 0.8})`
        } 

    if (wallpaper_counter > 1002 && wallpaper_counter < 1500) {  
        ctx.strokeStyle = `rgba(
            ${15 + Math.floor(Math.random() * 6)},
            ${25 + Math.floor(Math.random() * 2)},
            ${5 + Math.floor(Math.random() * 6)},
            ${Math.floor(Math.random() * 10) * 0.8})`
    } 
    
/*     ctx.strokeRect(cube_pos_x, cube_pos_y, cube_size_x, cube_size_y)
    ctx.strokeRect(cube_pos_x / 5, cube_pos_y / 3, cube_size_x / 2, cube_size_y / 2)
    ctx.strokeRect(cube_pos_x * 2, cube_pos_y * 2, cube_size_x * 2, cube_size_y * 2) */

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

function screensaver_click() {
    screenclick.addEventListener("click", () => {clicked_screensaver = !clicked_screensaver})
}

function screen_clicked() {
    if (clicked_screensaver) {
        screensaver_timer = 0
        elapsed_ms = 0
        clicked_screensaver = false
    }
}

const fps_60 = 1000 / 60
setInterval(update, fps_60)

let ui_visibility = document.getElementsByClassName('ui')[0]
let screenclick_visibility = document.getElementsByClassName('screenclick')[0]

function update(){ 
    elapsed_ms += fps_60    // storage of elapsed time in ms
    screensaver_timer += fps_60

    if (screensaver_timer > screensaver_set_init) {
        screensaver()
        screensaver_loop()
        screen_clicked()
        ui_visibility.style.visibility = "hidden"
        screenclick_visibility.style.visibility = "visible"
        rotate_timer += fps_60

        // hide drawing of screensaver
        ctx.fillStyle = "black"    
        ctx.fillRect(0, 0, max_width, max_height)

        wallpaper_counter++
        console.log(wallpaper_counter)
    }

    else {
        ctx.resetTransform();
        ui_visibility.style.visibility = "visible"
        screenclick_visibility.style.visibility = "hidden"
        background()
        taskbar()
        clock()
        show_explorer()
        show_tom()
        show_tiktok()
    }
}

tiktok_click()
explorer_click()
tom_click()
screensaver_click()

})







