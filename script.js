const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {

    if (inputBox.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${inputBox.value}</span>
        <div class="actions">
            <button class="edit-btn">✏</button>
            <button class="delete-btn">🗑</button>
        </div>
    `;

    listContainer.appendChild(li);
    inputBox.value = "";
}

// Click events
listContainer.addEventListener("click", function(e) {

    // Delete
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.parentElement.remove();
    }

    // Edit
    if (e.target.classList.contains("edit-btn")) {
        let span = e.target.parentElement.parentElement.querySelector("span");
        let newTask = prompt("Edit task:", span.innerText);
        if (newTask !== null && newTask.trim() !== "") {
            span.innerText = newTask;
        }
    }

    // Mark complete
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.classList.toggle("checked");
    }
});

// Enter key support
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
