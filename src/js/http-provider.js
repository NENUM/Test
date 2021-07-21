const chuckUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuario = 'https://reqres.in/api/users?page=2';


const cloudPreset = 'ml_default';
const cloudURL = 'https://api.cloudinary.com/v1_1/nenum/upload';

const obtenerChiste= async ()=>{

    try {
        const resp = await fetch(chuckUrl);

        if(!resp.ok) throw('No se pudo realizar la peticion');

        const {icon_url, id, value} = await resp.json();

        return {icon_url, id, value};
        
    } catch (err) {
        throw err;
    }
    
}

const obtenerUsuarios = async()=>{
    const resp = await fetch(urlUsuario);
    const {data:usuarios} = await resp.json();//se renombra la variable
    return usuarios;
}

const subirImagen = async(archivo) =>{

    const formData = new FormData();

    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivo);

    try {
        
        const resp = await fetch(cloudURL,{
            method: 'POST',
            body: formData
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }
}

export{
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}