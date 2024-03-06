//Função para tocar o som
function playSound(elementId){

    document.querySelector(`#som_${elementId}`).play();

}

//Faz a atribuição da função de tocar o som para todos os botões do documento
function defineOnclickOfButtons(buttons){

    for (let index = 0; index < buttons.length; index++) {

        buttons[index].onclick = function (){

            playSound(buttons[index].classList[1]);

        };
    }    
}

//Capturando todos os botões do documento
const documentButtons = document.querySelectorAll("button");

defineOnclickOfButtons(documentButtons)



// function tocaSom (seletorAudio) {
//     const = document.querySelector(seletorAudio).play();


// if (elemento != null && elemento.localName === 'audio') {
//     
//       elemento.play();
//     }
//      else{
//          console.log('Elemento não encontrado')
// }
//  
// }

// const listaDeTeclas = document.querySelectorAll('.tecla');

// //para
// for (let contador = 0; contador < listaDeTeclas.length; contador++) {

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     const idAudio = `#som_${instrumento}`; //template string

//     tecla.onclick = function () {
//         tocaSom(idAudio);
//     }

        // tecla.onkeydown = function (evento) {

        //     console.log(evento.code == 'Space')

        //      if(evento.code == 'Space' || 'Enter') {
        //         tecla.classList.add('ativa')
        //      }
            
        
        // }

        // tecla.onkeyup = function () {
        //     tecla.classList.remove('ativa')
        // }

// }