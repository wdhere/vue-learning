let sketch = function (p) {
  let ox = p.random(10000);
  let oy = p.random(10000);
  const width = window.innerWidth - 10;
  const height = window.innerHeight - 10;
  // alert("width: " + window.innerWidth + " height: " + window.innerHeight);
  const radiusBase = width > height ? width * 0.15 : height * 0.15;
  const part = radiusBase / 3;
  const speed = radiusBase * 0.003;
  let radius = radiusBase;
  let acc = true;

  p.setup = function () {
    p.createCanvas(width, height);
    p.strokeWeight(2);
    p.stroke(255);
    p.smooth();
    p.noFill();
  };

  p.draw = function () {
    p.clear();
    p.translate(p.width / 2, p.height / 2);
    display();
  };

  function display() {
    ox += 0.003;
    oy += 0.003;

    animateR();

    p.beginShape();
    for (let angle = 0; angle < 360; angle += 3) {
      let radian = p.radians(angle);
      let radiusN =
        radius + p.map(getNoise(radian, 0.3), 0, 1, -0.85 * part, 0.85 * part);
      p.vertex(radiusN * p.cos(radian), radiusN * p.sin(radian));
    }
    p.endShape(p.CLOSE);
  }

  function animateR() {
    if (radius >= radiusBase + part) {
      radius = radiusBase + part;
      acc = false;
    }

    if (radius <= radiusBase - part) {
      radius = radiusBase - part;
      acc = true;
    }

    if (acc) {
      radius += speed;
    } else {
      radius -= speed;
    }
  }

  function getNoise(radian, dim) {
    let r = radian % p.TWO_PI;
    if (r < 0.0) {
      r += p.TWO_PI;
    }
    return p.noise(ox + p.cos(r) * dim, oy + p.sin(r) * dim);
  }
};

new p5(sketch);
