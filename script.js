var listaNomes = ["Forthisara", "Dicles", "Mensa", "Reginbeorth", "Gar-ka", "Cynke", "Fleddan", "Sabert", "Sanliam", "Sanliam", "Sanloc"]
var listaImagens = ["https://cdna.artstation.com/p/assets/images/images/001/772/136/large/fabio-balzani-4f7d3c3b3ce1ad4e3738d17a55f73a9d.jpg?1452522720","https://w7.pngwing.com/pngs/727/237/png-transparent-dungeons-dragons-role-playing-game-non-player-character-pathfinder-roleplaying-game-princes-of-the-apocalypse-legendary-creature-game-dragon.png","http://www.selo-multiversos.com.br/wp-content/uploads/2021/03/christopher-onciu-rpg-project-swordsman-christopher-onciu-0227191-940x1366.jpg","https://ovelhinhodorpg.files.wordpress.com/2015/11/807070cb0794525a7c7ffc6b0342375a.jpg","https://w7.pngwing.com/pngs/800/312/png-transparent-dungeons-dragons-pathfinder-roleplaying-game-elf-role-playing-game-player-character-elf-game-elf-fictional-character.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHX1DRyZIdZhWa6Ymkj_2dijmrgSkDQzgFFg&usqp=CAU","https://vocevaientender.files.wordpress.com/2012/01/guerreio-humano.jpg?w=474","https://i0.wp.com/blogdoscursos.com.br/wp-content/uploads/2016/01/rogue-m.jpg","https://img2.gratispng.com/20180408/scq/kisspng-piracy-role-playing-game-character-pathfinder-role-pathfinder-5aca93d92ea2f8.3349299215232255611911.jpg","https://1.bp.blogspot.com/_nKj55rECpf4/R9oRKcn7_lI/AAAAAAAAAKM/sz-2saDT_DE/s400/gunner+rpg.jpg","http://pm1.narvii.com/6210/cbb241214e6b55827747d284f00793f9f0cf076b_00.jpg","https://i.pinimg.com/236x/eb/88/08/eb8808034db207df63aa06b8b09959e8.jpg"]
var carta0 = {Nome:"",Imagem:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0
                        //Inteligencia:0,
                        //Sabedoria:0,
                        //Carisma:0}
            }}
var carta1 = {Nome:"",Imagem:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0
                        //Inteligencia:0,
                        //Sabedoria:0,
                        //Carisma:0}
            }}
var carta2 = {Nome:"",Imagem:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0
                        //Inteligencia:0,
                        //Sabedoria:0,
                        //Carisma:0}
            }}
var carta3 = {Nome:"",Imagem:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0
                        //Inteligencia:0,
                        //Sabedoria:0,
                        //Carisma:0}
            }}
var carta4 = {Nome:"",Imagem:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0
                        //Inteligencia:0,
                        //Sabedoria:0,
                        //Carisma:0}
            }}
var carta5 = {Nome:"",Imagem:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0
                        //Inteligencia:0,
                        //Sabedoria:0,
                        //Carisma:0}
            }}
var carta6 = {Nome:"",Imagem:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0
                        //Inteligencia:0,
                        //Sabedoria:0,
                        //Carisma:0}
            }}
var carta7 = {Nome:"",Imagem:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0
                        //Inteligencia:0,
                        //Sabedoria:0,
                        //Carisma:0}
            }}
var carta8 = {Nome:"",Imagem:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0
                        //Inteligencia:0,
                        //Sabedoria:0,
                        //Carisma:0}
            }}
var carta9 = {Nome:"",Imagem:"",
             Atributos: {Forca:0,
                        Destreza:0,
                        Constituicao:0
                        //Inteligencia:0,
                        //Sabedoria:0,
                        //Carisma:0}
            }}

var cartas = [carta0,carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9]
var cartaDoJogador=cartas[0];
var cartaDoOponente=cartas[1];

function gerarNome(){
  var valorNome = parseInt(Math.random()*(listaNomes.length));
  var stringNome = listaNomes[valorNome];
  listaNomes.splice(valorNome, 1);
  return stringNome;
}

function gerarImagem(){
  var valorNome = parseInt(Math.random()*(listaNomes.length));
  var stringNome = listaImagens[valorNome];
  listaNomes.splice(valorNome, 1);
  return stringNome;
}

function gerarValorAtributo(){
  var valorAtributo = parseInt(Math.random()*20);
  while (valorAtributo<10){
    valorAtributo = parseInt(Math.random()*20);
  }
  return valorAtributo;
}

function gerarCarta(){
  for (var i=0; i<10; i++){
    cartas[i].Nome=gerarNome();
    cartas[i].Imagem=gerarImagem();
    console.log(gerarImagem());
    cartas[i].Atributos.Forca=gerarValorAtributo();
    cartas[i].Atributos.Destreza=gerarValorAtributo();
    cartas[i].Atributos.Constituicao=gerarValorAtributo();
    //cartas[i].Atributos.Inteligencia=gerarValorAtributo();
    //cartas[i].Atributos.Sabedoria=gerarValorAtributo();
    //cartas[i].Atributos.Carisma=gerarValorAtributo();
  }  
  //console.log(cartas[1].Imagem) - OK
}

