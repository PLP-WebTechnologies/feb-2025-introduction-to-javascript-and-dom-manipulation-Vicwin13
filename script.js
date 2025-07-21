
let styling = document.getElementById('change');
const activate = document.getElementById('activate');




activate.addEventListener("click", ()=>{
  styling.textContent = 'This is the new content now'
  styling.style.color = 'red'
  styling.style.fontSize = '20px'
})