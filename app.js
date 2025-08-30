const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li'); // Creates an Element Node
        li.className = 'task-item';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText; // Creates and attaches a Text Node
        li.appendChild(taskSpan);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.className = 'complete-btn';
        li.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        li.appendChild(deleteBtn);

        taskList.appendChild(li); // Appends the new Element Node to the parent ul
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (event) => {
    const clickedElement = event.target;

    // Check if the clicked element is a complete button
    if (clickedElement.classList.contains('complete-btn')) {
        const taskItem = clickedElement.closest('.task-item'); 
        taskItem.classList.toggle('completed'); // Manipulates a CSS class on the Element Node
    }

    // Check if the clicked element is a delete button
    if (clickedElement.classList.contains('delete-btn')) {
        const taskItem = clickedElement.closest('.task-item');
        taskList.removeChild(taskItem); // Removes the Element Node from the DOM
    }
});