// Used to make sure if the text of an input field has a value make sure the variable stays above the text
let form = document.querySelector('form');
let inputs = document.querySelectorAll('input');
let notSaved = false;
let success = false;

inputs.forEach(item =>
{
    let label = item.nextElementSibling.querySelector('span');
    
    if(!notSaved){
      // see if the user has saved any data 
      let inputName =  item.getAttribute("name");
      let inputValue = localStorage.getItem(inputName);
      if(inputValue){
        item.value = inputValue;
        addLabelName(label);
        success = true;
      }
 
    } else {
      notSaved = true;
    }

    
    item.addEventListener('change', event =>{
      if((event.target.value.split(' ').join('')).length >= 1){
        addLabelName(label);
      }
      else{
        removeLabelName(label);
      }
    })

  })

// only executed if the user went back a page
if(success){
  detectPage();
}


// when the form is submitted check if any inputs are empty
form.addEventListener('submit', event => {

  event.preventDefault();
  // go though each required input field
  let error = false;
  document.querySelectorAll('.required').forEach(input => {
    let value = input.value.split('').join('');  
    if(value.length == 0){
      // show error message to the span 
      input.parentElement.nextElementSibling.classList.add('error');
      error = true;
    }
  })
  
  if(!error){
    // save all the data 
    inputs.forEach(item => {
      saveData(item);
    });

    let select = document.querySelector('select');
    if(select != null){
      saveData(select); // save the data in the select drop down list
    }

    if(localStorage.getItem('page') != document.querySelector('title').innerHTML || localStorage.getItem('page') == null){
      // save the current submitted page 
      localStorage.setItem('page', document.querySelector('title').innerHTML);
    }

    // go to the next page
    form.submit();
  }
});

function addLabelName(label){
  // add the class name to stop the label from going to orginal position
  label.classList.add("above");
}

function removeLabelName(label){
  // remove the class name to put the label at its orginal postion as there is no content in input
  label.classList.remove("above");
}

function saveData(item){
  if(item.value){  // some inputs are not required 
    let itemName = item.getAttribute("name"); // key

    localStorage.setItem(itemName, item.value); // save the value
  }
}

// detect what pages the user can click
function detectPage(){
  let sectionCircles = document.querySelectorAll('.section-circle');
  let progressBar = document.querySelector('.status-progress.complete');
  let pageStored = localStorage.getItem('page');

  if(pageStored == "Personal Details"){
    // make the circle green and the icon white
    sectionCircles[1].classList.add('active'); 
    // move the progress bar up a bit
    progressBar.style.width = "27%";
    // add the link
    document.querySelector('.fa-home').parentElement.setAttribute('href', "addressdetails.html");

  }

  else if(pageStored == "Address Details"){
    // make the circle green and the icon white
    sectionCircles[1].classList.add('active'); 
    sectionCircles[2].classList.add('active'); 
    // move the progress bar up a bit
    progressBar.style.width = "45%";
    // add the link
    document.querySelector('.fa-home').parentElement.setAttribute('href', "addressdetails.html");
    document.querySelector('.fa-paw').parentElement.setAttribute('href', "petdetails.html");

  }
  else if(pageStored == "Pet Details"){
    // make the circle green and the icon white
    sectionCircles[1].classList.add('active'); 
    sectionCircles[2].classList.add('active'); 
    sectionCircles[3].classList.add('active'); 
    // move the progress bar up a bit
    progressBar.style.width = "58%";
    // add the link
    document.querySelector('.fa-home').parentElement.setAttribute('href', "addressdetails.html");
    document.querySelector('.fa-paw').parentElement.setAttribute('href', "petdetails.html");
    document.querySelector('.fa-wpforms').parentElement.setAttribute('href', "/Rebate/index.html");
  }

  else if(pageStored == "Review Details"){
    // make the circle green and the icon white
    sectionCircles[1].classList.add('active'); 
    sectionCircles[2].classList.add('active'); 
    sectionCircles[3].classList.add('active'); 
    sectionCircles[4].classList.add('active'); 
    // move the progress bar up a bit
    progressBar.style.width = "58%";
    // add the link
    document.querySelector('.fa-home').parentElement.setAttribute('href', "addressdetails.html");
    document.querySelector('.fa-paw').parentElement.setAttribute('href', "petdetails.html");
    document.querySelector('.fa-wpforms').parentElement.setAttribute('href', "/Rebate/index.html");
    document.querySelector('.fa-check').parentElement.setAttribute('href', "/Submit/review.html");
  }


}