
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