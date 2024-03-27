blockytalky.onReceivedNumber(function (key, value) {
    if (key == "avanc") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, value)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, value)
        basic.showArrow(ArrowNames.North)
    } else {
        if (key == "recul") {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, value)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, value)
            basic.showArrow(ArrowNames.South)
        } else {
            if (key == "arret") {
                motor.motorStop(motor.Motors.M1)
                motor.motorStop(motor.Motors.M2)
                A4_Robot_Driver.robotMove(A4_Robot_Driver.RobotDirection.Stop, value)
                basic.showIcon(IconNames.No)
            }
        }
    }
})
bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
basic.showIcon(IconNames.Happy)
