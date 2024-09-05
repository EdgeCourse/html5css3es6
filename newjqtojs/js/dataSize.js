document.addEventListener('DOMContentLoaded', function () {
	// Select buttons and paragraphs
	const buttons = document.querySelectorAll('input[type=button]');
	const paragraphs = document.querySelectorAll('p');
  
	console.log('# of buttons = ' + buttons.length);
	console.log('# of paragraphs = ' + paragraphs.length);
  
	// Attach click event handler to buttons
	buttons.forEach(button => {
	  button.addEventListener('click', function () {
		console.log(this); // Log the clicked button for testing
  
		const styleSize = this.dataset.size; // Get font size from data attribute
		paragraphs.forEach(paragraph => {
		  paragraph.style.fontSize = styleSize; 
		});
  
		// Conditional styling for buttons only
		if (this.type === 'button') {
		  this.style.backgroundColor = "#888"; 
		  const siblings = Array.from(this.parentNode.children).filter(child => child !== this);
		  siblings.forEach(sibling => {
			if (sibling.type === 'button') { // Also check siblings for button type
			  sibling.style.backgroundColor = "#ddd";
			}
		  });
		}
	  });
	});
  });