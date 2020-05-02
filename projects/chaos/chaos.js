var dot = [0, 0]
var points = [[0, 0], [0, 0], [0, 0]]
var point_size = 10
var dot_size = 5
var iters = 0
var num_points = 3
var pause
var point_selected = false

function setup() {
    createCanvas(innerWidth, innerHeight);
    textSize(20)
    background(0);
    stroke(255, 0, 0);
    fill(255, 0, 0);
    points = [[(width + width/6)/2, innerHeight/4, false], [(width + width/6)/4, height*3/4, false], [(width + width/6)*3/4, height*3/4, false]]
    for (var i = 0; i < points.length; i++)
        ellipse(points[i][0], points[i][1], point_size)
    stroke(255)
    fill(255)
    dot = [random(points[2][0], points[1][0]), random(points[0][1], points[1][1])]
    iters = 0
    pause = true
    point_selected = false
}

function draw(){
    if (!pause){
        iters++;
        stroke(255)
        fill(255)
        var r = floor(random(0, num_points))
        dot[0] = (dot[0] + points[r][0])/2
        dot[1] = (dot[1] + points[r][1])/2
        ellipse(dot[0], dot[1], dot_size)
    }
    display_stats()
    display_points()
}

function display_points(){
    stroke(255, 0, 0);
    fill(255, 0, 0);
    for (var i = 0; i < points.length; i++)
        ellipse(points[i][0], points[i][1], point_size)
}

function display_stats(){
    stroke(0)
    fill(100)
    rect(0, 0, width/6, height)
    fill(255)
    text("Iterations = " + iters, 10, 50)
    text("n = " + num_points, 10, 100)
    text("dot size = " + dot_size, 10, 150)
    text("location = (" + round(dot[0]) + ", " + round(dot[1]) + ")", 10, 200)
    text("Instructions:", 10, 600)
    text("\'space\' : start / pause", 10, 650)
    text("\'+\' : add point", 10, 700)
    text("\'-\' : remove last point", 10, 750)
    text("click and drag : \n\t move a point", 10, 800)

}

function add_point(){
    points.push([mouseX, mouseY, false])
    num_points++
}

function remove_point(){
    fill(0)
    stroke(0)
    if (num_points > 3){
        ellipse(points[points.length - 1][0], points[points.length - 1][1], point_size + 3)
        points.pop(points.length - 1)
        num_points--
    }
}

function keyPressed(){
    if (keyCode == 82) setup()
    if (keyCode == 32) pause = !pause
    if (keyCode == 187) add_point()
    if (keyCode == 189) remove_point()
}

function mousePressed(){
    if (!point_selected) {
        for (var i = 0; i < points.length; i++){
            if (mouseX > points[i][0] - point_size && mouseX < points[i][0] + point_size){
                if (mouseY > points[i][1] - point_size && mouseY < points[i][1] + point_size){
                    points[i][2] = true
                    point_selected = true
                    break
                }
            }
        }
    }
}

function mouseReleased(){
    if (point_selected) {
        for (var i = 0; i < points.length; i++){
            if (points[i][2]){
                fill(0)
                stroke(0)
                ellipse(points[i][0], points[i][1], point_size + 3)
                points[i][0] = mouseX
                points[i][1] = mouseY
                points[i][2] = false
                point_selected = false
                break
            }
        }
    }
}
