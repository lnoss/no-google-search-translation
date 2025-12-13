import { Storage } from "@plasmohq/storage"

const browser = (globalThis as any).browser || (globalThis as any).chrome;

export {}

browser.runtime.onInstalled.addListener(async (details) => {
  const currentVersion: string = browser.runtime.getManifest().version;
  
  const storage: Storage = new Storage({ area: "sync" });
  const fetchYouTubeOriginalTitles: boolean = await storage.get("fetchYouTubeOriginalTitles");
  
  if (fetchYouTubeOriginalTitles === null || fetchYouTubeOriginalTitles === undefined) {
    console.log('Initializing fetchYouTubeOriginalTitles to true');
    await storage.set("fetchYouTubeOriginalTitles", true);
  }
  
  if (currentVersion === '0.0.8') {
    // For version 0.0.8 we ask permission on both install and update
    if (details.reason === "install" || details.reason === "update") {
      // MV2 doesn't support optional_host_permissions
      // It's for later/one day, since we have this domain name in host_permissions (too bored to handle 2 package.json)
      if (browser.runtime.getManifest().manifestVersion === 3) {
        browser.permissions.request({
          origins: ["*://www.youtube.com/oembed/*"]
        }).then((granted) => {
          console.log('YouTube oembed permission granted:', granted);
        }).catch((error) => {
          console.error('Failed to request YouTube oembed permission:', error);
        });
      }
      
      browser.tabs.create({
        url: browser.runtime.getURL("tabs/update-notice.html")
      });
    }
  } else {
    // For versions > 0.0.8, we ask permission only on install
    if (details.reason === "install") {
      if (browser.runtime.getManifest().manifestVersion === 3) {
        browser.permissions.request({
          origins: ["*://www.youtube.com/oembed/*"]
        }).then((granted) => {
          console.log('YouTube oEmbed permission granted:', granted);
        }).catch((error) => {
          console.error('Failed to request YouTube oEmbed permission:', error);
        });
      }
      
      browser.tabs.create({
        url: browser.runtime.getURL("tabs/update-notice.html")
      });
    }
  }
})