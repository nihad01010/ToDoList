const btn = document.getElementById('addTask');
btn.addEventListener('click',() =>{
    const li = document.createElement('li');
    const div = document.querySelector('.main');
    const input = document.getElementById('input');

    li.textContent = input.value;

    li.addEventListener('click', () =>{
    const remove = document.createElement('button');
    const secilen = document.createElement('input')
    secilen.type = 'checkbox'
    secilen.id = "secInput"
    remove.innerText = "Remove"
    remove.id = "removeBtn";
    div.append(remove);
    div.append(secilen);
    remove.addEventListener('click',() =>{
      li.remove();
      remove.remove();  
      secilen.remove();
    })
    secilen.addEventListener('click', () =>{
        li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through'
    })
})
    if (input.value === "") {
         return; 
   }
    input.value = "";
    div.append(li);  
})
