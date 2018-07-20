class Car {
    constructor(model){
        this.sound = 'Wrrrrr'
        this.model = model
    }

    makeSound = () => {console.log(this.sound)}
} 

export default Car