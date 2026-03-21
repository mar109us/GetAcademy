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
    os.resetTransform()
    os.lineWidth = 200
    os.fillStyle = `rgba(0,0,0,0)`
    os.strokeStyle = `rgba(0,0,0, 0.2000000`
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

    os.lineWidth = 0.4

    if (cube_rotate_interval < rotate_timer){
        cube_rotate()
        rotate_timer = 0
    }

    function cube_rotate() {
        os.rotate(0.0001)
    }

    //  wallpaper 1 blue
    if (wallpaper_counter > wallpaper1_start && wallpaper_counter < wallpaper1_start + wallpaper_duration) {
        os.lineWidth = 0.4
        os.fillStyle = `rgba(0,0,0,1)`
        os.fillRect(0, 0, max_width, max_height)
        os.translate(5, -5)
        os.strokeStyle = `rgba(
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
        os.lineWidth = 0.4
        os.fillStyle = `rgba(0,0,0,0)`
        os.fillRect(0, 0, max_width, max_height)
        os.translate(5, -5)
        os.strokeStyle = `rgba(
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
        os.lineWidth = 0.4    
        os.fillStyle = `rgba(0,0,0,0)`
        os.fillRect(0, 0, max_width, max_height)
        os.translate(5, -5)
        os.strokeStyle = `rgba(
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

    os.beginPath();
    os.arc(Math.floor(Math.random() * cube_pos_x), Math.floor(Math.random() * cube_pos_y), 500, 0, 2 * Math.PI)
    os.stroke()

    os.beginPath();
    os.arc(Math.floor(Math.random() * cube_pos_x), Math.floor(Math.random() * cube_pos_y), 1000, 0, 2 * Math.PI)
    os.stroke()

    os.beginPath();
    os.arc(Math.floor(Math.random() * cube_pos_x), Math.floor(Math.random() * cube_pos_y), 2000, 0, 2 * Math.PI)
    os.stroke()

    os.beginPath();
    os.arc(Math.floor(Math.random() * cube_pos_x), Math.floor(Math.random() * cube_pos_y), 2500, 0, 2 * Math.PI)
    os.stroke()

    os.beginPath();
    os.arc(Math.floor(Math.random() * cube_pos_x), Math.floor(Math.random() * cube_pos_y), 2800, 0, 2 * Math.PI)
    os.stroke()

    os.beginPath();
    os.arc(Math.floor(Math.random() * cube_pos_x), Math.floor(Math.random() * cube_pos_y), 2900, 0, 2 * Math.PI)
    os.stroke()

    os.beginPath();
    os.arc(Math.floor(Math.random() * cube_pos_x), Math.floor(Math.random() * cube_pos_y), 3000, 0, 2 * Math.PI)
    os.stroke()

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