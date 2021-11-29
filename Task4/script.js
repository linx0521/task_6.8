
document.querySelector('#userTextField').addEventListener('click', 
  (event) => {
    const newText = prompt('Введите новый текст ссылки');
    const userTextField = document.querySelector('#userTextField');
    userTextField.textContent = newText;
})

document.querySelector('#userTextField').addEventListener('click', 
  (event) => {
    this.preventDefault();
    alert('Вы кликнули по ссылке и ничего не произошло');
  })