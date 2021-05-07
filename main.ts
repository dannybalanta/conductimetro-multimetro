input.onButtonPressed(Button.A, function () {
    conductividad = pins.analogReadPin(AnalogPin.P2)
    proporcionalidad = Math.round(pins.map(
    conductividad,
    0,
    1023,
    0,
    100
    ))
    if (proporcionalidad < condMin) {
        condMin = proporcionalidad
    }
    if (proporcionalidad > condMax) {
        condMax = proporcionalidad
    }
    cantCond += 1
    sumaCond = sumaCond + proporcionalidad
    promConduct = sumaCond / cantCond
    basic.showString("C:" + proporcionalidad)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("C.Min:" + condMin)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("C.Max:" + condMax)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Pr.C:" + promConduct)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    luzActual = input.lightLevel()
    if (luzActual < luzMin) {
        luzMin = luzActual
    }
    if (luzActual > luzMax) {
        luzMax = luzActual
    }
    cantLuz += 1
    sumaLuz = sumaLuz + luzActual
    promLuz = sumaLuz / cantLuz
    basic.showString("L:" + luzActual)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("L.Min:" + luzMin)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("L.Max:" + luzMax)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Pr.L:" + Math.round(promLuz))
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    tempActual = input.temperature()
    if (tempActual < tempMin) {
        tempMin = tempActual
    }
    if (tempActual > tempMax) {
        tempMax = tempActual
    }
    cantTemp += 1
    sumaTemp = sumaTemp + tempActual
    promTemp = sumaTemp / cantTemp
    basic.showString("T:" + tempActual + "C")
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("T min:" + tempMin + "C")
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("T max:" + tempMax + "C")
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("Pr. T:" + promTemp + "C")
    basic.pause(1000)
    basic.clearScreen()
})
let promTemp = 0
let promLuz = 0
let promConduct = 0
let luzMin = 0
let luzMax = 0
let luzActual = 0
let cantLuz = 0
let sumaLuz = 0
let tempMin = 0
let tempMax = 0
let tempActual = 0
let cantTemp = 0
let sumaTemp = 0
let condMin = 0
let proporcionalidad = 0
let condMax = 0
let conductividad = 0
let cantCond = 0
let sumaCond = 0
sumaCond = 0
cantCond = 0
conductividad = pins.analogReadPin(AnalogPin.P2)
condMax = proporcionalidad
condMin = proporcionalidad
sumaTemp = 0
cantTemp = 0
tempActual = input.temperature()
tempMax = tempActual
tempMin = tempActual
sumaLuz = 0
cantLuz = 0
luzActual = input.lightLevel()
luzMax = luzActual
luzMin = luzActual
basic.forever(function () {
    basic.showString(".")
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
