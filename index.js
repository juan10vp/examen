//programa mostrar menu de 4 opciones suma, resta, multiplicacion y division
//que seleciones una opcion y despues seleccionar la opcion solicite dos numeros
//numero 1 y numeros 2
//node const color = require('colors') // es la biblioteca para los colores
//const readlineSync = require('readLine-sync')
const color = require('colors')
const readlinesync = require('readline-sync')
var Numero1
var Numero2
var resultado

console.log("menu de opciones")
console.log("1.SUMA \n 2.RESTA \n 3.MULTIPLICACION \n 4-DIVISION")

 opcion =readlinesync.questionInt("Opcion: ")

switch(opcion)
{
    case 1:
      console.log("Ingresa dos numeros para que se sumen : \n")
      console.log(`${color.green('Numero 1: ')}`)
      Numero1 = readlinesync.question("")
      console.log(`${color.blue('Numero 2: ')}`)
      Numero2 = readlinesync.question("")

      resultado = parseInt(Numero1) + parseInt(Numero2)
      console.log(`La ${color.yellow('suma')} de ${Numero1.green} + ${Numero2.blue} es: ${color.yellow(resultado)}`)
    break
    case 2:
    console.log("Ingresa dos numeros para que se resten: \n")
    console.log(`${color.green('Numero 1: ')}`)
    Numero1 = readlinesync.question("")
    console.log(`${color.blue('Numero 2: ')}`)
    Numero2 = readlinesync.question("")

    resultado = parseInt(Numero1) - parseInt(Numero2)
    console.log(`La ${color.yellow('resta')} de ${Numero1.green} + ${Numero2.blue} es: ${color.yellow(resultado)}`)
    break

    case 3:
      console.log("Ingrese dos numeros para multiplicarlos  \n")
      console.log(`${color.green('Numero 1: ')}`)
      Numero1 = readlinesync.question("")
      console.log(`${color.blue('Numero 2: ')}`)
      Numero2 = readlinesync.question("")

      resultado = parseInt(Numero1) * parseInt(Numero2)
      console.log(`La ${color.yellow('multiplicacion')} de ${Numero1.green} + ${Numero2.blue} es: ${color.yellow(resultado)}`)
    break
    case 4:
      console.log("Ingresa dos numeros para dividirlos: \n")
      console.log("NOTA: recuerda que el divisor tiene que ser diferente de cero pues seria indeterminado \n")
      console.log(`${color.green('Numero 1: ')}`)
       Numero1 = readlinesync.question("")
      console.log(`${color.blue('Numero 2: ')}`)
       Numero2 = readlinesync.question("")

       resultado = parseInt(Numero1) / parseInt(Numero2)
      console.log(`La ${color.yellow('division')} de ${Numero1.green} + ${Numero2.blue} es: ${color.yellow(resultado)}`)
    break

}
