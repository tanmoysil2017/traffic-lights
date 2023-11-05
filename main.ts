let waiting = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    waiting = 1
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    if (waiting) {
        basic.showIcon(IconNames.Yes)
        music.play(music.createSoundExpression(WaveShape.Square, 3559, 3385, 255, 0, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.No)
        waiting = 0
    } else {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
