/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

let lista_appoggio = [];
let risultato = document.querySelector('#risultato');

function clickImg(event) {
    
    const boxes = event.currentTarget;
    const id = boxes.dataset.questionId;
    const box = document.querySelectorAll('.choice-grid div');
    
    for (let b of box){
        if(id==b.dataset.questionId) {
            b.classList.add('notSelezionata');
            const img=b.querySelector('.checkbox');
            img.src='images/unchecked.png';
        }
    }
    
    boxes.classList.add('selezionata');
    boxes.classList.remove('notSelezionata');
    const img=boxes.querySelector('.checkbox');
    img.src="images/checked.png";
    
    switch(event.currentTarget.dataset.questionId) {
        
        case 'one': lista_appoggio[0] = event.currentTarget.dataset.choiceId;
            break;
        case 'two': lista_appoggio[1] = event.currentTarget.dataset.choiceId;
            break;
        case 'three': lista_appoggio[2] = event.currentTarget.dataset.choiceId;
            break;
        
    }

    let index;

    if(lista_appoggio.length===3) {
        if(lista_appoggio[0] === lista_appoggio[1]) {
            index = lista_appoggio[0];
            title=RESULTS_MAP[index].title;
            desc=RESULTS_MAP[index].contents;
            result(title, desc);

        }
        else if(lista_appoggio[0] === lista_appoggio[2]) {
            index = lista_appoggio[0];
            title=RESULTS_MAP[index].title;
            desc=RESULTS_MAP[index].contents;
            result(title, desc);

        }
        else if(lista_appoggio[1] === lista_appoggio[2]) {
            index = lista_appoggio[1];
            title=RESULTS_MAP[index].title;
            desc=RESULTS_MAP[index].contents;
            result(title, desc);

        }
        else {
            index = lista_appoggio[0];
            title=RESULTS_MAP[index].title;
            desc=RESULTS_MAP[index].contents;
            result(title, desc);
        }

    }

}

risultato = document.querySelector('#risultato');

function result(title, desc){
    
    const t = risultato.querySelector('#titolo');
    const d = risultato.querySelector('#descrizione');
    const b = risultato.querySelector('#reset');

    t.textContent = title;
    d.textContent = desc;

    b.addEventListener('click', reset);
    risultato.classList.remove('nascosta');

    for(let b of boxes){

        b.removeEventListener('click', clickImg);
    
    }

}

function reset(){

    const b = risultato.querySelector('#reset');
    b.removeEventListener('click', reset);

    for(let box of boxes){
        
        box.addEventListener('click', clickImg);

        if(box.classList.contains('selezionata')){
            box.classList.remove('selezionata');
            let img = box.querySelector('.checkbox');
            img.src='images/unchecked.png';
        }

        else {
            box.classList.remove('notSelezionata');
        }
    }

    risultato.classList.add('nascosta');
    lista_appoggio = [];
}

const boxes = document.querySelectorAll('.choice-grid div');

for(const c of boxes) {
    c.addEventListener('click', clickImg);
}


