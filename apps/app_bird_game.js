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



const game_size_x = 500 - 4
const game_size_y = 400 - 36

const window_size_x = 500
const window_size_y = 400

function window_ui() {
    canvas_name.drawImage(window_bottom_bar, 4, window_size_y - 4, window_size_x - 8, 5)
    canvas_name.drawImage(window_bottom_left_bar, -1, window_size_y - 4, 5, 5)
    canvas_name.drawImage(window_bottom_right_bar, window_size_x - 4, window_size_y - 4, 5, 5)
    canvas_name.drawImage(window_left_bar, -1, 16, 5, window_size_y - 19)
    canvas_name.drawImage(window_right_bar, window_size_x - 4, 16, 5, window_size_y - 19)
    canvas_name.drawImage(window_top_bar, 5, 0, window_size_x - 10, 16 * 2)
    canvas_name.drawImage(window_top_left_corner, 0, 0, 5, 16 * 2)
    canvas_name.drawImage(window_top_right_bar, window_size_x - 5, 0, 5, 16 * 2)

    text_style_window("Flappy Bird - It's Always Sunny in Philadelphia Version", 10, 23)
    canvas_name.drawImage(minimize_image, window_size_x - 84, 4, 25, 25)
    canvas_name.drawImage(maximize_image, window_size_x - 57, 4, 25, 25)
    canvas_name.drawImage(close_image, window_size_x - 30, 4, 25, 25)
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

function jump(e) {

    if (e.code === "Space") {

        if (character_min_pos_y < character_position_y) {
            character_position_y -= jump_height
        }
    }
}

document.addEventListener('keydown', jump)

const main_menu_size_x_offset = 4

const flappy_image_pos_x_offset = 60
const flappy_image_pos_y_offset = 60
const flappy_image_size_x = 400
const flappy_image_size_y = 200

const sunny_logo_pos_x_offset = 200
const sunny_logo_pos_y_offset = 50
const sunny_logo_size_x = 300
const sunny_logo_size_y = 150

function show_bird_menu_items() {
    if (hide_bird_menu_items) return
    show_game_area()

    canvas_name.drawImage(game_main_menu_image,
    game_pos_x,
    game_pos_y,
    game_size_x - main_menu_size_x_offset,
    game_size_y)

    canvas_name.drawImage(flappy_image,
    game_pos_x - flappy_image_pos_x_offset,
    game_pos_y - flappy_image_pos_y_offset,
    flappy_image_size_x,
    flappy_image_size_y)

    canvas_name.drawImage(sunny_logo_image,
    game_pos_x + sunny_logo_pos_x_offset,
    game_pos_y + sunny_logo_pos_y_offset,
    sunny_logo_size_x,
    sunny_logo_size_y)
}

function gravity() {
    if (character_position_y >= character_max_pos_y) {
    }
        
    else if (character_position_y < character_max_pos_y) {
        character_position_y += game_speed
    }
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

let obstacle1_init_pos_x = 250
let obstacle2_init_pos_x = 386.5
let obstacle3_init_pos_x = 523
let obstacle4_init_pos_x = 659.5

function obstacle_scroll() {
    obstacle1_init_pos_x = obstacle1_init_pos_x - game_speed
    obstacle2_init_pos_x = obstacle2_init_pos_x - game_speed
    obstacle3_init_pos_x = obstacle3_init_pos_x - game_speed
    obstacle4_init_pos_x = obstacle4_init_pos_x - game_speed
}

function bird_play_state() {
    
    background_scroll()
    obstacle_scroll()

    canvas_name.drawImage(bricks_image, background1_x, game_pos_y, game_size_x, game_size_y)
    canvas_name.drawImage(bricks_image, background2_x, game_pos_y, game_size_x, game_size_y)

    if (background1_x <= game_pos_x - game_size_x) {
        background1_x = game_size_x
    }

    if (background1_x == game_pos_x){
        background2_x = game_size_x
    }

    if (background2_x <= game_pos_x - game_size_x) {
        background2_x = game_size_x
    }

    if (obstacle1_init_pos_x <= game_pos_x - obstacle_width) {
        obstacle1_init_pos_x = game_size_x
        top_obstacle1_height = Math.floor(Math.random() * 80)
        bot_obstacle1_height = Math.floor(Math.random() * 200)
    }

    if (obstacle2_init_pos_x <= game_pos_x - obstacle_width) {
        obstacle2_init_pos_x = game_size_x
        top_obstacle2_height = Math.floor(Math.random() * 140)
        bot_obstacle2_height = Math.floor(Math.random() * 140)
    }

    if (obstacle3_init_pos_x <= game_pos_x - obstacle_width) {
        obstacle3_init_pos_x = game_size_x
        top_obstacle3_height = Math.floor(Math.random() * 200)
        bot_obstacle3_height = Math.floor(Math.random() * 80)
    }

    if (obstacle4_init_pos_x <= game_pos_x - obstacle_width) {
        obstacle4_init_pos_x = game_size_x
        top_obstacle4_height = Math.floor(Math.random() * 140)
        bot_obstacle4_height = Math.floor(Math.random() * 140)
    }    

    canvas_name.fillRect(obstacle1_init_pos_x, 
        game_pos_y,
        obstacle_width,
        top_obstacle1_height)

    canvas_name.fillRect(obstacle1_init_pos_x,
        game_pos_y + game_size_y - bot_obstacle1_height,
        obstacle_width,
        bot_obstacle1_height)

    canvas_name.fillRect(obstacle2_init_pos_x,
        game_pos_y,
        obstacle_width,
        top_obstacle2_height)

    canvas_name.fillRect(obstacle2_init_pos_x,
        game_pos_y + game_size_y - bot_obstacle2_height,
        obstacle_width,
        bot_obstacle2_height)

    canvas_name.fillRect(obstacle3_init_pos_x,
        game_pos_y,
        obstacle_width,
        top_obstacle3_height)

    canvas_name.fillRect(obstacle3_init_pos_x,
        game_pos_y + game_size_y - bot_obstacle3_height,
        obstacle_width,
        bot_obstacle3_height)

    canvas_name.fillRect(obstacle4_init_pos_x,
        game_pos_y,
        obstacle_width,
        top_obstacle4_height)

    canvas_name.fillRect(obstacle4_init_pos_x,
        game_pos_y + game_size_y - bot_obstacle4_height,
        obstacle_width,
        bot_obstacle4_height)

    canvas_name.drawImage(game_bird_image,
        character_position_x,
        character_position_y,
        character_size_x,
        character_size_y)

    let obstacle1_right_edge = obstacle1_init_pos_x + obstacle_width
    let obstacle2_right_edge = obstacle2_init_pos_x + obstacle_width
    let obstacle3_right_edge = obstacle3_init_pos_x + obstacle_width
    let obstacle4_right_edge = obstacle4_init_pos_x + obstacle_width

    let top_obstacle1_bottom_edge = game_pos_y + top_obstacle1_height
    let top_obstacle2_bottom_edge = game_pos_y + top_obstacle2_height
    let top_obstacle3_bottom_edge = game_pos_y + top_obstacle3_height
    let top_obstacle4_bottom_edge = game_pos_y + top_obstacle4_height

    let character_right_edge = character_position_x + character_size_x
    let character_bottom_edge = character_position_y + character_size_y

    let bottom_obstacle1_top_edge = game_pos_y + game_size_y - bot_obstacle1_height
    let bottom_obstacle2_top_edge = game_pos_y + game_size_y - bot_obstacle2_height
    let bottom_obstacle3_top_edge = game_pos_y + game_size_y - bot_obstacle3_height
    let bottom_obstacle4_top_edge = game_pos_y + game_size_y - bot_obstacle4_height

    if (obstacle1_right_edge > character_right_edge &&
        obstacle1_init_pos_x < character_right_edge &&
        character_position_y < top_obstacle1_bottom_edge) {
        game_over()
    }

    if (obstacle2_right_edge > character_right_edge &&
        obstacle2_init_pos_x < character_right_edge &&
        character_position_y < top_obstacle2_bottom_edge) {
        game_over()
    }

    if (obstacle3_right_edge > character_right_edge &&
        obstacle3_init_pos_x < character_right_edge &&
        character_position_y < top_obstacle3_bottom_edge) {
        game_over()
    }

    if (obstacle4_right_edge > character_right_edge &&
        obstacle4_init_pos_x < character_right_edge &&
        character_position_y < top_obstacle4_bottom_edge) {
        game_over()
    }

    if (obstacle1_right_edge > character_position_x &&
        obstacle1_init_pos_x < character_right_edge &&
        character_bottom_edge > bottom_obstacle1_top_edge) {
        game_over()
    }

    if (obstacle2_right_edge > character_right_edge &&
        obstacle2_init_pos_x < character_right_edge &&
        character_bottom_edge > bottom_obstacle2_top_edge) {
        game_over()
    }

    if (obstacle3_right_edge > character_right_edge &&
        obstacle3_init_pos_x < character_right_edge &&
        character_bottom_edge > bottom_obstacle3_top_edge) {
        game_over()
    }

    if (obstacle4_right_edge > character_right_edge &&
        obstacle4_init_pos_x < character_right_edge &&
        character_bottom_edge > bottom_obstacle4_top_edge) {
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
    canvas_name.drawImage(game_main_menu_image,
    game_pos_x,
    game_pos_y,
    game_size_x - 4,
    game_size_y)

    text_style_game("SCORE: " + current_bird_score, 20, 75)
    
    bird_play_clicked = false

    character_position_x = 50
    character_position_y = 100

    obstacle1_init_pos_x = 250
    obstacle2_init_pos_x = 386.5
    obstacle3_init_pos_x = 523
    obstacle4_init_pos_x = 659.5

    current_bird_score = 0
}

function bird_game_logic() {

    if (bird_desktop_clicked) {
        window_ui()
        show_bird_menu()
        show_bird_menu_items()

        if (bird_play_clicked) {
            is_playing = true
            gravity()
            hide_bird_menu()
            hide_bird_menu_items = true
            bird_play_clicked = true

            bird_play_state()
            window_ui()
            bird_score()
        }
    }
    
    else {
        hide_bird_window()
    }
}