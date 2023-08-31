precision highp float;

varying vec2 vTexCoord;

uniform vec2 u_resolution;

void main() {

  vec2 input_uv = vTexCoord;
  input_uv.y = 1.0 - input_uv.y;

  vec3 color = vec3(vTexCoord, 1.0);

  gl_FragColor = vec4(color, 1.0);
}