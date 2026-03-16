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
    
function mainwindow() {

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

    let is_video_visible = false
    let is_explorer_visible = false
    let is_tom_visible = false
    
    function background() {
        // position background
        ctx.drawImage(bg_image, pos_left, pos_top, max_width, max_height)
    }

    function taskbar() {
        // sizes
        const set_height = 60
        const icon_size = 60

        // calculate position to avoid using negative for sizing
        const pos_vertical = pos_bot - set_height

        // taskbar position
        ctx.drawImage(bar_image, pos_left, pos_vertical, max_width, set_height)
        ctx.drawImage(lightbar_image, pos_left + 1900, pos_vertical, 700, set_height)
        ctx.drawImage(startbar_image, pos_left, pos_vertical, 170, set_height)
        ctx.drawImage(wicon_image, pos_left, pos_vertical, icon_size, icon_size)
        text_style_1("start", pos_left + 60, pos_vertical + 45)
        //ctx.drawImage(virus_image, 100, 100, 100, 100)

        
        function clock() {
            var date = new Date()
            ms1970 = date.getTime()
            text_style_2(`${ms1970}ms since 01-01-1970`, pos_left + 2050, pos_vertical + 43)
        }
        clock()
        
    }

    // move tiktok
    const videopos_x = 1000
    const videopos_y = 200
    const windowpos_x = videopos_x - 48
    const windowpos_y = videopos_y - 80

    function tiktok_click() {
        tiktok_button.addEventListener("click", () => {
            is_video_visible = !is_video_visible
        })
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

    // move explorer
    const explorerpos_x = 250
    const explorerpos_y = 50
    const explorerwindowpos_x = explorerpos_x - 48
    const explorerwindowpos_y = explorerpos_y - 80

    function explorer_click() {
        explorer_button.addEventListener("click", () => {
        is_explorer_visible = !is_explorer_visible
        })
    }

    function show_explorer() {
        if (is_explorer_visible) {
            ctx.drawImage(youtube_image, explorerpos_x + 160, explorerpos_y + 60, 2090, 1160)
            ctx.drawImage(window1, explorerwindowpos_x, explorerwindowpos_y, 2500, 1400)
            text_style_3("YouTube - Don't be evil. - Windows Internet Explorer", explorerpos_x + 160, explorerpos_y + 40)
            ctx.drawImage(minimize_image, explorerpos_x + 2150, explorerpos_y + 20, 25, 25)
            ctx.drawImage(maximize_image, explorerpos_x + 2180, explorerpos_y + 20, 25, 25)
            ctx.drawImage(close_image, explorerpos_x + 2210, explorerpos_y + 20, 25, 25)
        }

    }

    // move tom
    const tompos_x = 250
    const tompos_y = 50
    const tomwindowpos_x = tompos_x - 48
    const tomwindowpos_y = tompos_y - 80

    function tom_click() {
        tom_button.addEventListener("click", () => {
        is_tom_visible = !is_tom_visible
        })
    }

    function show_tom() {
        if (is_tom_visible) {
            ctx.drawImage(tom_image, tompos_x + 160, tompos_y + 20, 2090, 1210)
            ctx.drawImage(window1, tomwindowpos_x, tomwindowpos_y, 2500, 1400)
            text_style_3("tom.JPG", tompos_x + 160, tompos_y + 40)
            ctx.drawImage(minimize_image, tompos_x + 2150, tompos_y + 20, 25, 25)
            ctx.drawImage(maximize_image, tompos_x + 2180, tompos_y + 20, 25, 25)
            ctx.drawImage(close_image, tompos_x + 2210, tompos_y + 20, 25, 25)
        }

    }





    function update() {
        background()
        taskbar()
        show_tiktok()
        show_explorer()
        show_tom()

        requestAnimationFrame(update)

    }
    update()
    tiktok_click()
    explorer_click()
    tom_click()
}
mainwindow()
})







