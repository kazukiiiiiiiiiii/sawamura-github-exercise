input.onButtonPressed(Button.A, function () {
    x = x - 1
})
input.onGesture(Gesture.LogoUp, function () {
    y = y + 1
})
input.onButtonPressed(Button.B, function () {
    x = x + 1
})
input.onGesture(Gesture.LogoDown, function () {
    y = y - 1
})
let y = 0
let x = 0
x = 2
y = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(x, y)
    if (x < 0) {
        x = 0
    }
    if (x > 4) {
        x = 4
    }
    if (y < 0) {
        y = 0
    }
    if (y > 4) {
        y = 4
    }
})
