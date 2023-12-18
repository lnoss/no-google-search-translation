// Don’t be evil.

import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
    matches: ["*://*.google.com/search*",
        "*://*.google.ad/search*",
        "*://*.google.ae/search*",
        "*://*.google.com.af/search*",
        "*://*.google.com.ag/search*",
        "*://*.google.al/search*",
        "*://*.google.am/search*",
        "*://*.google.co.ao/search*",
        "*://*.google.com.ar/search*",
        "*://*.google.as/search*",
        "*://*.google.at/search*",
        "*://*.google.com.au/search*",
        "*://*.google.az/search*",
        "*://*.google.ba/search*",
        "*://*.google.com.bd/search*",
        "*://*.google.be/search*",
        "*://*.google.bf/search*",
        "*://*.google.bg/search*",
        "*://*.google.com.bh/search*",
        "*://*.google.bi/search*",
        "*://*.google.bj/search*",
        "*://*.google.com.bn/search*",
        "*://*.google.com.bo/search*",
        "*://*.google.com.br/search*",
        "*://*.google.bs/search*",
        "*://*.google.bt/search*",
        "*://*.google.co.bw/search*",
        "*://*.google.by/search*",
        "*://*.google.com.bz/search*",
        "*://*.google.ca/search*",
        "*://*.google.cd/search*",
        "*://*.google.cf/search*",
        "*://*.google.cg/search*",
        "*://*.google.ch/search*",
        "*://*.google.ci/search*",
        "*://*.google.co.ck/search*",
        "*://*.google.cl/search*",
        "*://*.google.cm/search*",
        "*://*.google.cn/search*",
        "*://*.google.com.co/search*",
        "*://*.google.co.cr/search*",
        "*://*.google.com.cu/search*",
        "*://*.google.cv/search*",
        "*://*.google.com.cy/search*",
        "*://*.google.cz/search*",
        "*://*.google.de/search*",
        "*://*.google.dj/search*",
        "*://*.google.dk/search*",
        "*://*.google.dm/search*",
        "*://*.google.com.do/search*",
        "*://*.google.dz/search*",
        "*://*.google.com.ec/search*",
        "*://*.google.ee/search*",
        "*://*.google.com.eg/search*",
        "*://*.google.es/search*",
        "*://*.google.com.et/search*",
        "*://*.google.fi/search*",
        "*://*.google.com.fj/search*",
        "*://*.google.fm/search*",
        "*://*.google.fr/search*",
        "*://*.google.ga/search*",
        "*://*.google.ge/search*",
        "*://*.google.gg/search*",
        "*://*.google.com.gh/search*",
        "*://*.google.com.gi/search*",
        "*://*.google.gl/search*",
        "*://*.google.gm/search*",
        "*://*.google.gr/search*",
        "*://*.google.com.gt/search*",
        "*://*.google.gy/search*",
        "*://*.google.com.hk/search*",
        "*://*.google.hn/search*",
        "*://*.google.hr/search*",
        "*://*.google.ht/search*",
        "*://*.google.hu/search*",
        "*://*.google.co.id/search*",
        "*://*.google.ie/search*",
        "*://*.google.co.il/search*",
        "*://*.google.im/search*",
        "*://*.google.co.in/search*",
        "*://*.google.iq/search*",
        "*://*.google.is/search*",
        "*://*.google.it/search*",
        "*://*.google.je/search*",
        "*://*.google.com.jm/search*",
        "*://*.google.jo/search*",
        "*://*.google.co.jp/search*",
        "*://*.google.co.ke/search*",
        "*://*.google.com.kh/search*",
        "*://*.google.ki/search*",
        "*://*.google.kg/search*",
        "*://*.google.co.kr/search*",
        "*://*.google.com.kw/search*",
        "*://*.google.kz/search*",
        "*://*.google.la/search*",
        "*://*.google.com.lb/search*",
        "*://*.google.li/search*",
        "*://*.google.lk/search*",
        "*://*.google.co.ls/search*",
        "*://*.google.lt/search*",
        "*://*.google.lu/search*",
        "*://*.google.lv/search*",
        "*://*.google.com.ly/search*",
        "*://*.google.co.ma/search*",
        "*://*.google.md/search*",
        "*://*.google.me/search*",
        "*://*.google.mg/search*",
        "*://*.google.mk/search*",
        "*://*.google.ml/search*",
        "*://*.google.com.mm/search*",
        "*://*.google.mn/search*",
        "*://*.google.com.mt/search*",
        "*://*.google.mu/search*",
        "*://*.google.mv/search*",
        "*://*.google.mw/search*",
        "*://*.google.com.mx/search*",
        "*://*.google.com.my/search*",
        "*://*.google.co.mz/search*",
        "*://*.google.com.na/search*",
        "*://*.google.com.ng/search*",
        "*://*.google.com.ni/search*",
        "*://*.google.ne/search*",
        "*://*.google.nl/search*",
        "*://*.google.no/search*",
        "*://*.google.com.np/search*",
        "*://*.google.nr/search*",
        "*://*.google.nu/search*",
        "*://*.google.co.nz/search*",
        "*://*.google.com.om/search*",
        "*://*.google.com.pa/search*",
        "*://*.google.com.pe/search*",
        "*://*.google.com.pg/search*",
        "*://*.google.com.ph/search*",
        "*://*.google.com.pk/search*",
        "*://*.google.pl/search*",
        "*://*.google.pn/search*",
        "*://*.google.com.pr/search*",
        "*://*.google.ps/search*",
        "*://*.google.pt/search*",
        "*://*.google.com.py/search*",
        "*://*.google.com.qa/search*",
        "*://*.google.ro/search*",
        "*://*.google.ru/search*",
        "*://*.google.rw/search*",
        "*://*.google.com.sa/search*",
        "*://*.google.com.sb/search*",
        "*://*.google.sc/search*",
        "*://*.google.se/search*",
        "*://*.google.com.sg/search*",
        "*://*.google.sh/search*",
        "*://*.google.si/search*",
        "*://*.google.sk/search*",
        "*://*.google.com.sl/search*",
        "*://*.google.sn/search*",
        "*://*.google.so/search*",
        "*://*.google.sm/search*",
        "*://*.google.sr/search*",
        "*://*.google.st/search*",
        "*://*.google.com.sv/search*",
        "*://*.google.td/search*",
        "*://*.google.tg/search*",
        "*://*.google.co.th/search*",
        "*://*.google.com.tj/search*",
        "*://*.google.tl/search*",
        "*://*.google.tm/search*",
        "*://*.google.tn/search*",
        "*://*.google.to/search*",
        "*://*.google.com.tr/search*",
        "*://*.google.tt/search*",
        "*://*.google.com.tw/search*",
        "*://*.google.co.tz/search*",
        "*://*.google.com.ua/search*",
        "*://*.google.co.ug/search*",
        "*://*.google.co.uk/search*",
        "*://*.google.com.uy/search*",
        "*://*.google.co.uz/search*",
        "*://*.google.com.vc/search*",
        "*://*.google.co.ve/search*",
        "*://*.google.co.vi/search*",
        "*://*.google.com.vn/search*",
        "*://*.google.vu/search*",
        "*://*.google.ws/search*",
        "*://*.google.rs/search*",
        "*://*.google.co.za/search*",
        "*://*.google.co.zm/search*",
        "*://*.google.co.zw/search*",
        "*://*.google.cat/search*"
    ],
}

