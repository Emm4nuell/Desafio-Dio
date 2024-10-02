const prompt = require("prompt-sync")();
function heroi(xp){

    if(xp <= 1000){
        return "Ferro";
    }else if(xp >= 1001 && xp <= 2000){
        return "Bronze";
    }else if(xp >= 2001 && xp <= 5000){
        return "Prata";
    }else if(xp >= 5001 && xp <= 7000){
        return "Ouro";
    }else if(xp >= 7001 && xp <= 8000){
        return "Platina";
    }else if(xp >= 8001 && xp <= 9000){
        return "Ascedente";
    }else if(xp >= 9001 && xp <= 10000){
        return "Imortal";
    }else if(xp >= 10000){
        return "Radiante";
    }else{
        return "undefined"
    }
}

let nome = prompt("Digite seu nome: ");
let xp = prompt("Digite seu XP:")
console.log('O Herói de nome ' + nome + ' está no nível de ' + heroi(xp));