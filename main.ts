let start = 0
let elapsed_time = 0
/**
 * STOPWATCH
 * 
 * As soon as code is downloaded it starts to time.
 * 
 * Press button B to see time.
 * 
 * Press button B again to se new total time.
 * 
 * Press button A to reset.
 */
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elapsed_time = input.runningTime() - start
    basic.showNumber(Math.idiv(elapsed_time, 1000))
})
