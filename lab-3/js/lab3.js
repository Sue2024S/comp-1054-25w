//select all the elements of the list 
const tabs = document.querySelectorAll(`[role="tab"]`);
console.log(tabs);

//// Loop through each tab and add an event listener for the "click" event
tabs.forEach((tab) => {
	tab.addEventListener("click", (event) => {
        const targetPanelId = tab.querySelector("a").getAttribute("href");
        event.preventDefault();
        if (document.querySelector(`[id="tabpanel1"]`).style.display == "block") {
					tab.classList.remove("active");
                    document.querySelector(`[id="tabpanel1"]`).style.display = "none";
                    console.log("tab1");
 
				};
        if (document.querySelector(`[id="tabpanel2"]`).style.display == "block") {
					tab.classList.remove("active");
                    document.querySelector(`[id="tabpanel2"]`).style.display = "none";
                    console.log("tab2");
 
				};
                
        if (document.querySelector(`[id="tabpanel3"]`).style.display == "block") {
					tab.classList.remove("active");
                    document.querySelector(`[id="tabpanel3"]`).style.display = "none";
                    console.log("tab3");
 
				};

        document.querySelector(targetPanelId).style.display = "block";
        // Add the "active" class to the clicked tab
        tab.classList.add("active");    
	});
    
    
});
