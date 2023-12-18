Get the extension on:

[![Badge Chrome]][Chrome]

[Chrome]: https://chromewebstore.google.com/detail/no-google-search-translat/kdibhchppeokcmdamhekocbnkjkodoii
[Badge Chrome]: https://img.shields.io/chrome-web-store/rating/kdibhchppeokcmdamhekocbnkjkodoii?style=for-the-badge&label=Chrome

Pending validation for Firefox, Edge and Opera.

<hr>

![Extension logo](assets/icon.png "Nice logo.")
**No Google Search Auto Translation** is a browser extension that remove the auto translation feature of Google Search. It also detect the Google Translate proxy and redirect you to the original page.

![Screenshot of the extension in action](assets/be-gone.webp "Be gone Google Translated results!")

Bonus on Firefox: it cleans the tab's navigation history to prevent the back button to redirect you to the Google Translate proxy.

## Context

> To help address content and perspective gaps when a user searches in their local language, sometimes Google may translate the title link and snippet of a search result for results that aren't in the language of the search query, when available.
> https://developers.google.com/search/docs/appearance/translated-results

This feature seems to be more globaly deployed since december 2023 (at least for me and some complaints on social networks), but first occurences of the feature can be found at least in [september 2022](https://web.archive.org/web/20220918204136/https://developers.google.com/search/docs/appearance/translated-results).

There is no easy way to just disable this feature, so this extension is here to help until Google provide a way to disable it.

## Why does it not work?

I don't know! This fix is hacky, the extension is heavily relying on the structure of the Google Search page. If Google change it, the extension will not work anymore. If you find a bug, please open an issue. Or even a pull request! Then hope for a quick new release.

## Development

First, you need to install [pnpm](https://pnpm.io/) (or npm *ewh!*) and run `pnpm install` (or `npm install`) to install all dependencies.

### Commands

| Command                                                       | Action                                                                                                            |
| :------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------- |
| `pnpm dev:[firefox,chrome]` or `npm run dev:[firefox,chrome]` | Run the development server for live testing by targeting either Firefox or Chrome.                                                    |
| `pnpm build` or `npm run build`                               | Build all extensions packages with manifests (Firefox, Chrome, Edge, Vivaldi, Brave, Opera)                       |
| `pnpm build:browser` or `npm run build:browser`               | Build the extension package with manifest for the targeted browser (Firefox, Chrome, Edge, Vivaldi, Brave, Opera) |

Currently, the extension is only tested on Firefox and Edge. It should work on every Chromium-browser. There is no extension for Safary because I can't test it. If you want to add support for it, feel free to open a pull request.

### Testing with side-loading

To live test the code, open your browser and load the appropriate development build. For example, if you are developing for Edge, using manifest v3, use: `build/edge-mv3-dev`. For Firefox, use `build/firefox-mv2-dev`.

Here the official documentation pages for the steps to follow:
* Firefox: https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#extensions
* Edge: https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/extension-sideloading

And [here](https://docs.plasmo.com/framework/workflows/dev) some details from Plasmo framework documentation.

## Alternatives

### Privacy and search engines

Google Search is not the only search engine on the web If you are concerned about your privacy, you could use:
- [DuckDuckGo](https://duckduckgo.com/);
- [Startpage](https://www.startpage.com/);
- [Brave Search](https://search.brave.com/);
- [Yep](https://yep.com/);
- One instance of [Searx](https://searx.space/);
- One instance of [Whoogle](https://github.com/benbusby/whoogle-search#public-instances);
- Etc.

Some are using Google Search results (like Startpage), others build their own index (like DuckDuckGo), some are mixing. You can find more information on [PrivacyTools.io](https://www.privacytools.io/providers/search-engines/).

### User script

If fore some reasons, you don't like browser extension (or just mine!), you can use [this user script](https://support.google.com/websearch/thread/248354054?hl=en&msgid=248372536) made by David Trapp.

Note that the text `Original ansehen` needs to be changed based on what language the results are translated to as stated by the user script author. Also, you might want to change the `@match` value to `https://www.google.*/*` to make it work on all Google Search domains. The script is not bypassing the Google Translate proxy, so you will still be redirected to the Goole translated page.
