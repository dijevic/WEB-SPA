
import './style.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

import {router} from './router/index.route';



window.addEventListener('hashchange',async(e)=>{
   let actualHash = window.location.hash;
   setTimeout(async()=>{
      await router(actualHash)
   },500)
 
})

