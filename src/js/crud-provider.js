

const urlCRUD = 'https://reqres.in/api/users'


const getUser = async(id)=>{

    const resp = await fetch(`${urlCRUD}/${id}`);
    const {data} = await  resp.json();

    return data;
}

const postUser = async(usuario) =>{

    const resp	= await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type' : 'application/json'
        }
    });

    return (await resp.json())
}

const putUser = async(id, usuario) =>{

    const resp	= await fetch(`${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type' : 'application/json'
        }
    });

    return (await resp.json())
}

const deleteUser = async(id)=>{

    const resp = await fetch(`${urlCRUD}/${id}`,{
        method: 'DELETE'
    })

    return (resp.ok) ? 'Usuario Eliminado' : 'No se pudo eliminar el usuario'
}

export{
    getUser,
    postUser,
    putUser,
    deleteUser
}