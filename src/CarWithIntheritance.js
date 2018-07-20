export class Verhicle {
    constructor(sound){
        this.sound = sound
    }

    makeSound(){
        console.log(this.sound)
    }
}

export class Car extends Verhicle {
    constructor (){
        super('Wrrrrr')
        this.wheels = 4
        this.fuelTank = true
    }
}