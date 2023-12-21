// Don’t be evil.

import type { PlasmoCSConfig } from "plasmo"

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

const cleanResult = (resultDiv: HTMLDivElement): Promise<void> => {
    return new Promise<void>((resolve) => {
        // For .ub-button, see #1.
        const seeOriginalButton: HTMLSpanElement = resultDiv.querySelector<HTMLSpanElement>('span[role=button][tabindex="0"]:not([aria-label="Fermer"]):not(.ub-button)');

        /* A div added between "normal" results lines. If there is no button, nothing to do. 
        But if there is one, it will always be a result line. 
        There is a span before with a text like "Translated by Google". */
        if (seeOriginalButton === null || !seeOriginalButton.previousElementSibling?.textContent.includes("Google"))
            return;

        // Fire click event to see the original result.
        seeOriginalButton.click();

        // Chasing the parent div four levels up. Beautiful, isn't it?
        const translationDiv: HTMLDivElement = seeOriginalButton.parentElement.parentElement.parentElement.parentElement as HTMLDivElement;
        translationDiv.style.display = "none"; // Better than playing with DOM performance wise, I guess. Removing it would avoid any possible reclick on the button.

        // Google rewrite the URL to use their Google Translate proxy (AMP little brother).
        const link: HTMLAnchorElement = resultDiv.querySelector<HTMLAnchorElement>('a[href^="https://translate.google.com/translate?"]');

        // Not good if we are here without a found link. There is a span before with a text like "Translated by Google".
        if (link !== null)
            link.href = link.href.replace("https://translate.google.com/translate?u=", "");
        else
            console.log(`%cNo Google Search Translation Extension: tried to clean a non-valid case. Please copy this message if you don't mind to share the website you just visited and open an issue on https://github.com/lnoss/no-google-search-translation/issues \n\n${window.location.href}\n\n${resultDiv}`, 'background: #222; color: #ff7f00');

        resolve();
    });
}

const observer: MutationObserver = new MutationObserver((mutations: MutationRecord[]) => {
    for (const mutation of mutations) {
        // https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord/type
        if (mutation.type !== 'childList') {
            continue;
        }

        // If no new nodes were added, WE DON'T CARE.
        for (const addedNode of mutation.addedNodes) {
            // You are not a div? We still don't care about you.
            if (!(addedNode instanceof HTMLDivElement)) {
                continue;
            }

            // You are the chosen one.
            if (addedNode.id.startsWith("arc-srp_")) {
                // The div is lazy loading, we have to clean it later.
                if (addedNode.innerHTML === "") {

                    // It starts to be ugly. An observer to apply a new observer.
                    let specializedObserver: MutationObserver = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
                        addedNode.querySelectorAll<HTMLDivElement>(`.${idOfResults}`)
                            .forEach(async (resultDiv) => cleanResult(resultDiv));

                        observer.disconnect();
                    });

                    specializedObserver.observe(addedNode, { childList: true });
                }

                addedNode.querySelectorAll<HTMLDivElement>(`.${idOfResults}`)
                    .forEach((resultDiv) => cleanResult(resultDiv));
            };
        }
    }
});

/* First selector is for the main search div results, aka. the only results servers-side rendered.
The second selector is selecting dynamically fetched results. They are added in a parent #botstuff div,
but the fetched results themselves are added with some pagination system:
- the new 10 first fetched results are added in a #arc-srp_110 div;
- then the next 10 in a #arc-srp_120 div;
- etc.
*/

/* We might need to select `div#botstuff div[id^="arc-srp_"] > div > div[class]:not([id]):not(.arc-npt)` too.
I am not sure if the observer will always catch in time the new results if scrolling down too quickly. */
const idOfResults: string = document.querySelector<HTMLDivElement>('div#rso > div > div').classList[0];
const elements = document.getElementsByClassName(`${idOfResults}`);
const typedElements: HTMLDivElement[] = Array.from(elements) as HTMLDivElement[];

typedElements.forEach(async (resultDiv) => await cleanResult(resultDiv));

// We made one iteration to clean the server-side renderer results (and a bit more if the user scroll down too quickly). 
observer.observe(document.querySelector('#botstuff'), { childList: true, subtree: true });
