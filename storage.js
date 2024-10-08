const addToLocalStorage= ()=>{
    const idInput = document.getElementById("storage-id")
    const inputId = idInput.value;
    const storageInput = document.getElementById("storage-value")
    const inputValue = storageInput.value;
    localStorage.setItem(inputId, inputValue)

}