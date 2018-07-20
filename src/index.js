import { myName as magdaName } from './mySecondModule'
import { showMyName } from './mySecondModule'
import myOwnName from './defaultExport'
import allSays, { say1, say2, say3 } from './manyExports'
import ToDo from './ToDo'
import { Car, Verhicle } from './CarWithIntheritance'



console.log(magdaName)

showMyName()

myOwnName()

say1()
say2()
say3()

console.log(allSays)

new ToDo('#root')



console.log(new Verhicle('Brumbrumbrum'))

console.log(new Car())


