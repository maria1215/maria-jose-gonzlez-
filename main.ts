input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # # # # #
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(200)
        basic.showIcon(IconNames.Heart)
    }
    basic.clearScreen()
})
basic.forever(function () {
    basic.showString("Hola gente ")
    basic.pause(500)
    basic.clearScreen()
})
basic.forever(function () {
	
})
