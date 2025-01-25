document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const app = document.getElementById("app");
    const title = document.getElementById("title");
    const searchContainer = document.getElementById("search-container");
    const searchInput = document.getElementById("search-input");
    const sendButton = document.getElementById("send-button");
    const todoList = document.getElementById("todo-list");
    const toggleDark = document.getElementById("toggleDark");
    body.style.margin = "0";
    body.style.padding = "0";
    body.style.fontFamily = "Arial, Helvetica, sans-serif";
    body.style.transition = "background-color 0.5s, color 0.5s";
    body.style.backgroundColor = "#181818";
    body.style.color = "white";
    app.style.padding = "20px";
    app.style.minHeight = "100vh";
    app.style.boxSizing = "border-box";
    title.style.textAlign = "center";
    title.style.fontSize = "3em";
    searchContainer.style.display = "flex";
    searchContainer.style.justifyContent = "center";
    searchContainer.style.marginBottom = "20px";
    searchContainer.style.position = "relative";
    searchInput.style.padding = "10px";
    searchInput.style.width = "300px";
    searchInput.style.border = "1px solid #333";
    searchInput.style.borderRadius = "5px";
    searchInput.style.backgroundColor = "#252525";
    searchInput.style.color = "white";
    sendButton.style.marginLeft = "10px";
    sendButton.style.padding = "10px 20px";
    sendButton.style.backgroundColor = "#6c5ce7";
    sendButton.style.color = "white";
    sendButton.style.border = "none";
    sendButton.style.borderRadius = "5px";
    sendButton.style.cursor = "pointer";
    todoList.style.maxWidth = "400px";
    todoList.style.margin = "0 auto";
    toggleDark.style.cursor = "pointer";
    toggleDark.style.right = "50px";
    toggleDark.addEventListener("click", () => {
        if (body.style.backgroundColor === "white") {
            body.style.backgroundColor = "#181818";
            body.style.color = "white";
            searchInput.style.backgroundColor = "#252525";
            searchInput.style.color = "white";
            toggleDark.className = "bi bi-brightness-high-fill";
        } else {
            body.style.backgroundColor = "white";
            body.style.color = "black";
            searchInput.style.backgroundColor = "#f5f5f5";
            searchInput.style.color = "black";
            toggleDark.className = "bi bi-moon";
            toggleDark.right = "20px";
        }
    });
    sendButton.addEventListener("click", () => {
        const text = searchInput.value.trim();
        if (text) {
            const todoItem = document.createElement("div");
            todoItem.style.display = "flex";
            todoItem.style.alignItems = "center";
            todoItem.style.padding = "10px";
            todoItem.style.marginBottom = "10px";
            todoItem.style.backgroundColor = "#252525";
            todoItem.style.borderRadius = "5px";
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            const todoText = document.createElement("span");
            todoText.textContent = text;
            todoText.style.flexGrow = "1";
            todoText.style.marginLeft = "10px";
            const editIcon = document.createElement("i");
            editIcon.className = "bi bi-pencil";
            editIcon.style.cursor = "pointer";
            editIcon.style.marginLeft = "10px";
            editIcon.addEventListener("click", () => {
                const newText = prompt("qayta ism qy", todoText.textContent);
                if (newText !== null && newText.trim() !== "") {
                    todoText.textContent = newText.trim();
                }
            });
            const deleteIcon = document.createElement("i");
            deleteIcon.className = "bi bi-trash";
            deleteIcon.style.cursor = "pointer";
            deleteIcon.style.marginLeft = "10px";
            deleteIcon.addEventListener("click", () => {
                todoItem.remove();
            });
            todoItem.appendChild(checkbox);
            todoItem.appendChild(todoText);
            todoItem.appendChild(editIcon);
            todoItem.appendChild(deleteIcon);
            todoList.appendChild(todoItem);
            searchInput.value = "";
        }
    });
});
