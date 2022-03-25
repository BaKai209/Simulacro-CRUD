import axios from 'axios';
import React, {useState} from 'react';
import {url} from '../helpers/url';
import {fileUpload} from '../helpers/fileUpload';
import '../styles/form.css';

export const Form = () => {

    const [kai, setKai] = useState({
        nombre: '',
        tipo: '',
        numero: '',
        telefono: '',
        celular: '',
        direccion: '',
        imagen: ''
    })

    const {nombre,tipo,numero,telefono,celular,direccion,imagen} = kai;

    const postData = () => {
         axios.post(url,kai)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
         
    }

    const handleChanged = ({target}) => {
        setKai({
          ...kai,
          [target.name]: target.value
        })
    
      }

      const handleSubmit = (e) => {
       e.preventDefault();
      }

      const handleFileChange = (e) => {
        const file = e.target.files[0];
         fileUpload(file)
        .then(response => {
            kai.imagen = response;
        }).catch(error => {
            console.log(error.message)
        }) 
    }

    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>YUGIOH PERSONAJES:</h2>
           <hr/>
               <div>
                   <label>Nombre Personaje:</label>
                   <input id="inputNombre" name="nombre" value={nombre} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Serie a la que Pertenece</label>
                   <select id="selectTipo" name="tipo" value={tipo} onChange={handleChanged}>
                       <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                       <option name="C.C" value="C.C">DM</option>
                       <option name="T.I" value="T.I">GX</option>
                       <option name="C.E" value="C.E">5'DS</option>
                       <option name="C.E" value="C.E">Zexal</option>
                       <option name="C.E" value="C.E">Arc V</option>
                       <option name="C.E" value="C.E">VRAINS</option>
                       <option name="C.E" value="C.E">SEVENS</option>
                   </select>
               </div>
               <div>
                   <label>Insignia:</label>
                   <input id="inputNumero" type="number" name="Personaje" value={numero} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Rival</label>
                   <input id="inputTelefono" type="number" name="Rival" value={telefono} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Tipo De Deck</label>
                   <input id="inputCelular" type="number" name="Deck" value={celular} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen" value={imagen}    onChange={handleFileChange}/>
                    
               </div>
               <div>
                   <button onClick={() => postData()} id="btnRegistro">Enviar</button> 
               </div>
           </form>
        </div>
    )
}
