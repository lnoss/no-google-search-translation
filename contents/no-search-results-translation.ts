// Don't be evil.

import type { PlasmoCSConfig } from "plasmo"
import { sendToBackground } from "@plasmohq/messaging";
import type { VideoResolutionResponse } from "../types/video-resolver";

export const config: PlasmoCSConfig = {
    matches: ["*://www.google.com/search*",
        "*://www.google.ad/search*",
        "*://www.google.ae/search*",
        "*://www.google.com.af/search*",
        "*://www.google.com.ag/search*",
        "*://www.google.al/search*",
        "*://www.google.am/search*",
        "*://www.google.co.ao/search*",
        "*://www.google.com.ar/search*",
        "*://www.google.as/search*",
        "*://www.google.at/search*",
        "*://www.google.com.au/search*",
        "*://www.google.az/search*",
        "*://www.google.ba/search*",
        "*://www.google.com.bd/search*",
        "*://www.google.be/search*",
        "*://www.google.bf/search*",
        "*://www.google.bg/search*",
        "*://www.google.com.bh/search*",
        "*://www.google.bi/search*",
        "*://www.google.bj/search*",
        "*://www.google.com.bn/search*",
        "*://www.google.com.bo/search*",
        "*://www.google.com.br/search*",
        "*://www.google.bs/search*",
        "*://www.google.bt/search*",
        "*://www.google.co.bw/search*",
        "*://www.google.by/search*",
        "*://www.google.com.bz/search*",
        "*://www.google.ca/search*",
        "*://www.google.cd/search*",
        "*://www.google.cf/search*",
        "*://www.google.cg/search*",
        "*://www.google.ch/search*",
        "*://www.google.ci/search*",
        "*://www.google.co.ck/search*",
        "*://www.google.cl/search*",
        "*://www.google.cm/search*",
        "*://www.google.cn/search*",
        "*://www.google.com.co/search*",
        "*://www.google.co.cr/search*",
        "*://www.google.com.cu/search*",
        "*://www.google.cv/search*",
        "*://www.google.com.cy/search*",
        "*://www.google.cz/search*",
        "*://www.google.de/search*",
        "*://www.google.dj/search*",
        "*://www.google.dk/search*",
        "*://www.google.dm/search*",
        "*://www.google.com.do/search*",
        "*://www.google.dz/search*",
        "*://www.google.com.ec/search*",
        "*://www.google.ee/search*",
        "*://www.google.com.eg/search*",
        "*://www.google.es/search*",
        "*://www.google.com.et/search*",
        "*://www.google.fi/search*",
        "*://www.google.com.fj/search*",
        "*://www.google.fm/search*",
        "*://www.google.fr/search*",
        "*://www.google.ga/search*",
        "*://www.google.ge/search*",
        "*://www.google.gg/search*",
        "*://www.google.com.gh/search*",
        "*://www.google.com.gi/search*",
        "*://www.google.gl/search*",
        "*://www.google.gm/search*",
        "*://www.google.gr/search*",
        "*://www.google.com.gt/search*",
        "*://www.google.gy/search*",
        "*://www.google.com.hk/search*",
        "*://www.google.hn/search*",
        "*://www.google.hr/search*",
        "*://www.google.ht/search*",
        "*://www.google.hu/search*",
        "*://www.google.co.id/search*",
        "*://www.google.ie/search*",
        "*://www.google.co.il/search*",
        "*://www.google.im/search*",
        "*://www.google.co.in/search*",
        "*://www.google.iq/search*",
        "*://www.google.is/search*",
        "*://www.google.it/search*",
        "*://www.google.je/search*",
        "*://www.google.com.jm/search*",
        "*://www.google.jo/search*",
        "*://www.google.co.jp/search*",
        "*://www.google.co.ke/search*",
        "*://www.google.com.kh/search*",
        "*://www.google.ki/search*",
        "*://www.google.kg/search*",
        "*://www.google.co.kr/search*",
        "*://www.google.com.kw/search*",
        "*://www.google.kz/search*",
        "*://www.google.la/search*",
        "*://www.google.com.lb/search*",
        "*://www.google.li/search*",
        "*://www.google.lk/search*",
        "*://www.google.co.ls/search*",
        "*://www.google.lt/search*",
        "*://www.google.lu/search*",
        "*://www.google.lv/search*",
        "*://www.google.com.ly/search*",
        "*://www.google.co.ma/search*",
        "*://www.google.md/search*",
        "*://www.google.me/search*",
        "*://www.google.mg/search*",
        "*://www.google.mk/search*",
        "*://www.google.ml/search*",
        "*://www.google.com.mm/search*",
        "*://www.google.mn/search*",
        "*://www.google.com.mt/search*",
        "*://www.google.mu/search*",
        "*://www.google.mv/search*",
        "*://www.google.mw/search*",
        "*://www.google.com.mx/search*",
        "*://www.google.com.my/search*",
        "*://www.google.co.mz/search*",
        "*://www.google.com.na/search*",
        "*://www.google.com.ng/search*",
        "*://www.google.com.ni/search*",
        "*://www.google.ne/search*",
        "*://www.google.nl/search*",
        "*://www.google.no/search*",
        "*://www.google.com.np/search*",
        "*://www.google.nr/search*",
        "*://www.google.nu/search*",
        "*://www.google.co.nz/search*",
        "*://www.google.com.om/search*",
        "*://www.google.com.pa/search*",
        "*://www.google.com.pe/search*",
        "*://www.google.com.pg/search*",
        "*://www.google.com.ph/search*",
        "*://www.google.com.pk/search*",
        "*://www.google.pl/search*",
        "*://www.google.pn/search*",
        "*://www.google.com.pr/search*",
        "*://www.google.ps/search*",
        "*://www.google.pt/search*",
        "*://www.google.com.py/search*",
        "*://www.google.com.qa/search*",
        "*://www.google.ro/search*",
        "*://www.google.ru/search*",
        "*://www.google.rw/search*",
        "*://www.google.com.sa/search*",
        "*://www.google.com.sb/search*",
        "*://www.google.sc/search*",
        "*://www.google.se/search*",
        "*://www.google.com.sg/search*",
        "*://www.google.sh/search*",
        "*://www.google.si/search*",
        "*://www.google.sk/search*",
        "*://www.google.com.sl/search*",
        "*://www.google.sn/search*",
        "*://www.google.so/search*",
        "*://www.google.sm/search*",
        "*://www.google.sr/search*",
        "*://www.google.st/search*",
        "*://www.google.com.sv/search*",
        "*://www.google.td/search*",
        "*://www.google.tg/search*",
        "*://www.google.co.th/search*",
        "*://www.google.com.tj/search*",
        "*://www.google.tl/search*",
        "*://www.google.tm/search*",
        "*://www.google.tn/search*",
        "*://www.google.to/search*",
        "*://www.google.com.tr/search*",
        "*://www.google.tt/search*",
        "*://www.google.com.tw/search*",
        "*://www.google.co.tz/search*",
        "*://www.google.com.ua/search*",
        "*://www.google.co.ug/search*",
        "*://www.google.co.uk/search*",
        "*://www.google.com.uy/search*",
        "*://www.google.co.uz/search*",
        "*://www.google.com.vc/search*",
        "*://www.google.co.ve/search*",
        "*://www.google.co.vi/search*",
        "*://www.google.com.vn/search*",
        "*://www.google.vu/search*",
        "*://www.google.ws/search*",
        "*://www.google.rs/search*",
        "*://www.google.co.za/search*",
        "*://www.google.co.zm/search*",
        "*://www.google.co.zw/search*",
        "*://www.google.cat/search*"
    ],
}
/**
 * Cleans a single search result by removing Google Search translation "overlay"
 * and restoring the original content and URLs
 * @param resultDiv - The DOM element containing the search result to clean
 * @returns Promise that resolves when the result has been processed
 */