function sortearCarta(){
  gerarCarta();
  document.getElementById("btnSortear").disabled=true;
  document.getElementById("btnJogar").disabled=false;
  exibirCartaJogador();
}

/*function exibirOpcoes(){
  var opcoes = document.getElementById("carta-jogador")
  //var opcoes = document.getElementById("opcoes")
  //console.log(opcoes)
  var opcoesTexto = "";
  //var opcoesTexto = `<h3>Nome da Carta: ${cartaDoJogador.Nome}</h3>`;
  
  
  for (var atributo in cartaDoJogador.Atributos){
    var valorDoAtributo=cartaDoJogador.Atributos[atributo]
    opcoesTexto = opcoesTexto + `<input type='radio' name='atributo' value=${atributo}>${atributo} (${valorDoAtributo})</br>`
  }
  opcoes.innerHTML = opcoesTexto;
}*/

function obtemAtributoSelecionados(){
  var radioAtributos = document.getElementsByName("atributo");
//  var escolha=false;
  
  for (var i=0; i<radioAtributos.length;i++){
    if (radioAtributos[i].checked){
//      escolha=true;
      return atributoSelecionado = radioAtributos[i].value;
    }
  }
  
/*  if (escolha){
    return atributoSelecionado;
  } else {
    window.alert("Para jogar é necessário escolher um atributo!")
  }*/
}

function jogar(){
  var atributoSelecionado=obtemAtributoSelecionados();
  if(typeof atributoSelecionado === "undefined"){
    window.alert("Para jogar é necessário escolher um atributo!")
  } else {
    jogarOK(atributoSelecionado);
  }
}

function jogarOK(argumentoAtributoSelecionado){
  var atributoSelecionado = argumentoAtributoSelecionado; //obtemAtributoSelecionados();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaDoJogador = cartaDoJogador.Atributos[atributoSelecionado]
  var valorCartaDoOponente = cartaDoOponente.Atributos[atributoSelecionado]
  var nomeCartaDoOponente = cartaDoOponente.Nome;
  
  if (valorCartaDoJogador>valorCartaDoOponente){
    elementoResultado.innerHTML = `<h3>Você escolheu o atributo:${atributoSelecionado}=${valorCartaDoJogador}. </br>Contra: ${valorCartaDoOponente} do oponente ${nomeCartaDoOponente}.</br>VITÓRIA!</h3>`
  } else if (valorCartaDoJogador>valorCartaDoOponente){
    elementoResultado.innerHTML = `<h3>Você escolheu o atributo:${atributoSelecionado}=${valorCartaDoJogador}. </br>Contra: ${valorCartaDoOponente} do oponente ${nomeCartaDoOponente}.</br>DERROTA!</h3>`
  } else {
    elementoResultado.innerHTML = `<h3>Você escolheu o atributo:${atributoSelecionado}=${valorCartaDoJogador}. </br>Contra: ${valorCartaDoOponente} do oponente ${nomeCartaDoOponente}.</br>EMPATE!</h3>`
  }
  exibirCartaOponente();
}

function exibirCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador");
  //console.log(cartaDoJogador.Nome);
  //console.log(cartaDoJogador.Imagem);
  divCartaJogador.style.backgroundImage=`url(${cartaDoJogador.Imagem})`
  var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">`
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
//  var opcoesTexto = `<h3>Nome da Carta: ${cartaDoJogador.Nome}</h3>`;
  var opcoesTexto = "";
  for (var atributo in cartaDoJogador.Atributos){
    var valorDoAtributo=cartaDoJogador.Atributos[atributo]
    opcoesTexto = opcoesTexto + `<input type='radio' name='atributo' value=${atributo}>${atributo} (${valorDoAtributo})</br>`
    }
    console.log(cartaDoJogador.Imagem)
    var nome = `<p class="carta-subtitle">${cartaDoJogador.Nome}</p>`
    
    divCartaJogador.innerHTML= moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaOponente(){
  var divCartaOponente = document.getElementById("carta-maquina");
  //console.log(cartaDoJogador.Nome);
  //console.log(cartaDoJogador.Imagem);
  divCartaOponente.style.backgroundImage=`url(${cartaDoOponente.Imagem})`
  var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">`
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
//  var opcoesTexto = `<h3>Nome da Carta: ${cartaDoJogador.Nome}</h3>`;
  var opcoesTexto = "";
  for (var atributo in cartaDoOponente.Atributos){
    var valorDoAtributo=cartaDoOponente.Atributos[atributo]
    //opcoesTexto = opcoesTexto + `<input type='radio' name='atributo' value=${atributo}>${atributo} (${valorDoAtributo})</br>`
    opcoesTexto = opcoesTexto + `<strong><name='atributo' value=${atributo}>${atributo} (${valorDoAtributo})</strong></br></br>`
    }
    console.log(cartaDoOponente.Imagem)
    var nome = `<p class="carta-subtitle">${cartaDoOponente.Nome}</p>`
    
    divCartaOponente.innerHTML= moldura + nome + tagHTML + opcoesTexto + "</div>"
}