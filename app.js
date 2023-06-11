var sketch = function(p) {
    p.setup = function() {
      var canvas = p.createCanvas(400, 400);
      canvas.parent('myCanvas');
    };
  
    p.draw = function() {
        p.background(255, 255, 255);
        p.strokeWeight(5);
        p.stroke(0, 0, 255);
        if (p.mouseIsPressed) {
          p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        }
      };
      
  };
  
  var mySketch = new p5(sketch);
  