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
    canvas_name.font = "15px Tahoma"
    canvas_name.strokeStyle = "black"
    canvas_name.lineWidth = 0.8
    canvas_name.strokeText(text, x + 0.5, y + 0.5)
    canvas_name.fillStyle = "white"
    canvas_name.fillText(text, x, y)
}

function text_style_game(text, x, y) {
    canvas_name.font = "40px Tahoma"
    canvas_name.strokeStyle = "black"
    canvas_name.lineWidth = 4
    canvas_name.strokeText(text, x + 0, y + 0)
    canvas_name.fillStyle = "white"
    canvas_name.fillText(text, x, y)
}

/* function window_style(text, x, y) {
    canvas_name.font = "40px Tahoma"
    canvas_name.strokeStyle = "black"
    canvas_name.lineWidth = 4
    canvas_name.strokeText(text, x + 0, y + 0)
    canvas_name.fillStyle = "white"
    canvas_name.fillText(text, x, y)
} */

function window_style(ctx, text, x, y) {
    if (ctx.font !== "normal 15px Trebuchet MS") ctx.font = "normal 15px Trebuchet MS";
    if (ctx.strokeStyle !== "black") ctx.strokeStyle = "black";
    if (ctx.lineWidth !== 1) ctx.lineWidth = 1;
    
    ctx.strokeText(text, x + 0.5, y + 0.5);

    if (ctx.fillStyle !== "white") ctx.fillStyle = "white";
    ctx.fillText(text, x, y);
}