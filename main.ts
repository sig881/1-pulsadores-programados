input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("\"Estoy programando la Microbit\"")
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
