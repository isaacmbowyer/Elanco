document.querySelectorAll('input').forEach(item =>
{
    let label = item.nextElementSibling.querySelector('span');
    item.addEventListener('change', event =>{
      if(event.target.value.length >= 1){
        label.classList.add("above");
      }
      else{
       label.classList.remove("above");
      }
    })

  })

 