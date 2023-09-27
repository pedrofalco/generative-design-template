import puppeteer from 'puppeteer';
import { PORT, resolution, aspect_ratio } from '../../index.js';

export const headless = (isHeadless) => {

  console.log('Running a headless browser...');

  let date = new Date();
  let start = Date.now()

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  (async () => {
      const browser = await puppeteer.launch(
        {
          dumpio: true,
          headless: isHeadless, // change to false to see the browser window
          defaultViewport: {
            width: resolution * aspect_ratio,
            height: resolution
          }, // change defaultViewport to null to set windowSize
          args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-angle=metal']
          // args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--use-gl=egl']
        }
      );

      const page = await browser.newPage();

      page
      .on('pageerror', ({ message }) => console.log(message))
      .on('requestfailed', request =>
      console.log(`${request.failure().errorText} ${request.url()}`))      

      await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0', timeout: 0 });

      console.log(`Screenshot started: ${(Date.now() - start)}ms`);
      
      await page.screenshot({

        path: `./outputs/screenshot_${hours}_${minutes}_${seconds}.png`
      });
      await page.close();
      await browser.close();

      console.log(`Screenshot finished: ${(Date.now() - start)}ms`);
    })();
  }
