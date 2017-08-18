window.onload = function () {
  crearMenu();
}
//Traemos div tablero
function crearMenu() {
  var divTablero = document.getElementById("tablero");
  var divBtns = document.createElement("div");
  divBtns.setAttribute("id", "divBtns");
  //Button play
  var btnPlay = document.createElement("button");
  var btnPlayTxt = document.createTextNode("Play");
  btnPlay.appendChild(btnPlayTxt);
  btnPlay.setAttribute("id", "btnPlay");
  btnPlay.classList.add("botones");
  btnPlay.onclick = function () {
    quitarMenu();
    getGame(mapa);
  }
  //Button Instrucciones 
  var btnTutorial = document.createElement("button");
  var btnTutorialTxt = document.createTextNode("Tutorial");
  btnTutorial.appendChild(btnTutorialTxt);
  btnTutorial.setAttribute("id", "btnTutorial");
  btnTutorial.classList.add("botones");
  btnTutorial.onclick = function () {
    tutorial();
  }
  //Button Credits
  var btnCredits = document.createElement("button");
  var btnCreditsTxt = document.createTextNode("Credits");
  btnCredits.appendChild(btnCreditsTxt);
  btnCredits.setAttribute("id", "btnCredits");
  btnCredits.classList.add("botones");
  btnCredits.onclick = function () {
    creditos();
  }
  divBtns.appendChild(btnPlay);
  divBtns.appendChild(btnTutorial);
  divBtns.appendChild(btnCredits);
  divTablero.appendChild(divBtns);
}
//Funcion que quita el menu 
function quitarMenu() {
  var divJuego = document.getElementById("tablero");
  var menu = document.getElementById("divBtns");
  divJuego.removeChild(menu);
  btnMenu();
}
//Funcion que genera el boton menu
function btnMenu() {
  var divJuego = document.getElementById("tablero");
  var divBtnMenu = document.createElement("div");
  divBtnMenu.setAttribute("id", "divBtnMenu");
  var btnMenu = document.createElement("button");
  var btnMenuTxt = document.createTextNode("Menu Principal");
  btnMenu.appendChild(btnMenuTxt);
  btnMenu.setAttribute("id", "btnMenu");
  btnMenu.classList.add("botones");
  btnMenu.onclick = function () {
    showMenu();
  }
  divBtnMenu.appendChild(btnMenu);
  divJuego.appendChild(divBtnMenu);
}
//Funcion que muestra el menu completo 
function showMenu() {
  var tablero = document.getElementById("tablero");
  tablero.removeChild(document.getElementById("divBtnMenu"));
  if (document.getElementById("game") != undefined) {
    tablero.removeChild(document.getElementById("game"));
  }
  if (document.getElementById("divImg") != undefined) {
    tablero.removeChild(document.getElementById("divImg"));
  }
  if (document.getElementById("divImg2") != undefined){
    tablero.removeChild(document.getElementById("divImg2"));
  }
  if (document.getElementById("winner") != undefined) {
    tablero.removeChild(document.getElementById("winner"));
  }
  if (document.getElementById("divFotos") != undefined) {
    tablero.removeChild(document.getElementById("divFotos"));
  }
  crearMenu();
}

