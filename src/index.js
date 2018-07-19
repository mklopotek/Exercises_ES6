import { myName as magdaName } from './mySecondModule'
import { showMyName } from './mySecondModule'
import myOwnName from './defaultExport'
import allSays,{ say1, say2, say3 } from './manyExports'

console.log(magdaName)

showMyName()

myOwnName()

say1() 
say2() 
say3()

console.log(allSays)

