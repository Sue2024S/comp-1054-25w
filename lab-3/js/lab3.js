const tabs = document.querySelectorrAll(`[role="tab"]`);

tabs.forEach((tab) => {
	tab.addEventListener("click", (event) => {
		event.preventDefault();

		panels.forEach((panel) => panel.style.display = "none");

		tabs.forEach((tab) => tab.classList.remove("active"));

		const targetPanelId = tab.querySelector("a").getAttribute("href");
		document.querySelector(targetPanelId).style.display = "block";

		tab.classList.add("active");
	});
});

tabs[0].classList.add("active");
document.querySelector(`[role="tabpanel"]`).style.display = "block";