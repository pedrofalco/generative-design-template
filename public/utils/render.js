import { headless } from './headless.js';
import progressBar from "progress-bar-cli";
import { server, PORT } from '../../index.js';

export const render = (max) => {   

    let x = 0;
    let startTime = new Date();
  
    let screenshot = setInterval(() => {
      headless()
  
      progressBar.progressBar(x, max, startTime);
      
      if (++x == max) {
        clearInterval(screenshot);
        console.log(`${x} screenshots taken.`);
  
        setTimeout(() => {
          console.log('Export finished.')
          server.close();
        }, 2000);
      }
  
    }, 5000);
}