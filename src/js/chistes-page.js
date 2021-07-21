import {obtenerChiste} from './http-provider';

const body = document.body;
let btnOtro, olList;//No se declara las variables inicialmente, ya que al momento de renderizarse no existen, se definde con Let



const crearChistesHtml = () =>{
    const html = `
    <h1 class="mt-5">
        Chistes(Peticion Http)
    </h1>

    <button class="btn btn-primary">Otro chiste</button>

    <ol class="mt-2 list-group">
    </ol>`;

    const divChistes = document.createElement('div');
    divChistes.innerHTML=html;

    body.append(divChistes);
}

const eventos = () =>{
    olList = document.querySelector('ol');//Se declara las variables des de renderizarse el html
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async ()=>{
        btnOtro.disabled = true;
       dibujarChiste( await obtenerChiste());
       btnOtro.disabled = false;
    })
}

const dibujarChiste = (chiste) =>{
    const olItem = document.createElement('li');
    olItem.innerHTML= `<b> ${chiste.id} </b>: ${chiste.value}`;
    olItem.classList.add('list-group-item');
    olList.append(olItem);

}

export const init = () =>{
    crearChistesHtml();
    eventos();//Se llama la funcion despues de que se renderice el html
}