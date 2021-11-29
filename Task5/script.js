document.querySelector('#inputText').addEventListener('submit', mySubmit);

function mySubmit () {
  let userText = document.querySelector('#inputText').value;
  document.querySelector('#duplicateField').textContent = userText;
}




let userText = document.querySelector('#inputText').value;
let consoleText = userText;
let buttonClear = document.querySelector('#clickButton');
buttonClear.addEventListener('click', () => {
    userText = ''
});
console.log(consoleText); 
document.querySelector('#duplicateField').textContent = userText;

