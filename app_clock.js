/* let current_time 
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
} */