//Función tutorial 
function tutorial() {
  var objDiv = document.getElementById("tablero");
  btnMenu();
  objDiv.removeChild(document.getElementById("divBtns"));
  //Img 1 
  var divImg = document.createElement("div");
  divImg.setAttribute("id", "divImg");

  var newImage = document.createElement("img");
  newImage.src = "assets/img/instrucciones.png";
  newImage.setAttribute("id", "ins");

  var ins = document.createElement("h3");
  var insTxt = document.createTextNode("Lyft Road, es un juego simple. Donde tú, con las flechas del teclado; tratas de que el taxi llegue al pasajero. Si el taxi entra al portal, disfrutarás de un viaje a través de las dimensiones. Trata de relajarte y disfrutar de este juego; y no olvides de amar intensamente la programación.");
  ins.appendChild(insTxt);
  divImg.appendChild(ins);
  divImg.appendChild(newImage);
  //Img 2 
  var divImg2 = document.createElement("div");
  divImg2.setAttribute("id", "divImg2");

  var newImage2 = document.createElement("img");
  newImage2.src = "assets/img/gameover.png";
  newImage2.setAttribute("id", "ins2");

  var ins2 = document.createElement("h3");
  var insTxt2 = document.createTextNode("Pierdes, cuando te sales de la ruta; y no puedes llegar al pasajero. GAME OVER. Entonces, retornas al inicio, para encontrar la ruta adecuada. Puedes tener tantos intentos como tu desees.");
  ins2.appendChild(insTxt2);
  divImg2.appendChild(newImage2);
  divImg2.appendChild(ins2);
 

  objDiv.appendChild(divImg);
  objDiv.appendChild(divImg2);
}

//Función créditos
function creditos() {
  var objDiv = document.getElementById("tablero");
  btnMenu();
  objDiv.removeChild(document.getElementById("divBtns"));

  var divFotos = document.createElement("div");
  divFotos.setAttribute("id", "divFotos");

  var title = document.createElement("h2");
  var titleTxt = document.createTextNode("Create by:");
  title.appendChild(titleTxt);

  var divLuisa = document.createElement("div");
  var luisa = document.createElement("img");
  var luisaNombre = document.createElement("h3");
  var luisaNombreTxt = document.createTextNode("Luisa Gonzales");
  luisaNombre.appendChild(luisaNombreTxt);
  divLuisa.setAttribute("id", "luisa");
  luisa.classList.add("fotos");
  luisa.src = "assets/img/luisa.png";
  divLuisa.appendChild(luisaNombre);
  divLuisa.appendChild(luisa);

  var divSusy = document.createElement("div");
  var susy = document.createElement("img");
  var susyNombre = document.createElement("h3");
  var susyNombreTxt = document.createTextNode("Susy Talavera");
  susyNombre.appendChild(susyNombreTxt);
  divSusy.setAttribute("id", "susy");
  susy.src = "assets/img/susy.png";
  susy.classList.add("fotos");
  divSusy.appendChild(susyNombre);
  divSusy.appendChild(susy);

  divFotos.appendChild(title);
  divFotos.appendChild(divLuisa);
  divFotos.appendChild(divSusy);

  objDiv.appendChild(divFotos);
}

//Función winner
function winner() {
  var tablero = document.getElementById("tablero");
  tablero.removeChild(game);
  var divWinner = document.createElement("div");
  divWinner.setAttribute("id", "winner");
  //gif
  var winImg = document.createElement("div");
  var win = document.createElement("img");
  win.src = "assets/img/win.gif";
  win.setAttribute("id", "banner");
  //btnnext
  var btnNext = document.createElement("button");
  var btnNextTxt = document.createTextNode("Next Level");
  btnNext.appendChild(btnNextTxt);
  btnNext.setAttribute("id", "btnNext");
  btnNext.classList.add("botones");
  winImg.appendChild(win);

  divWinner.appendChild(winImg);
  divWinner.appendChild(btnNext);
  tablero.appendChild(divWinner);
  btnNext.onclick = function () {
    gameWin();
  }
}

//Función cuanda gana el juego 
function gameWin() {
  count--;
  var mapa = mapas[count];
  var tablero = document.getElementById("tablero");
  tablero.removeChild(document.getElementById("winner"));
  clearTimeout(start);
  getGame(mapa);
}

var map5 = [
  "x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x",
  "x* *           * * *             * *   *x",
  "x* *             W                 *   *x",
  "x*                           *     *   *x",
  "x*         *                       *   *x",
  "x*   * * * *             *         *   *x",
  "x*     *     * *       *   *       *   *x",
  "x*   * I o   * *         *   * * * *   *x",
  "x*     *     * *   * *  **           I *x",
  "x*   *          *        *         * * *x",
  "x*           * ***   *   *     *   * * *x",
  "x*       *      *        * *       * * *x",
  "x*     * *             ***         * * *x",
  "x* *   *           *     *         *   *x",
  "x*     *   *      *      *     *       *x",
  "x* *        *     *      *         *   *x",
  "x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x"
];

