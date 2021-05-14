// Add your Circle class here
let pi = Math.PI

class Circle {
    constructor(radius){
        this.radius = radius;
    }
    get area(){
        return (this.radius ** 2) * pi
    }
    set area(newRadius){
        this.radius = Math.sqrt(newRadius) / pi
    }

    get diameter(){
        return this.radius * 2
    }

    set diameter(newDiameter){
        this.radius = newDiameter / 2
    }

    get circumference(){
        return this.diameter * pi
    }

    set circumference(newCircumference){
        this.radius = (newCircumference) / (2 * pi)
    }


}