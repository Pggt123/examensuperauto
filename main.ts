input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("led")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("luz")
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendString("Para")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Para") {
        Variable_maestra = 1
    } else if (receivedString == "Temperatura") {
        Variable_maestra = 2
    } else if (receivedString == "luz") {
        Variable_maestra = 3
    } else if (receivedString == "led") {
        Variable_maestra = 4
    } else if (receivedString == "caida") {
        Variable_maestra = 5
    } else if (receivedString == "volar") {
        Variable_maestra = 6
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Temperatura")
})
let Variable_maestra = 0
radio.setGroup(25)
Variable_maestra = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        radio.sendString("caida")
    }
    if (input.isGesture(Gesture.LogoUp)) {
        radio.sendString("volar")
    }
    if (Variable_maestra == 1) {
        basic.showString("STOP")
        Variable_maestra = 0
    } else if (Variable_maestra == 2) {
        basic.showNumber(input.temperature())
        Variable_maestra = 0
    } else if (Variable_maestra == 3) {
        basic.showNumber(input.lightLevel())
        Variable_maestra = 0
    } else if (Variable_maestra == 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        Variable_maestra = 0
    } else if (Variable_maestra == 5) {
        basic.showIcon(IconNames.Sad)
        Variable_maestra = 0
    } else if (Variable_maestra == 6) {
        music.playMelody("E B C5 A B G A F ", 120)
        Variable_maestra = 0
    } else {
    	
    }
})
