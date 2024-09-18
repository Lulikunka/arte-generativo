////////MODIFICAR ESTE ARCHIVO
/////////////////////////////////
let cantidad = 13;
let cantidad_manchitas=10;
let miPaleta;
let silueta;
let tamanio;
let tamanioForma;
let opacidad;

function preload(){
  //poner el nombre de la imagen que quiero usar como paleta
  miPaleta = new Paleta( "data/Paletaejemplo.jpg" );// Cambio de colores Paleta
//poner el nombre de la imagen que quiero usar como silueta
//recomendable una imagen bitonal
  silueta = loadImage( "data/Manchaejemplo.jpg",//ESTA SILUETA FORMA LA MANCHA
    ()=>{silueta.resize(windowWidth, windowHeight)}
   );
 
}
function setup() {
  //dimensiones del sketch / aplicacion
  //si quiero que complete toda la pantalla:
  createCanvas( windowWidth, windowHeight );
  //createCanvas(1280, 720 );
  background(255,255,255 );//fondo
  textFont('serif');
  textAlign( CENTER, CENTER );
  imageMode( CENTER );
  rectMode( CENTER )

}
function draw() {
  //modifica el la opacidad del motivo a dibujar segun la posicion Y del mouse
  opacidad = int( map( mouseY , 0 , height , 0 , 255) );
  //modifica el tamanio del motivo a dibujar segun la posicion X del mouse
   tamanio = float( map( mouseX , 0 , width , 0 , 1) );
   tamanioForma = int( map( mouseX , 0 , width , 5 , 15) );//Tamaño pixel

///IMPORTANTE////////////
//aca elegimos cuantas "manchitas" por vez dibuja
  cantidad_manchitas=100 ;//Velocidad
//////////////////////

  for( let i=0 ; i<cantidad_manchitas; i++){

  let x = random( width );
  let y = random( height );

  let xSilueta = int( map( x , 0 , width , 0 , silueta.width ) );
  let ySilueta = int( map( y , 0 , height , 0 , silueta.height ) );

  let colorDeEstePixel = silueta.get( xSilueta , ySilueta );
//aca controlamos el rango o nivel de contraste
//cambiar el valor despues del <
//puede no tocarse

  if( green( colorDeEstePixel ) < 150 ){ //para la mancha 150 //si quiero toda la pantalla poner 300
   
   
 
    let esteColor =  miPaleta.darColor();
   
    tint( red(esteColor) , green(esteColor) , blue(esteColor) , opacidad );
 
    push();
    translate( x, y );
   
   
    /// OPCIONES PARA PINTAR SI DESCOMENTAMOS LOS TRAZOS
    //aca se define el relleno de acuerdo a la paleta y una opacidad de 150
    fill( red(esteColor) , green(esteColor) , blue(esteColor) , opacidad );
    //aca se define el contorno de acuerdo a la paleta y una opacidad de 150
    //stroke( red(esteColor) , green(esteColor) , blue(esteColor) , 150 );
    //definimos si va a tener o no relleno o contorno
    //noFill();
    noStroke();
    ////////QUE FORMA VA A DIBUJAR
  rect (0,0,tamanioForma,tamanioForma);  //dibuja circulos //los ultimos 2 valores son el tamaño
    //rect(0,0,tamanioForma,tamanioForma);  //dibuja cuadrados // los ultimos 2 valores son el tamaño
   
 
    resetMatrix();
    // fill(250, 130, 200);
    textSize(30);
    text("R\nU\nN\nW\nA\nY", width / 7, height / 2);
    text("P\nA\nL\nE\nT\nT\nE",6  * width / 7, height / 2);
    pop();
  }
}

}




class Paleta{

  constructor( nombre ){
      this.imagen = loadImage(nombre);
  }

  darColor(){
      let x = int( random( this.imagen.width ));
      let y = int( random( this.imagen.height ));
      let elColor = this.imagen.get( x , y );
      return elColor;
  }

}



