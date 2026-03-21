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