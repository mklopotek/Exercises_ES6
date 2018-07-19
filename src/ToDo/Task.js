export default function Task(name) {
    this.name = name
    this.isCompleted = false
}

Task.prototype.toggleCompleted = function () {
    this.isCompleted = !this.isCompleted
}