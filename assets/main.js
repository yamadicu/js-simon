//creo la funzione che randomizzi i 5 numeri casuali e li salvi in un array

//nella funzione principale metto il timer che allo scadere dei 30 secondi mi metta in d-none i numeri casuali dell'array

//chiedo tramite il prompt di inserire i numeri casuali

//ciclo di controllo

//richiamo la classe dall' HTML
let container = document.querySelector('.container')
let risp = document.querySelector('risposta')

//la funzione parte al click di start
start.addEventListener('click', function (){
    game();
})

//funzione che contiene tutto il gioco
function game() {

    //richiamo la funzione dell'array
    let arrayBotCompleto = numBot();
    console.log(arrayBotCompleto)

    for (let i = 0; i < arrayBotCompleto.length; i++) {
        
        let carte = document.createElement('div')
        carte.classList.add('carta')
        container.append(carte)
        carte.innerText = arrayBotCompleto[i];
        
    }

    setTimeout( function() {

        //allo scadere dei 3 secondi la classe carte che contiene i numeri casuali stampati scompare a causa del display none
        container.classList.add('d-none')
    },3*1000)

    setTimeout(function() {

        let arrayGamer = []

        while( arrayGamer.length < 5){
            let numUtente = parseInt(prompt('inserisci un numero'))
            if ( !arrayGamer.includes(numUtente)) {
                arrayGamer.push(numUtente)
            }
        }

        let indovinati =[]

        for( let x = 0; x < arrayGamer.length; x++){
            if(arrayBotCompleto.includes( arrayGamer[x])){
                indovinati.push(arrayGamer[x])
            }
        }

        //stampa del risultato
        document.getElementById('risposta').innerHTML = `hai indovinato ${indovinati.length} e sono: ${indovinati}`

    }, 3500)
}

//funzione dei numeri casuali

function randomNum( min, max){
    return Math.floor( Math.random() * max) + min
}

//funzione che crea l'array
function numBot(){

    let arrayBot = []
    //creo il ciclo che permette di salvare i numeri nell'array
    while ( arrayBot.length < 5 ){

        let num = randomNum( 1, 100 );

        if( !arrayBot.includes(num)){

            arrayBot.push(num)
        }
    }
    return arrayBot
}