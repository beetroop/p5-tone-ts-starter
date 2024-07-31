import p5 from 'p5';
import * as Tone from 'tone';

const sketch = (p: p5) => {
    let canvas: p5.Element;

    const getCanvasDimensions = function (): [number, number] {
        const width = p.min(p.windowWidth, 800);
        const height = 1.5 * width;
        return [width, height]
    }

    p.preload = function () {
        Tone.start();
        console.log('preload executed')
    }

    p.windowResized = function () {
        p.resizeCanvas(...getCanvasDimensions())
        p.removeElements()
    }


    p.setup = function () {
        canvas = p.createCanvas(...getCanvasDimensions())
        const button = p.createButton('play')
            .position(canvas.width / 2, canvas.height / 2)
            .mouseClicked(() => {
                const synth = new Tone.Synth().toDestination();
            })
    }


    p.draw = function () {
        p.background(0)
    }


}

let myp5 = new p5(sketch);