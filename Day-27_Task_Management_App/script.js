document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskListContainer = document.getElementById('task-list-container');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const taskTitle = document.getElementById('title').value;
        const taskDescription = document.getElementById('description').value;
        const taskDueDate = document.getElementById('due-date').value;

        const task = {
            title: taskTitle,
            description: taskDescription,
            dueDate: taskDueDate
        };

        tasks.push(task);
        saveTasks();
        displayTasks();
        taskForm.reset();
    });

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function displayTasks() {
        taskListContainer.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task';

            taskElement.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Due Date: ${task.dueDate}</p>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            `;

            taskListContainer.appendChild(taskElement);
        });
    }

    window.editTask = function (index) {
        const task = tasks[index];
        document.getElementById('title').value = task.title;
        document.getElementById('description').value = task.description;
        document.getElementById('due-date').value = task.dueDate;

        tasks.splice(index, 1); // Remove the task to update later
        saveTasks(); // Update localStorage after removing the task
    }

    window.deleteTask = function (index) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        }
    }

    // Load and display tasks from localStorage on page load
    displayTasks();
});
