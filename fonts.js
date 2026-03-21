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