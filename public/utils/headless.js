import puppeteer from 'puppeteer';
import { PORT, resolution, aspect_ratio } from '../../index.js';

export const headless = (isHeadless) => {

  console.log('Running a headless browser...');

  let date_ob = new Date();
  let start = Date.now()

  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();

  let limit = 1;
  let idx = 0;
  (async () => {
      const browser = await puppeteer.launch(
        {
          dumpio: true,
          headless: isHeadless, // change to false to see the browser window
          defaultViewport: {
            width: resolution * aspect_ratio,
            height: resolution
          }, // change to null to set windowSize
          args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-angle=metal']
          // args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--use-gl=egl']
        }
      );

      const page = await browser.newPage();

      //LOGS
      page
      .on('pageerror', ({ message }) => console.log(message))
      .on('requestfailed', request =>
      console.log(`${request.failure().errorText} ${request.url()}`))
        // .on('console', message =>
      //     console.log(`${message.type().substr(0, 3).toUpperCase()} ${message.text()}`))
      //   .on('response', response =>
      //     console.log(`${response.status()} ${response.url()}`))
      

      await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0', timeout: 0 });

      // console.log(`SCREENSHOT START seconds elapsed = ${(Date.now() - start)}`);
      // idx +=1;
      
      await page.screenshot({

        path: `./outputs/screenshot_${hours}_${minutes}_${seconds}_${idx}.png`
      });
      await page.close();
      await browser.close();
      // console.log(`SCREENSHOT END MS elapsed = ${(Date.now() - start)}`);
    })();
  }
