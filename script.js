document.getElementById('add-todo').addEventListener('click', function () {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');

        // Create list item
        const listItem = document.createElement('li');

        // Create text node
        const todoContent = document.createTextNode(todoText);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // Add event listener to delete button
        deleteButton.addEventListener('click', function () {
            todoList.removeChild(listItem);
        });

        // Add event listener to mark as completed
        listItem.addEventListener('click', function () {
            listItem.classList.toggle('completed');
        });

        // Append text and delete button to list item
        listItem.appendChild(todoContent);
        listItem.appendChild(deleteButton);

        // Append list item to the list
        todoList.appendChild(listItem);

        // Clear input field
        todoInput.value = '';
    }
});
