chrome.runtime.onInstalled.addListener(() =>
  chrome.contentSettings.javascript.get({ primaryUrl: "https://www.wikipedia.org" }, details =>
    details.setting == "allow" && chrome.contentSettings.javascript.set({
      primaryPattern: "https://*.wikipedia.org/*",
      setting: "block"
    })
  )
);