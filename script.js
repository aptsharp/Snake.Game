let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8*box,
    y: 8*box
}

let direction = 'right';

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

document.addEventListener('keydown', update); // para pegar os eventos quando acontece chama a função

function update(event){ //impede que a cobrinha va para o lado errdado
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

function inicarJogo(){

    // criando valores no plano cartesiano

    if(snake[0].x > 15* box && direction == 'right') snake[0].x=0;
    if(snake[0].X<0 && direction == 'left') snake[0].X=16 *box;
    if(snake[0].y>15*box && direction == 'donw') snake[0].y = 0;
    if(snake[0].y<0 && direction == 'up') snake[0].y = 16*box;
    


    criarBG();
    criarCobrinha();

    //ponto de partida

    let snakeX = snake[0].X;
    let snakeY = snake[0].Y;

    //coordenadas

    if(direction == 'right') snakeX += box;
    if(direction == 'left') snakeX -= box;
    if(direction == 'up') snakeY -= box;
    if(direction == 'down') snakeY += box;

    snake.pop(); // para teriar o ultimo elemento

    let newHead = {
        x: snakeX,
        y: snakeY
    }

}

let jogo = setInterval(inicarJogo, 100); //para dar continuidade ao jogo sem ele travar. 