var map4 = [
  "x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x",
  "x* *                                 *             * * * *x",
  "x* *   *                             *       *       * * *x",
  "x*   *   *            *              *     * *     *     *x",
  "x*         *           * *           * * *       *   *   *x",
  "x*     * *       *           *       *   *     *     *   *x",
  "x*   *                       *       *   *   *       *   *x",
  "x* *                             *   *   I          W* * *x",
  "x* *              **     * *                             *x",
  "x* *             *     I           *                     *x",
  "x*               *   *         *                     *   *x",
  "x*   *   *     *       *   *                             *x",
  "x*     *                             *                   *x",
  "x*       * *        *    *   *     * * *           *     *x",
  "x*       * *                         *     *       *     *x",
  "x* *             *       *       *                       *x",
  "x*       *     *       *   * *     *     *   * *         *x",
  "x*     *           *  o*   * *   *   *       * * *       *x",
  "x* * *      *          * *         *   *             * * *x",
  "x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x"
];

var map3 = [
  "x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x",
  "x* * * * * * * * * * *                                          x",
  "x*       *  *  *       * *                                W*    x",
  "x*               *     * * *           *                   I    x",
  "x* *       *               * *                                  x",
  "x*    *    * *   I           * *         *   *                  x",
  "x*                   ****      * * * *   *     *         *      x",
  "x*         *                 *           *   *                  x",
  "x*       *                 *   *                                x",
  "x*         *   *         *       *   *                          x",
  "x*             *         *                                      x",
  "x* *                ** *                                   *    x",
  "x*                **         * *                                x",
  "x*  **   *   *  **                     * *                 * *  x",
  "x* *   *   *   *       * *                   * *           * *  x",
  "x*                                         *   *                x",
  "x*               *     *               ***   * *                x",
  "x*             *               *                                x",
  "x*                       *         * *                          x",
  "x*o  *       *           *       * *                           *x",
  "x* * *           *                                         *    x",
  "x* * * *                                  *                *    x",
  "x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x"
];

var map2 = [
  "                                                                  ",
  " *   o       * **  ** *                                  *****    ",
  "    *                                                        *    ",
  "    *           **                                           *    ",
  "   ** **************         **             ****             *    ",
  "   **          *           * *                              I*  * ",
  "   **                                        *                    ",
  "   *****************                         ****                 ",
  "       *************                                              ",
  "     ***************   *   W                                      ",
  "            ** **      **  **                                     ",
  "                      *    **                                     ",
  "  *                  *******                                      ",
  "   *****            **                                      W     ",
  "   ***        **  **          *                            ***    ",
  " **************************************************************** ",
  "   I  **       *           * *                             ***    ",
  " *            *                    ** * * * *       *      ***    ",
  "               *        *                           *       *     ",
  "    *                  ** *                         *    W        ",
  " *  **                  *           *             *               ",
  " *  ****                   *                 *    *          ***  ",
  " *  *******                *                ****  **              ",
  " *  ****                  **                ***   ****            ",
  " *  ***       *         W                   *****     *******     ",
  " **  *        **    *                        ***  ***********     ",
  " **    **                                    ****************     ",
  " **     ** *****       *  *****                 **                ",
  "           *    * ** **    ****                   *               ",
  " ** W****************    * ****                    *      ******* ",
  "                                                                  "
];

