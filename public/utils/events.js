import { canvasToPNG } from "./design.js";

export const listenKeyboard = () => {
    
    onkeydown = (e) => {        
        if (e.key == 'r') {
            location.reload()
        }

        if (e.key == 's') {
            canvasToPNG();
        }
    };
}

export const listenMouse = () => {
    
}