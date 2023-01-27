chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = new URL(tabs[0].url)

    if (url.protocol == "https:") {
      chrome.tabs.update({
        url: `http://woogity/${url.href}`,
      })
    }
  })
})
