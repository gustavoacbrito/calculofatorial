
const botao = document.getElementById("botao");
var resultado;
var resposta = document.querySelector("#resposta");

botao.addEventListener("click",fatorial);



function fatorial() {

    var n = document.getElementById("caixa_de_entrada").value;

    if (isNaN(n) || (!Number.isInteger(Number(n))) || n<0 || !n)  {
      resultado = `${n} não é uma entrada válida. Valor inserido deve ser um número, inteiro e positivo.`; // string entre crase e com variavel dentro de ${}
      
    }
    else{ 
      let i;
      var produto = 1;
      for ( i=2;i<=Number.parseInt(n);i++)
      produto *= i;
      resultado = produto;
      
    }

    resposta.value= resultado ;
    
    }

    
    

  
  
