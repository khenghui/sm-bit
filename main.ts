function Steer_Right (Input_number: number) {
    pins.analogWritePin(AnalogPin.P0, Input_number)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, Input_number * 70 / 100)
    pins.analogWritePin(AnalogPin.P3, 0)
}
function Steer_Left (Input_number: number) {
    pins.analogWritePin(AnalogPin.P0, Input_number * 0.7)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, Input_number)
    pins.analogWritePin(AnalogPin.P3, 0)
}
function Rotate_AntiClockwise_with_speed (Speed: number) {
    pins.analogWritePin(AnalogPin.P0, Speed)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P3, 0 - Speed)
}
function Forward_with_speed (Input_number: number) {
    pins.analogWritePin(AnalogPin.P0, Input_number)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, Input_number)
    pins.analogWritePin(AnalogPin.P3, 0)
}
function Rotate_Clockwise_with_speed (Speed: number) {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, Speed)
    pins.analogWritePin(AnalogPin.P2, 0 - Speed)
    pins.analogWritePin(AnalogPin.P3, 0)
}
function Reverse_with_speed (Input_number: number) {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, Input_number)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P3, Input_number)
}
