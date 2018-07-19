
export default function ToDo(selector) {
    selector = selector || 'body'

    this.contatiner = document.querySelector(selector)
    this.tasks = []

    this.render()
}

ToDo.prototype.addTask = function (newTaskName) {
    const newTask = new Task(newTaskName)

    this.tasks = this.tasks.concat(newTask)

    this.render()
}

ToDo.prototype.removeTask = function (indexOfTaskToRemove) {
    this.tasks = this.tasks.filter((task, i) => i !== indexOfTaskToRemove)

    this.render()
}

ToDo.prototype.toggleCompleted = function (indexOfTaskToToggle) {
    this.tasks[indexOfTaskToToggle].toggleCompleted()

    this.render()
}

ToDo.prototype.render = function () {
    this.contatiner.innerText = ''

    this.renderInterface()

    this.tasks.forEach(this.renderSingleTask.bind(this))
}

ToDo.prototype.renderSingleTask = function (task, i) {
    const div = document.createElement('div')
    const span = document.createElement('span')
    const button = document.createElement('button')

    span.innerText = task.name
    button.innerText = 'Usuń'

    if (task.isCompleted) {
        span.style.textDecoration = 'line-through'
    }

    span.addEventListener(
        'click',
        () => this.toggleCompleted(i)
    )
    button.addEventListener(
        'click',
        () => this.removeTask(i)
    )

    div.appendChild(span)
    div.appendChild(button)
    this.contatiner.appendChild(div)
}

ToDo.prototype.renderInterface = function () {
    const div = document.createElement('div')
    const input = document.createElement('input')
    const button = document.createElement('button')

    button.innerText = 'Dodaj!'

    button.addEventListener(
        'click',
        () => this.addTask(input.value)
    )

    div.appendChild(input)
    div.appendChild(button)
    this.contatiner.appendChild(div)
}

function Task(name) {
    this.name = name
    this.isCompleted = false
}

Task.prototype.toggleCompleted = function () {
    this.isCompleted = !this.isCompleted
}