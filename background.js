chrome.action.onClicked.addListener((tab) => {
	let url = new URL(tab.url)

	if (url.protocol == "https:") {
		chrome.tabs.update({
			url: `https://12ft.io/${url.href}`,
		});
	}
}
);

