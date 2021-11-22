let listDOM=document.querySelector("#list")
let taskDOM=document.querySelector("#task")

let btnDOM=document.querySelector
let ullength=document.getElementsByTagName("li")

btnDOM.addEventListener('click', elemanEkle)


for(let i=0; i < ullength.length;i++){ 
  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7"; 
  closeButton.classList.add("close"); 
  closeButton.onclick = removeButton; 
  
  ullength[i].append(closeButton); 
  ullength[i].onclick = check; 
}


function elemanEkle() {
 
  if (taskDOM.value == "")  { 
    $(".error").toast("show");
  }
 


  else {
  $(".success").toast("show");
  
  let liDOM = document.createElement('li') 
  listDOM.appendChild(lidom); 
  liDOM.innerHTML = task.value; 
  taskDOM.value = "";

  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  closeButton.classList.add("close");
  closeButton.onclick = removeButton;
  
  liDOM.append(closeButton);
  listDOM.append(liDOM);
  inputElement.value = ("");

  }
}


