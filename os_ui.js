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