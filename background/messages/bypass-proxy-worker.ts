import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler<{ baseURI: string }, { success: boolean, error?: string }> = async (req, res) => {
    const browser: any = (globalThis as any).browser || (globalThis as any).chrome;
    const url: string = req.body.baseURI?.trim();

    if (!url) {
        res.send({ success: false, error: "No URL provided" });
        return;
    }

    /* browser object is standard, but Google (and Chromium world) doesn't like it.
    Moreoever, I think I can't play with the tab's navigation history, even if it 
    seems standardised. Chromium world doesn't support loadReplace and successorTabId.
    https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update#loadreplace
    */
    try {
        if (process.env.PLASMO_BROWSER === "firefox") {
            await browser.tabs.update({ url, loadReplace: true }); // We are replacing the Google Translate proxy URL by the original URL in tab's navigation history.
        } else {
            await browser.tabs.update({ url });
        }
        res.send({ success: true });
    } catch (e) {
        console.error("Failed to update tab URL:", e);
        res.send({ success: false, error: e.message || "Unknown error" });
    }
}

export default handler;