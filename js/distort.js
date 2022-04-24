// const elem = document.querySelector('.content__text');
const elem = document.getElementById("distorted");
const textEl = elem.querySelector('p.content__text-inner');

var text = new Blotter.Text(textEl.innerHTML, {
  family: "Arial",
  size: 36,
  fill: "#000"
  // paddingLeft: 200,
  // paddingRight: 200,
  // paddingTop: 200,
  // paddingBottom: 200
});
 elem.removeChild(textEl);

var material = new Blotter.LiquidDistortMaterial();
material.uniforms.uVolatility.value = 0.01

var blotter = new Blotter(material, {
  texts: text
});

var scope = blotter.forText(text);

scope.appendTo(elem);

document.addEventListener("mousemove", function(ev){
       material.uniforms.uVolatility.value += Math.abs(ev.movementX)*0.0001;
       material.uniforms.uVolatility.value += Math.abs(ev.movementY)*0.0001;
}, false);

window.setInterval(function(){
  if (material.uniforms.uVolatility.value > 0.01) {
  material.uniforms.uVolatility.value *= 0.9;
      }
 }, 100);
