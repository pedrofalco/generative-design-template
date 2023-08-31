import { rollup } from "rollup";
import { readFile } from "fs";

export const bundle = async() => {
    const bundle = await rollup({
      input: 'public/sketch.js',
    });
  
    await bundle.write({
      file: 'build/build.js',
      format: "iife",
    });
  
    await bundle.close();
  
    readFile('build/build.js', 'utf-8', (err, contents) => {
      if (err) {
        console.log(err);
        return;
      }
    });

    console.log('Bundle created.');
}