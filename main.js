canvas = document.getElementByID("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
var radius = "0";
var line_width = "10";
canvas.addEventListener("mousedown", my_mouseDown)
function my_mouseDown(e) {
    color = document.getElementByID("color").value;
    line_width = document.getElementByID("width").value;
    radius = document.getElementByID("radius").value;
    MouseEvent = "mouseDown";
}
function my_mouseMove(e) {
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientX - canvas.offsetTop;
    if (MouseEvent == "mouseDown") {
        console.log("current position of mouse X & Y = ");
        console.log("x = " + current_position_of_mouse_X + "y = " + current_position_of_mouse_Y);
        ctx.beginpath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.arc(current_position_of_mouse_X, current_position_of_mouse_Y, 0, 2, Math.PI);
        ctx.stroke();
    }
}