const playGame = document.querySelector("#playGame");
const p1Color = document.querySelector("#P1Color");
const p2Color = document.querySelector("#P2Color");
const CSS_COLOR_NAMES = {
  AliceBlue: "#F0F8FF",
  AntiqueWhite: "#FAEBD7",
  Aqua: "#00FFFF",
  Aquamarine: "#7FFFD4",
  Azure: "#F0FFFF",
  Beige: "#F5F5DC",
  Bisque: "#FFE4C4",
  Black: "#000000",
  BlanchedAlmond: "#FFEBCD",
  Blue: "#0000FF",
  BlueViolet: "#8A2BE2",
  Brown: "#A52A2A",
  BurlyWood: "#DEB887",
  CadetBlue: "#5F9EA0",
  Chartreuse: "#7FFF00",
  Chocolate: "#D2691E",
  Coral: "#FF7F50",
  CornflowerBlue: "#6495ED",
  Cornsilk: "#FFF8DC",
  Crimson: "#DC143C",
  Cyan: "#00FFFF",
  DarkBlue: "#00008B",
  DarkCyan: "#008B8B",
  DarkGoldenRod: "#B8860B",
  DarkGray: "#A9A9A9",
  DarkGrey: "#A9A9A9",
  DarkGreen: "#006400",
  DarkKhaki: "#BDB76B",
  DarkMagenta: "#8B008B",
  DarkOliveGreen: "#556B2F",
  DarkOrange: "#FF8C00",
  DarkOrchid: "#9932CC",
  DarkRed: "#8B0000",
  DarkSalmon: "#E9967A",
  DarkSeaGreen: "#8FBC8F",
  DarkSlateBlue: "#483D8B",
  DarkSlateGray: "#2F4F4F",
  DarkSlateGrey: "#2F4F4F",
  DarkTurquoise: "#00CED1",
  DarkViolet: "#9400D3",
  DeepPink: "#FF1493",
  DeepSkyBlue: "#00BFFF",
  DimGray: "#696969",
  DimGrey: "#696969",
  DodgerBlue: "#1E90FF",
  FireBrick: "#B22222",
  FloralWhite: "#FFFAF0",
  ForestGreen: "#228B22",
  Fuchsia: "#FF00FF",
  Gainsboro: "#DCDCDC",
  GhostWhite: "#F8F8FF",
  Gold: "#FFD700",
  GoldenRod: "#DAA520",
  Gray: "#808080",
  Grey: "#808080",
  Green: "#008000",
  GreenYellow: "#ADFF2F",
  HoneyDew: "#F0FFF0",
  HotPink: "#FF69B4",
  IndianRed: "#CD5C5C",
  Indigo: "#4B0082",
  Ivory: "#FFFFF0",
  Khaki: "#F0E68C",
  Lavender: "#E6E6FA",
  LavenderBlush: "#FFF0F5",
  LawnGreen: "#7CFC00",
  LemonChiffon: "#FFFACD",
  LightBlue: "#ADD8E6",
  LightCoral: "#F08080",
  LightCyan: "#E0FFFF",
  LightGoldenRodYellow: "#FAFAD2",
  LightGray: "#D3D3D3",
  LightGrey: "#D3D3D3",
  LightGreen: "#90EE90",
  LightPink: "#FFB6C1",
  LightSalmon: "#FFA07A",
  LightSeaGreen: "#20B2AA",
  LightSkyBlue: "#87CEFA",
  LightSlateGray: "#778899",
  LightSlateGrey: "#778899",
  LightSteelBlue: "#B0C4DE",
  LightYellow: "#FFFFE0",
  Lime: "#00FF00",
  LimeGreen: "#32CD32",
  Linen: "#FAF0E6",
  Magenta: "#FF00FF",
  Maroon: "#800000",
  MediumAquaMarine: "#66CDAA",
  MediumBlue: "#0000CD",
  MediumOrchid: "#BA55D3",
  MediumPurple: "#9370DB",
  MediumSeaGreen: "#3CB371",
  MediumSlateBlue: "#7B68EE",
  MediumSpringGreen: "#00FA9A",
  MediumTurquoise: "#48D1CC",
  MediumVioletRed: "#C71585",
  MidnightBlue: "#191970",
  MintCream: "#F5FFFA",
  MistyRose: "#FFE4E1",
  Moccasin: "#FFE4B5",
  NavajoWhite: "#FFDEAD",
  Navy: "#000080",
  OldLace: "#FDF5E6",
  Olive: "#808000",
  OliveDrab: "#6B8E23",
  Orange: "#FFA500",
  OrangeRed: "#FF4500",
  Orchid: "#DA70D6",
  PaleGoldenRod: "#EEE8AA",
  PaleGreen: "#98FB98",
  PaleTurquoise: "#AFEEEE",
  PaleVioletRed: "#DB7093",
  PapayaWhip: "#FFEFD5",
  PeachPuff: "#FFDAB9",
  Peru: "#CD853F",
  Pink: "#FFC0CB",
  Plum: "#DDA0DD",
  PowderBlue: "#B0E0E6",
  Purple: "#800080",
  RebeccaPurple: "#663399",
  Red: "#FF0000",
  RosyBrown: "#BC8F8F",
  RoyalBlue: "#4169E1",
  SaddleBrown: "#8B4513",
  Salmon: "#FA8072",
  SandyBrown: "#F4A460",
  SeaGreen: "#2E8B57",
  SeaShell: "#FFF5EE",
  Sienna: "#A0522D",
  Silver: "#C0C0C0",
  SkyBlue: "#87CEEB",
  SlateBlue: "#6A5ACD",
  SlateGray: "#708090",
  SlateGrey: "#708090",
  Snow: "#FFFAFA",
  SpringGreen: "#00FF7F",
  SteelBlue: "#4682B4",
  Tan: "#D2B48C",
  Teal: "#008080",
  Thistle: "#D8BFD8",
  Tomato: "#FF6347",
  Turquoise: "#40E0D0",
  Violet: "#EE82EE",
  Wheat: "#F5DEB3",
  White: "#FFFFFF",
  WhiteSmoke: "#F5F5F5",
  Yellow: "#FFFF00",
  YellowGreen: "#9ACD32",
};
class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.boardArr = [];
    this.currPlayer = 1;
  }

  makeBoard() {
    for (let y = 0; y < this.height; y++) {
      this.boardArr.push(Array.from({ length: this.width }));
    }
  }

  makeHtmlBoard() {
    const board = document.getElementById("board");
    // make column tops (clickable area for adding a piece to that column)
    const top = document.createElement("tr");
    top.setAttribute("id", "column-top");
    top.addEventListener("click", this.handleClick);

    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement("td");
      headCell.setAttribute("id", x);
      top.append(headCell);
    }

    board.append(top);

    // make main part of board
    for (let y = 0; y < this.height; y++) {
      const row = document.createElement("tr");

      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement("td");
        cell.setAttribute("id", `${y}-${x}`);
        row.append(cell);
      }
      board.append(row);
    }
  }

  findSpotForCol(x) {
    for (let y = this.height - 1; y >= 0; y--) {
      if (!this.boardArr[y][x]) {
        return y;
      }
    }
    return null;
  }

  placeInTable(y, x) {
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.classList.add(`p${this.currPlayer}`);
    piece.style.top = -50 * (y + 2);
    piece.style.backgroundColor = this.playerColors[this.currPlayer - 1];

    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }

  endGame(msg) {
    alert(msg);
    document
      .querySelector("#column-top")
      .removeEventListener("click", this.handleClick);
  }

  handleClick(evt) {
    // get x from ID of clicked cell
    const x = +evt.target.id;

    // get next spot in column (if none, ignore click)
    const y = currGame.findSpotForCol(x);
    if (y === null) {
      return;
    }

    // place piece in board and add to HTML table
    currGame.boardArr[y][x] = currGame.currPlayer;
    currGame.placeInTable(y, x);

    // check for win
    if (currGame.checkForWin()) {
      return currGame.endGame(`Player ${currGame.currPlayer} won!`);
    }

    // check for tie
    if (currGame.boardArr.every((row) => row.every((cell) => cell))) {
      return currGame.endGame("Tie!");
    }

    // switch players
    currGame.currPlayer = currGame.currPlayer === 1 ? 2 : 1;
  }
  checkForWin() {
    function _win(cells) {
      // Check four cells to see if they're all color of current player
      //  - cells: list of four (y, x) cells
      //  - returns true if all are legal coordinates & all match currPlayer

      return cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < currGame.height &&
          x >= 0 &&
          x < currGame.width &&
          currGame.boardArr[y][x] === currGame.currPlayer
      );
    }

    for (let y = 0; y < currGame.height; y++) {
      for (let x = 0; x < currGame.width; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [
          [y, x],
          [y, x + 1],
          [y, x + 2],
          [y, x + 3],
        ];
        const vert = [
          [y, x],
          [y + 1, x],
          [y + 2, x],
          [y + 3, x],
        ];
        const diagDR = [
          [y, x],
          [y + 1, x + 1],
          [y + 2, x + 2],
          [y + 3, x + 3],
        ];
        const diagDL = [
          [y, x],
          [y + 1, x - 1],
          [y + 2, x - 2],
          [y + 3, x - 3],
        ];

        // find winner (only checking each win-possibility as needed)
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    }
  }
}
let currGame = new Game(6, 7);

const newGameHandler = function (event) {
  event.preventDefault();
  if (
    Object.keys(CSS_COLOR_NAMES)
      .map((v, i, a) => v.toLowerCase())
      .includes(p1Color.value.toLowerCase().replace(" ", "")) &&
    Object.keys(CSS_COLOR_NAMES)
      .map((v, i, a) => v.toLowerCase())
      .includes(p2Color.value.toLowerCase().replace(" ", ""))
  ) {
    document.getElementById("board").innerHTML = "";
    currGame.boardArr = [];
    currGame.makeBoard();
    currGame.makeHtmlBoard();
    currGame.currPlayer = 1;
    currGame.playerColors = [p1Color.value, p2Color.value];
  } else {
    console.log("false match");
    alert("Please enter a valid color name!");
  }
};
playGame.addEventListener("click", newGameHandler);