var map1 = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x                               W                     W         x",
  "x        *                                       *              x",
  "x  *                    *                            *          x",
  "x                                             *                 x",
  "x                                                 *        *    x",
  "x  *                         W            *         *           x",
  "x         *                                    *            *   x",
  "x                                     *                      *  x",
  "x                                          *                  I x",
  "x        *                             *                       Wx",
  "x *            *       *                                        x",
  "x                                                               x",
  "x                                                  *            x",
  "x   *               **W*************W********             *     x",
  "x         *         *                       *                   x",
  "x                   *   ******W**********   *                  *x",
  "x                   *   *               *   *       *           x",
  "x                   *   *   **********  *   W                   x",
  "x                   *   W   *        *  *   *                   x",
  "x        *          *   *   *        I  *   *                   x",
  "x  *                *   *   ******** *  *   *    W              x",
  "x                   *   *            *  W   *        *          x",
  "x                   *   **************  *   W               *** x",
  "x         *         *                   *   *               **  x",
  "x    *              *********************   *        *          x",
  "x         *                                 *        *        W x",
  "x *                                         *        *        * x",
  "x     *       ***W*********W****W****W*******        *******  * x",
  "xo *                                                            x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];


var map6 = [
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "x                                               x",
  "x                                               x",
  "x      **o        ***                **W        x",
  "x                 ***                 *         x",
  "x                 *              *              x",
  "x                 *                     *       x",
  "x    *  *                     *   *     *       x",
  "x     * *                    **** *             x",
  "x     *                                 *       x",
  "x                                      **       x",
  "x                        **            **       x",
  "x                         *                     x",
  "x             ** *       ***                    x",
  "x             ***                               x",
  "x             **                  **            x",
  "x      **                         **            x",
  "x      **                         *             x",
  "x        *            **                        x",
  "x                    ***                        x",
  "x                   * **                        x",
  "x                                               x",
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];

var count = 5;
var mapas = [map1, map2, map3, map4, map5, map6];
var mapa = mapas[count];

var posI;
var posJ;
var reset = [];
var win = [];
var door = [];

