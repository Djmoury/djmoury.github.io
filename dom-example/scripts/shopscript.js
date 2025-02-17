const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    const inputValue = input.value;
    input.value = '';

    if (inputValue.trim() === '') return; 

    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    span.textContent = inputValue;
    deleteButton.textContent = 'Delete';

    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    deleteButton.addEventListener('click', function() {
        list.removeChild(listItem);
    });

    input.focus();
});
