/* 
Overview:

This code manages a to-do list stored in the user's browser's local storage. It handles adding new items, marking items as done, removing items, and clearing the entire list.

Steps:

Strict mode:
"use strict"; enables strict mode, which enforces stricter rules on variable declarations and other JavaScript behaviors, helping to catch potential errors and improve code quality.

Variable Declarations:
todoList, todoForm, removeList: These variables store references to elements in your HTML with the corresponding classes (.todo-list, .add-todo, .remove-list). These elements are where the to-do list will be displayed, the form to add new items, and the button to clear the list.

Loading To-Do Items:
var items = ...: This line attempts to load to-do items from local storage.
localStorage.getItem('todoList'): Retrieves the stored to-do list data as a string.
JSON.parse(...): If data is found, it parses the JSON string back into a JavaScript array of objects.
|| [...]: If no data is found in local storage, it initializes items with a default array containing two sample to-do items.

Functions:
addTodo(e): Handles adding a new to-do item when the form is submitted.
Prevents default form submission behavior.
Gets the new item's title from the form input.
Creates a new to-do object with the title and done: false.
Adds the new to-do to the items array.
Saves the updated items to local storage.
Resets the form.
createList(list = [], listTarget): Generates the HTML for the to-do list based on the items array and updates the todoList element.
Takes an optional list argument (defaults to an empty array) and the target element listTarget.
Uses map to iterate over the items array, creating an <li> element for each item with a checkbox, label, and remove button.
Sets the checkbox as checked if the item's done property is true.
Joins the generated HTML strings and sets them as the innerHTML of listTarget.
toggleDone(e): Toggles the done status of a to-do item when its checkbox is clicked.
Gets the index of the clicked item from its data-index attribute.
Toggles the done property of the corresponding item in the items array.
Saves the updated items to local storage.
removeSingle(e): Removes a single to-do item when its remove button (with class "remove") is clicked.
Gets the index of the clicked item from its data-index attribute.
Uses splice to remove the item from the items array.
Saves the updated items to local storage.
saveTodos(): Saves the current items array to local storage as a JSON string and re-creates the to-do list display.
removeData(): Clears all to-do items from local storage and the display.

Event Listeners Used:
Attaches event listeners to handle:
Clicking on checkboxes or remove buttons within the todoList.
Submitting the todoForm.
Clicking the removeList button.
Initialization

Calls createList to initially display the to-do list based on the loaded or default items.

Features in Code:

Local Storage: The code uses local storage to persist the to-do list data even after the browser is closed.
Event Delegation: Event listeners are attached to parent elements (todoList, todoForm, removeList) to handle events on their child elements (checkboxes, remove buttons, form submission) efficiently.
Data Attributes: data-index attributes are used to store the index of each to-do item, making it easy to identify and manipulate them when events occur.

*/