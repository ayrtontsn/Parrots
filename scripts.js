const bobross = "projeto__parrots__imagens/assets/bobrossparrot.gif"
const explody = "projeto__parrots__imagens/assets/explodyparrot.gif"
const fiesta = "projeto__parrots__imagens/assets/fiestaparrot.gif"
const metal = "projeto__parrots__imagens/assets/metalparrot.gif"
const revertit = "projeto__parrots__imagens/assets/revertitparrot.gif"
const triplets = "projeto__parrots__imagens/assets/tripletsparrot.gif"
const unicorn = "projeto__parrots__imagens/assets/unicornparrot.gif"

let parrots = [bobross,explody,fiesta,metal,revertit,triplets,unicorn]
parrots.sort(comparador);
const game=[]

let num = 0;
while(num%2 !== 0 || num < 3 || num >14){
    num = Number(prompt("Com quantas cartas quer jogar?"));
}

aux1 = 0;
aux2 = 0;
while(aux1<num/2){
    game[aux2] = parrots[aux1];
    aux2++;
    game[aux2] = parrots[aux1];
    aux2++;
    aux1++;
}

game.sort(comparador);

let front = ""
let back = ""
let img = ""

let hits = 0;
let plays = 0;

cards(num);

function cards(num){
    let cont = 0;
    let carta = document.querySelector(".game");
    while(cont < num){
        carta.innerHTML +=  `      
        <div class="card" onclick="play(this)">
            <div class="front-face face" >
                <img src="projeto__parrots__imagens/assets/back.png"></img>
            </div>
            <div class="back-face face" >
                <img src=${game[cont]}></img>
            </div>
        </div>`;                              
        cont++;
    }
}



function play(click){
    front_old = front;
    back_old = back;
    img_old = img;

    if (front === ""){
        select(click);
    }

    else{
        select(click);
        if(img_old === img){
            equal();
        }
        else{
            setTimeout(not_equal,1000);
        }
    }

    if(hits === num/2){
        alert(`Você ganhou em ${plays} jogadas!`)
    }
}

function select(click){
    front = click.childNodes[1];
    back = click.childNodes[3];
    img = back.innerHTML;

    front.classList.add("activated");
    back.classList.add("activated");

    plays++;
}

function equal(){
    front.classList.add("activated");
    back.classList.add("activated");


    front = "";
    back = "";
    img = "";

    hits++;
}

function not_equal(){
    front.classList.toggle("activated");
    back.classList.toggle("activated");
    

    front_old.classList.toggle("activated");
    back_old.classList.toggle("activated");

    front = ""
    back = ""
    img = ""
}

function turn_back(){}

function comparador() { 
	return Math.random() - 0.5; 
}