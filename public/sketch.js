import { designCanvas, canvasToPNG, styledCanvas } from "./utils/design.js";
import { seed, R, range } from "./utils/random.js";
import { listenKeyboard } from "./utils/events.js";

let theShader;

const generate = () => {
    //CANVAS SETUP
    designCanvas(1920, 9/16);
    styledCanvas(90);
    
    //SKETCH
    let r = range(0, 255);
    let g = range(0, 255);
    let b = range(0, 255);
    background(r, g, b);
    
    noStroke()
    fill(255)
    ellipse(width / 2, height / 2, 250, 250);

    R();
}

window.setup = () => {
    generate();
}
window.draw = () => {}

listenKeyboard()