const cleanResult = (resultDiv: HTMLDivElement): Promise<void> => {
    return new Promise<void>((resolve) => {
        // Need to be enough strict to avoid including others original spans, or even others extensions spans like uBlacklist (see #1).
        const seeOriginalButton: HTMLSpanElement = resultDiv.querySelector('span[jsaction="YjLrZe"][role="button"][tabindex="0"]');

        /* 
        A div added between "normal" results lines. If there is no button, nothing to do. 
        But if there is one, it will always be a result line. 
        There is a span before with a text like "Translated by Google".
        Checking visibility because Google Search returns two versions for some results (original result and the hidden translation),
        even though it has decided to display only the original result.  
        */
        if (
            seeOriginalButton === null ||
            !(seeOriginalButton.previousElementSibling?.textContent ?? "").includes("Google") ||
            !seeOriginalButton.checkVisibility()
        ) {
            resolve();
            return;
        }

        // Fire click event to see the original result.
        seeOriginalButton.click();

        const translationDiv: HTMLDivElement = resultDiv.querySelector('div.nlNnsd.ApHyTb[jsaction="rcuQ6b:npT2md"]');

        if (translationDiv) {
            // Hiding the element is more efficient than removing it from the DOM. Removing it would also prevent any possible reclick on the button.
            translationDiv.style.display = "none";
        }

        // Google rewrite the URL to use their Google Translate proxy (AMP little brother).
        const link: HTMLAnchorElement = resultDiv.querySelector('a[jsname="UWckNb"][href^="https://translate.google.com/translate?"]');

        // Not good if we are here without a found link. There is a span before with a text like "Translated by Google".
        if (link !== null) {
            let oriUrl: URL = new URL(link.href);
            let oriUrlSearchParams: URLSearchParams = new URLSearchParams(oriUrl.search);

            if (oriUrlSearchParams.has("u")) {
                const originalUrl = oriUrlSearchParams.get("u");
                if (originalUrl !== "") {
                    link.href = originalUrl;
                } else {
                    console.log(`%cNo Google Search Translation Extension: didn't find the original URL. Please copy this message if you don't mind to share the website you just visited and open an issue on https://github.com/lnoss/no-google-search-translation/issues \n\n${window.location.href}\n\n${link.innerHTML}`, 'background: #222; color: #ff7f00');
                }
            }

            /* // I don't think we need to do this
            let newUrlSearchParams: URLSearchParams = new URLSearchParams(new URL(oriUrlSearchParams.get("u")).search);
            for (const [key, value] of oriUrlSearchParams.entries()) {
                // We want to keep the original URL search parameters, but not the Google Translate ones.
                if (key !== "hl" && key !== "sl" && key !== "tl" && key !== "client") {
                    newUrlSearchParams.set(key, value);
                }
            }
            */
        }
        resolve();
    });
}


