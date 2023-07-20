class Bird {
    constructor() {
        this.node = document.createElement("img");
        this.node.src = "./images/flappy.png";
        gameBoxNode.append(this.node)
        
        this.x = 50;
        this.y = 50;
        this.w = 40;
        this.h = 35;
        this.gravitySpeed = 1;
        this.jumpSpeed = 50;

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;

    }


    
    gravityEffect = () => {
        this.y += this.gravitySpeed;
        this.positionUpdate()
    }
    jumpEffect = () => {
        this.y -= this.jumpSpeed;
        this.positionUpdate()

    }
    positionUpdate = () => {
        this.node.style.top = `${this.y}px`;

    }
}