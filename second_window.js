const window_test = new DesktopWindow("test", 200, 100, 600, 500)

window_test.onRenderContent = test

function test(ctx, focus_window, current_pos_x, current_pos_y, pos_x, pos_y, size_x, size_y, currentzindex) {

console.log(currentzindex, "testwindow")

}