/**
 * Validates and extracts video ID from URL parameters
 * @returns The video ID or null if invalid
 */
const extractVideoId = (yTurlSearchParams: string): string | null => {
    try {
        const urlParams = new URLSearchParams(yTurlSearchParams);
        const videoId = urlParams.get("v");

        return videoId;
    } catch (error) {
        console.warn('Failed to extract video ID from URL:', error);
        return null;
    }
};

/**
 * Processes a single video result to remove translation and resolve with original title
 * @param resultDiv - The DOM element containing the video result
 */
const cleanVideoResult = async (resultDiv: HTMLDivElement): Promise<void> => {
    try {
        if (resultDiv.hasAttribute('ngst-result-processed')) {
            return;
        }

        resultDiv.setAttribute('ngst-result-processed', 'true');

        const videoContainer = resultDiv.querySelector<HTMLDivElement>('div.WVV5ke');
        const videoUrl = videoContainer?.dataset.curl;

        if (!videoUrl) {
            return;
        }

        const videoUrlObject = new URL(videoUrl);
        let hostname: string;
        try {
            hostname = videoUrlObject.hostname;
        } catch (error) {
            console.warn('Invalid video URL format:', videoUrl, error);
            return;
        }

        if (hostname !== 'www.youtube.com') {
            return;
        }

        const videoId = extractVideoId(videoUrlObject.search);
        if (!videoId) {
            return;
        }

        try {
            const result: VideoResolutionResponse = await sendToBackground({
                name: "youtube-resolver-worker",
                body: { ytId: videoId }
            });

            if (!result.success) {
                console.warn('youtube-resolver-worker - returned unsuccessful result:', result.error);
                return;
            }

            if (result.originalTitle) {
                console.debug(`youtube-resolver-worker - successfully resolved yTvideo ${videoId}:`, result.originalTitle);

                const titleElement = resultDiv.querySelector('h3.LC20lb.MBeuO.DKV0Md');
                if (titleElement) {
                    titleElement.textContent = result.originalTitle;
                }

                const titleSpan = resultDiv.querySelector('span.cHaqb.QOGdqf');
                if (titleSpan) {
                    titleSpan.textContent = result.originalTitle;
                }
            }

        } catch (error) {
            console.error('youtube-resolver-worker - failed to send video data to background worker:', error);
        }
    } catch (error) {
        console.error('Unexpected error in cleanVideoResult:', error);
    }
};

