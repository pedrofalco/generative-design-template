import { minify } from 'terser';
import fs from 'fs';

const config = {
  compress: {
    dead_code: true,
    drop_console: true,
    drop_debugger: true,
    keep_classnames: false,
    keep_fargs: false,
    keep_fnames: false,
    keep_infinity: false,
    passes: 5,
  },
  mangle: {
    eval: true,
    properties: {
      // these are all words that shouldn't be mangled
      // it's most of the p5js reserved words and some other things
      // there might be some repeats, but it doesn't matter
      // if you have special words that must not be mangled, add them here
      reserved: [
        'stroke', 'strokeWeight', 'noStroke', 'length', 'fill', 'noFill', 'background', 'colorMode', 'color', 'random', 'randomGaussian', 'randomSeed', 'noise', 'noiseSeed', 'noiseDetail', 'noisePerlin', 'noiseSimplex', 'noiseOctaves', 'noiseFrequency',
        'color','alpha','red','green','blue','hue','saturation','brightness','lerpColor','lerp','background','clear','colorMode','fill','noFill','noStroke','stroke','strokeWeight','blendMode','createCanvas','createGraphics','resizeCanvas','noCanvas','image','imageMode','tint','noTint','blend','copy','filter','get','loadImage','loadPixels','set','updatePixels','pixels','dither','noDither','pixelDensity','displayDensity','width','height','windowWidth','windowHeight','displayWidth','displayHeight','frameCount','frameRate','focused','cursor','noCursor','displayWidth','displayHeight','bezier','bezierDetail','bezierPoint','bezierTangent','curve','curveDetail','curvePoint','curveTangent','curveTightness','line','point','quad','triangle','arc','ellipse','ellipseMode','line','lineCap','lineJoin','lineWidth','point','pointLight','quad','rect','rectMode','square','triangle','beginContour','beginShape','bezierVertex','curveVertex','endContour','endShape','quadraticVertex','vertex','box','cone','cylinder','ellipsoid','noSmooth','plane','sphere','smooth','torus','noStroke','stroke','strokeCap','strokeJoin','strokeWeight','beginCamera','camera','endCamera','perspective','printCamera','ortho','frustum','rotate','rotateX','rotateY','rotateZ','scale','shearX','shearY','translate','applyMatrix','popMatrix','printMatrix','pushMatrix','resetMatrix','rotate','PI','HALF_PI','QUARTER_PI','TAU','TWO_PI','DEGREES','RADIANS','angleMode','angle','cos','degrees','radians','sin','tan','acos','asin','atan','atan2','exp','log','mag','map','max','min','norm','pow','round','sq','sqrt','abs','ceil','constrain','dist','exp','floor','lerp','log','circle','setUniform','substr','parseInt','min','max','floor','push','pop','createVector','random','filter','stroke','strokeWeight','sqrt','push','pow','reverse','concat','addPoints','color','filter','windowResized','setup','draw','mouseClicked','mouseDragged', 'createShader', 'loadShader'
      ],
    },
    keep_classnames: false,
    keep_fnames: /^(window\.|setup|width|draw|height|pixelDensity|color|alpha|windowResized)$/,
    toplevel: true,
  },
  module: false,
  sourceMap: false,
}

const code = fs.readFileSync('public/sketch.js', 'utf8')

minify(code, config).then((minified) => {
  fs.writeFileSync('./build/sketch.min.js', minified.code)
})

console.log('Sketch minified.')