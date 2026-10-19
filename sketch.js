function setup() {
  createCanvas(windowWidth, windowHeight);
  background(244, 238, 224);

  // disposizione dei glifi in griglia
  let numeroGlifi = 110;
  let numeroColonne = ceil(sqrt(numeroGlifi));
  let numeroRighe = ceil(sqrt(numeroGlifi));
  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;

  let xCorrente = 0;
  let yCorrente = 0;

  for (let g = 0; g < numeroGlifi; g++) {
    mioGlifo(xCorrente + dimColonna / 2, yCorrente + dimRiga / 2, dimRiga * 0.6);
    xCorrente = xCorrente + dimColonna;

    if (xCorrente > windowWidth - 1) {
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga;
    }
  }
}

function draw() {
  //
}

// funzione per glifo pecora
function mioGlifo(_x, _y, _size) {
  push();
  translate(_x, _y);
  angleMode(DEGREES);
  noStroke();

  // zampe
  fill(0);
  rect(-_size * 0.3, _size * 0.3, _size * 0.07, _size * 0.25);
  rect(-_size * 0.18, _size * 0.3, _size * 0.07, _size * 0.25);
  rect(_size * 0.12, _size * 0.3, _size * 0.07, _size * 0.25);
  rect(_size * 0.24, _size * 0.3, _size * 0.07, _size * 0.25);

  // direzione
  let direzione = 1; //dx
  if (random(0, 1) < 0.5) {
    direzione = -1; //sx
  }

  // colore corpo e pattern
  let rossoP;
  let verdeP;
  let bluP;
  let sceltaColore = ceil(random(5)); // numero casuale
  if (sceltaColore == 1) {
    fill(242, 140, 75); // corpo arancione
    rossoP = 111; verdeP = 134; bluP = 224; // pattern blu
  } else if (sceltaColore == 2) {
    fill(242, 160, 196); // corpo rosa
    rossoP = 111; verdeP = 134; bluP = 224; // pattern blu
  } else if (sceltaColore == 3) {
    fill(111, 134, 224); // corpo blu
    rossoP = 242; verdeP = 200; bluP = 75; // pattern giallo
  } else if (sceltaColore == 4) {
    fill(181, 140, 230); // corpo viola
    rossoP = 242; verdeP = 200; bluP = 75; // pattern giallo
  } else {
    fill(242, 200, 75); // corpo giallo
    rossoP = 181; verdeP = 140; bluP = 230; // pattern viola
  }

  // corpo
  ellipse(0, 0, _size, _size * 0.8);

  // tipo di pattern
  let tipoPattern = ceil(random(3));
  let passo = _size * 0.25; // distanza fissa tra un elemento e il successivo per avere griglia fissa

  for (let riga = 0; riga < 2; riga++) {
    for (let colonna = 0; colonna < 3; colonna++) {
      push();
      translate(-_size * 0.3 + colonna * passo, -_size * 0.15 + riga * passo);

      // variabili pattern
      if (tipoPattern == 1) {
        fill(rossoP, verdeP, bluP);
        noStroke();
        circle(0, 0, _size * 0.1);
      } else if (tipoPattern == 2) {
        stroke(rossoP, verdeP, bluP);
        strokeWeight(2);
        rotate(45); // angolo fisso: i trattini sono tutti paralleli
        line(-_size * 0.05, 0, _size * 0.05, 0);
      } else {
        fill(0, 0, 0, 0);
        stroke(rossoP, verdeP, bluP);
        strokeWeight(2);
        circle(0, 0, _size * 0.12);
      }
      pop();
    }
  }

  // testa si sposta a destra o a sinistra con la direzione
  push();
  translate(direzione * _size * 0.5, -_size * 0.05);
  noStroke();
  fill(0);
  ellipse(0, 0, _size * 0.28, _size * 0.4);

  push();
  translate(-_size * 0.17, -_size * 0.1); // orecchio sinistro
  rotate(-20);
  ellipse(0, 0, _size * 0.2, _size * 0.08);
  pop();

  push();
  translate(_size * 0.17, -_size * 0.1); // orecchio destro
  rotate(20);
  ellipse(0, 0, _size * 0.2, _size * 0.08);
  pop();

  //occhi
  fill(255);
  circle(-_size * 0.05, -_size * 0.05, _size * 0.06); // sinistra
  circle(_size * 0.05, -_size * 0.05, _size * 0.06); //destra
  pop();

  pop();
}


