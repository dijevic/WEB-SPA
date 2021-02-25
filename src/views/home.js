export const  home = ()=> {
    const html = 

 
  
`<h1 class="h1">You are actually in Home</h1>
 <div class="row">
<div class="col s12 m7">
  <div class="card">
    <div class="card-image">
      <img src="./assets/come on yes GIF by Liverpool FC.gif">

      <span class="card-title">Card Title</span>
    </div>
    <div class="card-content">
      <p>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div>
<div class="row">
<div class="col s12 m7">
  <div class="card">
    <div class="card-image ">
      <img class="responsive-img circle"src="./assets/come on yes GIF by Liverpool FC.gif">
      <span class="card-title">HOME</span>
    </div>
    <div class="card-content">
      <p>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div>`

  const div = document.createElement('div');
  div.innerHTML = html;
  div.classList.add('div')
  return div
}