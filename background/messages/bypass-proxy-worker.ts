import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    var browser = browser || chrome;
    const url = req.body.baseURI;

    // I don't know exactly JavaScript's truthy and falsy values, so be explicit is the way.
    if (url === undefined || url === null || url === "") {
        res.send({ body: "nourl" });
        return; // If it will eventually happen, it will be a bug. Or at least we hope...
    }

    /* browser object is standard, but Google (and Chromium world) doesn't like it.
    Moreoever, I think I can't play with the tab's navigation history, even if it 
    seems standardised. Chromium world doesn't support loadReplace and successorTabId.
    https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update#loadreplace
    */
    try {
        if (process.env.PLASMO_BROWSER === "firefox")
            browser.tabs.update({ url: url, loadReplace: true }); // We are replacing the Google Translate proxy URL by the original URL in tab's navigation history.
        else
            browser.tabs.update({ url: url });
    } catch (e: any) {
        res.send({ body: e });
        return;
    }

    res.send({ body: "ok" });
}

export default handler;