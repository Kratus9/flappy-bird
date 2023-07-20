class Tube {
    constructor(posY, isObstUp) {
        this.node = document.createElement("img");
        if (isObstUp === true) {
            this.node.src = "./images/obstacle_top.png"
        }
        else {
            this.node.src = "./images/obstacle_bottom.png"

        }
        gameBoxNode.append(this.node)

        this.x = gameBoxNode.offsetWidth;
        this.y = posY;
        this.w = 50;
        this.h = 250;

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;

    }
    automaticMovement = () => {
        this.x -= 2;
        this.positionUpdate();
    }
    
    positionUpdate = () => {
        this.node.style.left = `${this.x}px`
    }
}