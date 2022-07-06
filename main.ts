input.onButtonPressed(Button.B, function () {
	
})
basic.showIcon(IconNames.StickFigure)
music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 5000, 2804, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(index + 1)
    }
})
