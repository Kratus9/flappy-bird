// console.log("desde game")
class Game {
  constructor() {
    this.bird = new Bird();
    // this.tube = new Tube();
    this.tubeArr = [];

    this.frames = 0;
    this.isGameOn = true;
  }

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none"
    gameOverScreenNode.style.display = "flex"
  }

  colBirdFloor = () => {
    if (this.bird.y + this.bird.h > gameBoxNode.offsetHeight) {
        this.gameOver();
    }
  }

  colTubes = () => {
    this.tubeArr.forEach((eachObst) => {
        if (this.bird.x < eachObst.x + eachObst.w &&
            this.bird.x + this.bird.w > eachObst.x &&
            this.bird.y < eachObst.y + eachObst.h &&
            this.bird.y + this.bird.h > eachObst.y
            ) {
            this.gameOver()
            }
    })
  }

  obstAppear = () => {
    if (this.tubeArr.length === 0 || this.frames % 120 === 0) {
        let randomPosY = Math.floor(Math.random() * -200)

        let newtubeUp = new Tube(randomPosY, true)
        this.tubeArr.push (newtubeUp)

        let newtubeDown = new Tube(randomPosY + 400, false)
        this.tubeArr.push (newtubeDown)
    }
  }

  obstDisappear = () => {
    if (this.tubeArr[0].x < -50) {
        this.tubeArr[0].node.remove()
        this.tubeArr.shift()
    }
  }

  gameLoop = () => {
    // console.log("start")
    this.frames++;
    this.bird.gravityEffect();
    // this.tube.automaticMovement();
    this.obstAppear();
    this.obstDisappear();
    this.colBirdFloor();
    this.colTubes();
    this.tubeArr.forEach((eachObst) => {
        eachObst.automaticMovement();
    })
    if (this.isGameOn === true) {
        requestAnimationFrame(this.gameLoop);
    }
  };
}
