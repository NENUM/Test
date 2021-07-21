// const chuckUrl = 'https://api.chucknorris.io/jokes/random';

// fetch(chuckUrl).then((resp) =>{
//     console.log(resp)
//     resp.json().then(({id, value})=>{
//         console.log(id)
//         console.log(value)
//     })
// })

// fetch(chuckUrl)
//     .then(resp=>resp.json())//Retorna un promesa con el valor deseado
//     .then(({id,value})=>{//Destructuracion de la respuesta de la promesa
//         console.log(id,value);
//     })

// import {obtenerChiste} from './js/http-provider'

// obtenerChiste().then(console.log)

// import {init} from './js/chistes-page';

// init();

//import {init} from './js/usuarios-page'

//import {obtenerUsuarios} from './js/http-provider';

//obtenerUsuarios().then(console.log)

//init();
import {init} from './js/archivos-page'
import * as CRUD from './js/crud-provider';

init();

CRUD.getUser(2).then(console.log);
CRUD.postUser({
    name: 'Diego',
    job :'Estudiante',
}).then(console.log);

CRUD.putUser(2, {
    name: 'Dio Brando',
    job: 'Cazar JoJos'
}).then(console.log)

CRUD.deleteUser(2).then(console.log);


