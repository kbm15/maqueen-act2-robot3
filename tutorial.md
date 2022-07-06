# Actividad 2 Robot 3
```template
basic.showIcon(IconNames.StickFigure)
music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 5000, 2804, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(index + 1)
    }
})


```
## ~avatar avatar

Nuestro problema se resuelve utilizando el bloque de entrada, que permite ejecutar una instruccion al pulsar un determinado boton.



## Paso 2

Arrastramos el bloque pulsar boton de la seccion entrada.
```block 
input.onButtonPressed(Button.B, function () {})
```

## Paso 3
Colocamos el codigo del bloque 'para siempre' dentro del bloque 'pulsar boton' y modifica el indice.
```block 
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 2; index++) {
        basic.showNumber(index + 1)
    }
})
```