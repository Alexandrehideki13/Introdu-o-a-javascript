
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.linkedin.com/mynetwork/");
    //window.location.href = "https://www.linkedin.com/mynetwork/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*
var validar = 0;

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade:");
console.log(validaIdade(idade));
console.log(validar);
*/

//alert(soma(5, 10));

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getMonth()+1); // "+1 no month por conta do índice"
*/
/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while(count <= 5) {
    console.log(count);
    alert(count); // ai vai mostrar na tela 5 pop-ups dom os números 1,2,3,4,5
    count = count + 1; //ou count++
}
*/


/*
var idade = prompt("Qual sua idade"); 

//o comando "prompt" vai colocar tela uma caixa de pergunta para 
//o usuário, o que o usuário responder vai ser armazenado na variável idade

//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
} else {
    alert("menor de idade");
}
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas.nome);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva"); //push para add algo
//lista.pop(); //pop  para tirar o último
//console.log(lista.length);
//console.log(lista.reverse()); //para reverter a lista
//console.log(lista);
//console.log(lista.toString()); //coloca uma virgula automaticamente
//console.log(lista.join(" - ")); //coloca o sinal que colocar, nesse caso um traço

//console.log(lista[1]);
//alert(lista[1]);


//var nome = "Alexandre Hideki";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo " + nome);
//alert(nome + " tem " + idade + " anos "); 
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
