function addTask(containerId, dayOfWeek) {
    const tasksContainer = document.getElementById(containerId);
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-item'); 
    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.placeholder = 'Enter a new task';
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save Task';
    saveButton.classList.add('save-button');
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.classList.add('task-checkbox');
    saveButton.addEventListener('click', function () {
        const taskName = taskInput.value;
        const taskNameElement = document.createElement('span');
        taskNameElement.textContent = taskName;

        taskInput.style.display = 'none';
        saveButton.style.display = 'none';

        
        saveTask(containerId, dayOfWeek, taskName);

    });

    taskContainer.appendChild(taskInput);
    taskContainer.appendChild(saveButton);

    tasksContainer.appendChild(taskContainer);
}

function saveTask(containerId, dayOfWeek, taskName) {
    const tasksContainer = document.getElementById(containerId);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'insert_task.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert('Task saved successfully!');
                
                tasksContainer.querySelector('input[type="text"]').style.display = 'none';

                const taskElement = document.createElement('div');
                taskElement.classList.add('task-element');

                const taskLabel = document.createElement('label');
                taskLabel.textContent = taskName;

                taskElement.appendChild(taskLabel);

                tasksContainer.appendChild(taskElement);
            } else {
                alert('Error saving task. Please try again.');
            }
        }
    };
    xhr.send(`task=${taskName}&dayOfWeek=${dayOfWeek}`);
}
