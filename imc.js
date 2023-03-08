const calcular = document.getElementById("calcular");

function imc(){
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if(nome !== '' && altura !== '' && peso !== ''){
        
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classficacao = '';

    if(valorIMC < 18.5){
        classficacao = 'abaixo do peso.'
    }else if(valorIMC < 25){
        classficacao = 'no peso ideal. Parabéns!!!'
    }else if(valorIMC < 30){
        classficacao = 'acima do peso.'
    }else if(valorIMC < 35){
        classficacao = 'com obesidade grau I.'
    }else if(valorIMC < 40){
        classficacao = 'com obesidade grau II.'
    }else{
        classficacao = 'com obesidade grau III. Cuidado!'
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classficacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}

calcular.addEventListener('click', imc);