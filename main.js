chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            //plugin active only in:
            pageUrl: { hostEquals: "steamcommunity.com", urlContains:"filedetails"},
          })
        ],
        //auto-enable-disable
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});
