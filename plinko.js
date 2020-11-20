class Plinko {
    constructor(x, y) {
        var options = {
            isStatic:true,
            density: 1.5
        }
        this.body = Bodies.circle(x, y, 50, options);
        World.add(world, this.body)
    }
    display() {
        push()
        stroke("black")
        strokeWeight(2)
        fill("white")
        ellipseMode(CENTER)
        ellipse(this.body.position.x, this.body.position.y, 100, 100)
        pop();
    }
}