import { getUsers } from '../js/componentes';
import { ErrorBusqueda } from '../views/404';
import { contacto } from '../views/contacto';
import {home} from'../views/home';
import {noticias} from '../views/noticias';

let main = document.querySelector('.main');


    document.addEventListener('DOMContentLoaded',()=>{
        main.appendChild(home())
        window.location.hash = '/home'
    })



const router = async(route)=>{
    main.innerHTML = ''
    
    switch (route) {
        case '#/':
           
            return main.appendChild(home())
            
        case '#/contacto':
            let ul        = document.createElement('ul');
            ul.classList.add('collection')

            let data = await getUsers();
            for(let i =0; i <= 1;i++){
                let nombre =data[i].name ;
                ul.appendChild(contacto(nombre))

            }
        
            return main.appendChild(ul)
        case '#/noticias':
            return main.appendChild(noticias())
         default:
                let err = ErrorBusqueda()
                  return main.innerHTML =  err
            
    }
}
export {
    router
}