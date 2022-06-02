let noise = 0
OLED.init(128, 64)
pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
    OLED.writeString("noise:")
    OLED.writeNum(noise)
    basic.pause(1000)
    OLED.clear()
})
basic.forever(function () {
    noise = smarthome.ReadNoise(AnalogPin.P10)
    if (noise > 70) {
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(2000)
    } else {
        pins.servoWritePin(AnalogPin.P1, 100)
        basic.pause(2000)
    }
})
