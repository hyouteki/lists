var globalData = {};

function renderSequence() {	
	const body = document.querySelector("body");

	globalData.lists["url_lists"].forEach(([url, title, site]) => {
		const div = document.createElement("div");
		div.className = "s";

		const anchor = document.createElement("a");
		anchor.href = url;
		anchor.className = "link";
		anchor.target = "_blank";
		anchor.innerHTML = `${title} - <mark>${site}</mark>`;

		div.appendChild(anchor);
		body.appendChild(div);
	});
}

fetch("./lists.json")
	.then(response => response.json())
	.then(data => {
		globalData.lists = data;
		renderSequence();
	})