function getMaze(mapa) {
  var tablero = document.getElementById('tablero');
  var tabla = document.createElement('table');
  tabla.setAttribute("id", "game");

  for (var i = 0; i < mapa.length; i++) {
    var fila = document.createElement('tr');
    for (var j = 0; j < mapa[i].length; j++) {
      var celda = document.createElement('td');
      if (mapa[i][j] == "*") {
        celda.setAttribute('class', 'blocke');
      } else if (mapa[i][j] == " ") {
        celda.setAttribute('class', 'space')
      } else if (mapa[i][j] == "o") {
        posJ = j;
        posI = i;
        reset[0] = i;
        reset[1] = j;
        celda.classList.add("init");
      } else if (mapa[i][j] == "W") {
        win.push(i);
        win.push(j);
        celda.classList.add("final");
      } else if (mapa[i][j] == "x") {
        celda.classList.add("wall");
      } else if (mapa[i][j] == "I") {
        celda.classList.add("door");
        door.push(i);
        door.push(j);
      }
      celda.setAttribute("id", i + "," + j)
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  tablero.appendChild(tabla);
}

//Objeto de teclas con código respectivo
var teclas = {
  up: 38,
  down: 40,
  left: 37,
  rigth: 39
};


var start;

function getGame(mapa) {
  //Obtenemos el mapa
  getMaze(mapa);
  document.addEventListener("keydown", function (e) {
    e.preventDefault();
    start = setInterval(function () {
      //Agregamos el evento de mover las flechas
      //Derecha
      if (e.keyCode == 39) {
        moveRigth(mapa);
      }
      //Izquierda
      if (e.keyCode == 37) {
        moveLeft(mapa);
      }
      //Abajo
      if (e.keyCode == 40) {
        moveDown(mapa);
      }
      //Arriba
      if (e.keyCode == 38) {
        moveUp(mapa);
      }
    })
  }, 2500);
}

function moveRigth(mapa) {
  var temp0 = posI + "," + posJ;
  if ((mapa[posI][posJ + 1] == " ") || (mapa[posI][posJ + 1] == "o")) {
    var temp1 = posI + "," + (posJ + 1);
    document.getElementById(temp0).setAttribute("class", "space");
    document.getElementById(temp1).setAttribute("class", "init");
    posJ++;
    console.log("derecha");
  } else if (mapa[posI][posJ + 1] == "x") {
    var temp1 = posI + "," + posJ;
    document.getElementById(temp1).setAttribute("class", "space");
    posI = reset[0];
    posJ = reset[1];
    var temp0 = reset[0] + "," + reset[1];
    document.getElementById(temp0).setAttribute("class", "init");
    clearInterval(start);
  } else if (mapa[posI][posJ + 1] == "*") {
    clearInterval(start);
  } else if (mapa[posI][posJ + 1] == "W") {
    document.getElementById(temp0).setAttribute("class", "space");
    document.getElementById(temp1).setAttribute("class", "init");
    clearInterval(start);
    return (alert("Ganaste!!"));
    winner();
  }
}

function moveLeft(mapa) {
  var temp0 = posI + "," + posJ;
  if ((mapa[posI][posJ - 1] == " ") || (mapa[posI][posJ - 1] == "o")) {
    var temp1 = posI + "," + (posJ - 1);
    document.getElementById(temp0).setAttribute("class", "space");
    posJ--;
    document.getElementById(temp1).setAttribute("class", "init");
    console.log("izquierda");
  } else if (mapa[posI][posJ - 1] == "x") {
    var temp1 = posI + "," + posJ;
    document.getElementById(temp1).setAttribute("class", "space");
    posI = reset[0];
    posJ = reset[1];
    var temp0 = reset[0] + "," + reset[1];
    document.getElementById(temp0).setAttribute("class", "init");
    clearInterval(start);
  } else if (mapa[posI][posJ - 1] == "*") {
    clearInterval(start);
  } else if (mapa[posI][posJ - 1] == "W") {
    clearInterval(start);
    return (alert("Ganaste!!"));
    winner();
  }
}

function moveUp(mapa) {
  var temp0 = posI + "," + posJ;
  if ((mapa[(posI - 1)][posJ] == " ") || (mapa[(posI - 1)][posJ] == "o")) {
    var temp1 = (posI - 1) + "," + posJ;
    document.getElementById(temp0).setAttribute("class", "space");
    document.getElementById(temp1).setAttribute("class", "init");
    posI--;
    console.log("arriba");
  } else if (mapa[(posI - 1)][posJ] == "x") {
    var temp1 = posI + "," + posJ;
    document.getElementById(temp1).setAttribute("class", "space");
    posI = reset[0];
    posJ = reset[1];
    var temp0 = reset[0] + "," + reset[1];
    document.getElementById(temp0).setAttribute("class", "init");
    clearInterval(start);
  } else if (mapa[(posI - 1)][posJ] == "*") {
    clearInterval(start);
  } else if (mapa[(posI - 1)][posJ] == "W") {
    clearInterval(start);
    var temp1 = (posI - 1) + "," + posJ;
    document.getElementById(temp0).setAttribute("class", "space");
    document.getElementById(temp1).setAttribute("class", "init");
    winner();
  }
}

function moveDown(mapa) {
  var temp0 = posI + "," + posJ;
  if ((mapa[(posI + 1)][posJ] == " ") || (mapa[(posI + 1)][posJ] == "o")) {
    var temp1 = (posI + 1) + "," + posJ;
    document.getElementById(temp0).setAttribute("class", "space");
    document.getElementById(temp1).setAttribute("class", "init");
    posI++;
    console.log("abajo");
  } else if (mapa[(posI + 1)][posJ] == "x") {
    var temp1 = posI + "," + posJ;
    document.getElementById(temp1).setAttribute("class", "space");
    posI = reset[0];
    posJ = reset[1];
    var temp0 = reset[0] + "," + reset[1];
    document.getElementById(temp0).setAttribute("class", "init");
    clearInterval(start);
  } else if (mapa[(posI + 1)][posJ] == "*") {
    clearInterval(start);
  } else if (mapa[(posI + 1)][posJ] == "*") {
    clearInterval(start);
    return (alert("Ganaste!!"));
    winner();
  }
}

