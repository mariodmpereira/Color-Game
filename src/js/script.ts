(function () {

  const DISPLAY_COLOR: any = document.getElementById("display-color"),
    H1 = document.getElementsByTagName("h1")[0],
    RESET: any = document.getElementById("reset"),
    DIFFICULTY: any = document.getElementsByClassName("difficulty"),
    SQUARES: any = document.getElementsByClassName("square"),
    BG_COLOR = "#282828"

  let colors: any, winningColor: any,
    numSquares = 6;

  // main functions

  (function () {
    buttonsSetup()
    resetGame()
    squaresSetup()
  })()

  function buttonsSetup() {
    for (let i = 0; i < DIFFICULTY.length; i++) {
      DIFFICULTY[i].addEventListener("click", function (this: any) {
        DIFFICULTY[0].classList.remove("active");
        DIFFICULTY[1].classList.remove("active");
        DIFFICULTY[2].classList.remove("active");
        this.classList.add("active")
        const CLICKED_BUTTON = this.textContent
        if (CLICKED_BUTTON === "Easy") {
          numSquares = 3;
        } else if (CLICKED_BUTTON === "Medium") {
          numSquares = 6;
        } else {
          numSquares = 9;
        }
        resetGame()
      })
    }
  }

  function resetGame() {
    RESET.addEventListener("click", resetGame)
    colors = randomColors()
    for (let i = 0; i < SQUARES.length; i++) {
      if (colors[i]) {
        SQUARES[i].style.display = "block"
        SQUARES[i].style.backgroundColor = colors[i]
      } else {
        SQUARES[i].style.display = "none"
      }
    }
    winningColor = colors[randomPicker()]
    DISPLAY_COLOR.textContent = winningColor
  }

  function squaresSetup() {
    for (let i = 0; i < SQUARES.length; i++) {
      SQUARES[i].addEventListener("click", function (this: any) {
        const CLICKED_COLOR = this.style.backgroundColor
        if (CLICKED_COLOR === winningColor) {
          changeColors(CLICKED_COLOR)
        } else {
          this.style.backgroundColor = BG_COLOR
        }
      })
    }
  }

// secondary functions

  function changeColors(color: any) {
    for (let i = 0; i < SQUARES.length; i++) {
      SQUARES[i].style.backgroundColor = color
    }
  }

  function randomPicker() {
    return Math.floor(Math.random() * colors.length)
  }

  function randomNum() {
    return Math.floor(Math.random() * 256)
  }

  function randomRGB() {
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
  }

  function randomColors() {
    const ARR = [];
    for (let i = 0; i < numSquares; i++) {
      ARR.push(randomRGB())
    }
    return ARR
  }

})()