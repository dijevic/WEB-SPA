

export const contacto = (nombre)=>{
    const html = `
    <h1 class="h1">any trouble ? contact us !</h1>
    <li class="collection-item avatar">
      <img src="../src/assets/come on yes GIF by Liverpool FC.gif" alt="avatar" class="circle">
      <span class="title">${nombre}</span>
      <p>agente de ventas <br>
        numero : 911685213647
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    `
    const div = document.createElement('div');
    div.innerHTML = html;
    div.classList.add('div2')
    div.classList.add('collection')
    return div
}