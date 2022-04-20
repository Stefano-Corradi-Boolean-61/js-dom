
const elTitle = document.getElementById('title');

const primoH2 = document.querySelector('h2');
const secondoH2 = document.querySelector('h2.secondo');

const secondaryTitle = document.querySelector('#sottotitolo');

const box = document.querySelector('.box');

const btn1 = document.querySelector('button.click1');
const btn2 = document.querySelector('button.click2');
const btn3 = document.querySelector('button.click3');
const btnStartQuestion = document.querySelector('#startQuestion');

console.log('bottone --> ',btn1);

elTitle.innerHTML ="ciao"

console.log(elTitle);
console.log(primoH2);
console.log(secondaryTitle);


secondaryTitle.innerHTML = "Sono il sottotitolo";

console.log(secondaryTitle.classList);
console.log(secondaryTitle.className);

// aggiungo ina classe
secondaryTitle.classList.add('upper');

console.log(secondaryTitle.classList);
console.log(secondaryTitle.className);

// elimino una classe
secondaryTitle.classList.remove('underline');

console.log(secondaryTitle.classList);
console.log(secondaryTitle.className);

// in quesot modo sovrescrivo tutte le classi presenti
secondaryTitle.className = "green";

console.log(secondaryTitle.classList);
console.log(secondaryTitle.className);

// in questo modo scrivo uno stire per volta inline
primoH2.style.backgroundColor = "violet";
primoH2.style.color = "white";

// così posso iserire più stitli inline
elTitle.style.cssText = "background-color:pink;font-size:55px;border:2px dashed green;color:white;";

primoH2.append(' - testo aggiunto con append');
primoH2.prepend('testo aggiunto con prepend - ');

// al click del bottone 1 lancio un alert

btn1.addEventListener('click', function(){
  // qui vengono eseguiti i comandi al click
  alert('ciao');
});

btn2.addEventListener('click', function(){
  //coloro di rosso il secondo h2 o togliamo il rosso se lo è già
  console.log(secondoH2);
  secondoH2.classList.toggle('red');
});

btn3.addEventListener('click', function(){
  // nascondo il box
  box.classList.toggle('hide');
});


btnStartQuestion.addEventListener('click',startQuestion);



function startQuestion(){
   // richiedo il genere
   let genere = prompt('maschio o femmina?');
   // trasformando la stringa in minuscolo elimino il problema del case sensitive
   genere = genere.toLowerCase();
   // chiedo il nome
   const nome = prompt('Come ti chiami?');
 
   console.log(genere, nome);
   //stampo azzurro se maschio e rosa se femmina
   const output = document.querySelector('.maschio-femmina');
 
   // scrivo il testo
   output.innerHTML = "Ciao " + nome + "!";
 
   // aggiungo la classe
   if(genere === 'femmina'){
    addClassToOutput(output,'pink');
   } else if(genere === 'maschio'){
    addClassToOutput(output,'blue');
   }
}


function addClassToOutput(element, classToAdd){
  element.classList.add(classToAdd);
}