const cleanResult = (resultDiv: HTMLDivElement): Promise<void> => {
    return new Promise<void>((resolve) => {
        const seeOriginalButton: HTMLSpanElement = resultDiv.querySelector<HTMLSpanElement>('span[role=button][tabindex="0"]:not([aria-label="Fermer"]):not(.ub-button)');

        /* A div added between "normal" results lines.
        If there is no button, nothing to do. 
        But if there is one, it will always be a result line. */
        if (seeOriginalButton === null) {
            return;
        }

        // Again, the translation is opt-out, so we need to click on the span[role=button] to see the original result.
        seeOriginalButton.click();

        // Chasing the parent div four levels up. Beautiful, isn't it?
        const translationDiv: HTMLDivElement = seeOriginalButton.parentElement.parentElement.parentElement.parentElement as HTMLDivElement;
        translationDiv.style.display = "none"; // Better than playing with DOM performance wise, I guess. Removing it would avoid any possible reclick on the button.

        // Google rewrite the URL to use their Google Translate proxy (AMP little brother).
        const link: HTMLAnchorElement = resultDiv.querySelector<HTMLAnchorElement>('a[href^="https://translate.google.com/translate?"]') as HTMLAnchorElement;

        if (link !== null) // Not good if we are here without a found link.
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

            // You are not a div ? We still don't care about you.
            if (!(addedNode instanceof HTMLDivElement)) {
                continue;
            }

            // You are the chosen one.
            if (addedNode.id.startsWith("arc-srp_")) {
                addedNode.querySelectorAll<HTMLDivElement>('div > div[class]:not([id]):not(.arc-npt)')
                    .forEach(async (resultDiv) =>
                        await cleanResult(resultDiv));
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
 
It could totally break easily if Google decides to change the way they display the results. I am sure they 
are already not renaming the CSS class to reduce the payload size. It is just for being annoying to scrapers.
I don't want to play with closets elements, because it would be too much of a hassle to keep track of the indirections.
It could be a solution if the current one breaks.
*/

/* We might need to select `div#botstuff div[id^="arc-srp_"] > div > div[class]:not([id]):not(.arc-npt)` too.
I am not sure if the observer will always catch in time the new results if scrolling down too quickly. */
const resultsDivs: HTMLDivElement[] = [...document.querySelectorAll<HTMLDivElement>('div#rso > div')];
resultsDivs.forEach(async (resultDiv) => {
    await cleanResult(resultDiv);
});

/* We made one iteration to clean the server-side renderer results (and a bit more if the user scroll down too quickly). 
Now, we need to observe the DOM to clean the results as soon as they are added. */
observer.observe(document.querySelector('#rcnt'), { childList: true, subtree: true });