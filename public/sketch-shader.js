import { designCanvas, canvasToPNG, styledCanvas } from "./utils/design.js";
import { seed, R } from "./utils/random.js";
import { listenKeyboard } from "./utils/events.js";

let theShader;

const generate = () => {
    //CANVAS SETUP
    designCanvas(1920, 9/16, WEBGL);
    styledCanvas(90);
    
    //SKETCH
    background(0, 0, 50);
    R();

    //SHADER
    shader(theShader);
    theShader.setUniform('u_resolution', [width, height]);
    noStroke();
    rect(0, 0, width, height);
}

window.preload = () => {
    theShader = loadShader('glsl/vertex.glsl', 'glsl/fragment.glsl');
};

window.setup = () => {
    generate();
}
window.draw = () => {}

listenKeyboard()