const addToLocalStorage = () => {
  const idInput = document.getElementById("storage-id");
  const inputId = idInput.value;
  const storageInput = document.getElementById("storage-value");
  const inputValue = storageInput.value;


  if(inputId && inputValue){
    localStorage.setItem(inputId, inputValue);
  }
  

  idInput.value = "";
  storageInput.value = "";


//   if we want to set value as object or array we have to use JSON.stringify and to  get a value parse.stringify
};
