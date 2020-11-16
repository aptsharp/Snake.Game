let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8*box,
    y: 8*box
}

let direction = "right";

function criarBG(){
    context.fillStyle = "Lightgreen";
    context.fillRect(0,0,16*box,16*box);
}

function criarCobrinha(){
    for(i=0;i<snake.length;i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }

}

function inicarJogo(){
    criarBG();
    criarCobrinha();

    //ponto de partida

    let snakeX = snake[0].X;
    let snakeY = snake[0].Y;

    //coordenadas

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop(); // para teriar o ultimo elemento

    let newHead = {
        x: snakeX,
        y: snakeY
    }

}

let jogo = setInterval(inicarJogo, 100); //para dar continuidade ao jogo sem ele travar. 

