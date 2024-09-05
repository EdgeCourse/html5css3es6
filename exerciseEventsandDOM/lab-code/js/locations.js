/*
Overview:

The slideIndex is set to 0.

showSlides is called immediately to display the first slide.
Slide Transition:

Every 2 seconds, setInterval calls showSlides.

showSlides hides all slides, increments slideIndex, resets it if necessary, removes the "active" class from all dots, shows the current slide, and marks the corresponding dot as active.

Steps:
1. "use strict";

This directive enables strict mode in JavaScript, which helps prevent common coding errors and promotes better practices.

2. var slideIndex = 0;

This line declares a variable named slideIndex and initializes it to 0. It will be used to keep track of the currently displayed slide.

3. showSlides();

This line calls the showSlides function immediately, triggering the slideshow to start when the page loads.

4. function showSlides() { ... }

This is the core function that controls the slideshow behavior:

var i; Declares a loop counter variable.

var slides = ...; var dots = ...; Gets references to all elements with the classes "mySlides" (the images) and "dot" (the navigation dots).

for (i = 0; ...) The first loop hides all slides by setting their display style to "none".

slideIndex++; Increments the slideIndex to move to the next slide.

if (slideIndex > slides.length) If slideIndex exceeds the number of slides, it resets to 1 to start from the beginning.

for (i = 0; ...) The second loop removes the "active" class from all dots.

slides[slideIndex-1].style.display = "block"; Makes the current slide visible.
dots[slideIndex-1].className += " active"; Adds the "active" class to the corresponding dot.

//setTimeout(showSlides, 2000); This commented-out line would have used setTimeout to call showSlides again after 2 seconds, creating a timed slideshow.

setInterval(showSlides, 2000); This line uses setInterval to repeatedly call showSlides every 2 seconds, achieving the same slideshow effect.
Instructions for Use:

The HTML needs:

Multiple elements with the class "mySlides" to hold your images.

A set of elements with the class "dot" to act as navigation dots.
CSS Styling:

Use CSS to style your slides and dots appropriately.

Initially, all slides except the first one should be hidden (e.g., display: none;).

The "active" class on a dot should visually indicate the current slide.

Include the JavaScript code in your HTML, either within <script> tags or in an external .js file.
*/