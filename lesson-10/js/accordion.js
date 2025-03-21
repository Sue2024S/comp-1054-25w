// STEP 6: Nab all the SUMMARY elements
const details = document.querySelectorrAll("details");

// STEP 7: Loop through the element array to add an event listener, and reference a function called closeOpenDetails
details.forEach((detail) => {
	detail.addEventListener("toggle", (event) => {
		if (event.target.open) {
			details.forEach((detail) => {
				if (detail !== event.target) {
					//This is not the details element that was clicked open
					detail.removeAttribute("open");
				};
			});		
		};
	});
});
// STEP 8a: Create the closeOpenDetails() function

	// STEP 8b: Loop through the summaries array again

		// STEp 8c: Check to make sure the DETAILS element is not the parent of the SUMMARY that was clicked 


// STEP 9: Check in the browser to make sure there are no errors - use the console, then proceed to the CSS for the final step