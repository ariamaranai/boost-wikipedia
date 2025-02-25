chrome.runtime.onInstalled.addListener(async () =>
  (await (chrome.contentSettings.javascript.get({ primaryUrl: "https://www.wikipedia.org" }))).setting == "allow" &&
    chrome.contentSettings.javascript.set({
      primaryPattern: "https://*.wikipedia.org/*",
      setting: "block"
    })
);