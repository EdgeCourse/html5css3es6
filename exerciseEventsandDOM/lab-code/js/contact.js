/* 
Goal:
Attach validation checks to input fields.
Highlight errors by adding an "error" class to problematic inputs.
Allow users to move to the next field using Enter or the Right Arrow key.

Overview:
This code implements basic form validation using JavaScript. It checks for empty fields, a correctly formatted phone number, a valid email address, and a properly formatted zip code.

Steps:
1. "use strict";

This directive enables strict mode, which enforces stricter rules for writing JavaScript code, promoting cleaner and more maintainable practices.

2. let inputs = document.querySelectorAll("input");

This line selects all the <input> elements within the HTML document and stores them in the inputs variable.

3. let count = inputs.length;

The count variable stores the total number of input elements found on the page.

4. for(let i = 0; i < count; i++){ ... }

This loop iterates through each input element.

5. inputs[i].addEventListener("blur", check, false);

An event listener is attached to each input element. The check function will be executed whenever an input loses focus (the "blur" event).

6. inputs[i].addEventListener("keydown", keys, false);

Another event listener is added to each input, triggering the keys function when a key is pressed down.

7. function check(){ ... }

This function performs the actual validation checks.

It first retrieves the current class name of the input element (this.className).

Empty Field Check:
If the input's value is empty and it doesn't already have the "error" class, the "error" class is added to its class list.

Phone Number Check:
If the input is the one with the ID "phone" and its value doesn't match the pattern of 10 digits, the "error" class is added.

Email Check:
If the input's ID is "email" and its value doesn't conform to a standard email pattern, the "error" class is added.

Zip Code Check:
If the input's ID is "zip" and its value doesn't match either the 5-digit or 5+4 digit zip code formats or the city-state-zip format, the "error" class is added.
If none of the error conditions are met, the input's class name is reset to "form-control", effectively removing any previous "error" class.

8. function keys(){ ... }
This function handles key presses within the input fields.

It checks if the pressed key is either Enter (keyCode 13) or the Right Arrow key (keyCode 39).

If so, it triggers the blur event on the input, causing it to lose focus and, consequently, triggering the validation checks in the check function.

*/