/**
 * Sets up a MutationObserver to handle dynamically loaded content
 * Needed for infinite scroll results loading in #botstuff
 * @returns The MutationObserver instance for potential cleanup
 */
const setupMutationObserver = () => {
    const observer = new MutationObserver((mutations) => {
        const videoResultsToProcess: HTMLDivElement[] = [];

        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const element = node as Element;

                    const videoResults = element.querySelectorAll<HTMLDivElement>(
                        '#rso div.PmEWq.wHYlTd.vt6azd.Ww4FFb, #botstuff div.PmEWq.wHYlTd.vt6azd.Ww4FFb'
                    );

                    videoResults.forEach((result) => {
                        if (!result.hasAttribute('ngst-result-processed')) {
                            videoResultsToProcess.push(result);
                        }
                    });
                }
            });
        });

        if (videoResultsToProcess.length > 0) {
            videoResultsToProcess.forEach((result) => {
                cleanVideoResult(result).catch(console.error);
            });
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    return observer;
};

/**
 * Main function to initialize the translation cleaner
 * Handles both regular search results and video results
 */
const initializeTranslationCleaner = async () => {
    /* Results untranslation
    - #rso div.MjjYud : normal results lines sometimes improved (accordion or video results) on both viewports;
    - #rhs : right sidebar (desktop only);
        - #rhs div.qXbDwb : knowledge panel right sidebar (at the right of the page)
        - #rhs div.xGj8Mb : classic right sidebar with Wikipedia-like snippets;
    Same with #rso div.qXbDwb and #rso div.xGj8Mb but only on mobile (one column).
    There is sometimes a top knowledge panel, but it is not affected by the translation for now.
    */
    const resultsSelectors = [
        '#rso div.MjjYud',
        '#rso div.xGj8Mb',
        '#rso div.qXbDwb',
        '#rhs div.xGj8Mb',
        '#rhs div.qXbDwb',
    ].join(', ');

    const resultsDivs = document.querySelectorAll<HTMLDivElement>(resultsSelectors);
    await Promise.all(Array.from(resultsDivs).map(cleanResult));

    /* Video results untranslation
    - #rso div.sHEJob : featured videos on default results view
    - #rso div.PmEWq.wHYlTd.vt6azd.Ww4FFb: video focus results (udm=7 ; Unified Data Model id for videos)
    - #botstuff div.PmEWq.wHYlTd.vt6azd.Ww4FFb: infinite results by scrolling (udm=7)
    */
    const videosResultsSelectors = [
        '#rso div.sHEJob',
        '#rso div.PmEWq.wHYlTd.vt6azd.Ww4FFb',
        '#botstuff div.PmEWq.wHYlTd.vt6azd.Ww4FFb'
    ].join(', ');

    const resultVideoDivs = document.querySelectorAll<HTMLDivElement>(videosResultsSelectors);
    await Promise.all(Array.from(resultVideoDivs).map(cleanVideoResult));

    setupMutationObserver();
};

// Event listener to run the cleaner when the DOM is fully loaded
if (document.readyState === "loading") {
    window.addEventListener('DOMContentLoaded', () => {
        initializeTranslationCleaner().catch(console.error);
    });
} else {
    initializeTranslationCleaner().catch(console.error);
}
