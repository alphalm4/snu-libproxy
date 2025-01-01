chrome.action.onClicked.addListener((tab) => {
    const proxyPrefix = "https://libproxy.snu.ac.kr/link.n2s?url=";
    const currentUrl = tab.url;
  
    if (!currentUrl.startsWith(proxyPrefix)) {
      const proxiedUrl = proxyPrefix + encodeURIComponent(currentUrl);
      chrome.tabs.update(tab.id, { url: proxiedUrl });
    } else {
      alert("This URL is already proxied.");
    }
  });