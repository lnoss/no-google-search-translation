import type { PlasmoCSConfig } from "plasmo";
import { sendToBackground } from "@plasmohq/messaging";

export const config: PlasmoCSConfig = {
  matches: ["*://*.translate.goog/*"],
};

// TODO: We might want to block the request then redirect. Not sure if needed anyway.
const requestRedirect = async () => {
  const request = await sendToBackground({
    name: "bypass-proxy-worker",
    body: {
      baseURI: window.document.baseURI
    }
  });

  if (request.body !== "ok")
    console.log(`%cNo Google Search Translation Extension: couldn't bypass Google Translate proxy. Please copy this message if you don't mind to share the website you just visited and open an issue on https://github.com/lnoss/no-google-search-translation/issues \n\n${window.location.href}\n\n${window.document.baseURI}`, 'background: #222; color: #ff7f00');
};

requestRedirect();
