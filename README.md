It seems that the wider roll-out of the feature has been cancelled by Google. At least on my side, the feature is no longer offered. I'm seeing similar comments on social networks.

**You should be able to uninstall the extension**, and maybe come back in a few months when the revert will be reverted! Who knows. It was a short adventure, but it was fun. 🫡

Funny story: Google deleted the topics complaining about this feature, [see](https://support.google.com/websearch/thread/248354054).

<hr>

[![Badge Firefox]][Firefox] [![Badge Chrome]][Chrome] ![GitHub commits since latest release (by SemVer including pre-releases)](https://img.shields.io/github/commits-since/lnoss/no-google-search-translation/latest/master?style=for-the-badge)

<p><img src="/assets/icon.png" height="64" alt="No Google Search Auto Translation Logo." title="Logo" /></p>

**No Google Search Auto Translation** is a browser extension that remove the auto translation feature of Google Search. It also detect the Google Translate proxy and redirect you to the original page. The extension is powered by the [Plasmo](https://docs.plasmo.com/) framework.

Pending validation for Edge and Opera extensions stores. Using Edge, Brave, Vivaldi or Opera, you should be able to install it from the Chrome Webstore.

[Chrome]: https://chromewebstore.google.com/detail/no-google-search-translat/kdibhchppeokcmdamhekocbnkjkodoii
[Badge Chrome]: https://img.shields.io/chrome-web-store/rating/kdibhchppeokcmdamhekocbnkjkodoii?label=Get%20on%20Chrome%20(and%20co.)&style=for-the-badge&logo=google-chrome&logoColor=white
[Firefox]: https://addons.mozilla.org/firefox/addon/no-google-search-translation/
[Badge Firefox]: https://img.shields.io/amo/rating/no-google-search-translation?label=Get%20on%20Firefox&style=for-the-badge&logo=firefoxbrowser&logoColor=white

# Showcase

![Screenshot of the extension in action](assets/showcase-1.jpg "Be gone Google Translated results!")

Bonus on Firefox: it cleans the tab's navigation history to prevent the back button to redirect you to the Google Translate proxy.

# Context

## What is the problem?

> To help address content and perspective gaps when a user searches in their local language, sometimes Google may translate the title link and snippet of a search result for results that aren't in the language of the search query, when available.
> https://developers.google.com/search/docs/appearance/translated-results

This feature seems to be more globaly deployed since december 2023 (at least for me and some complaints on social networks), but first occurences of the feature can be found at least in [september 2022](https://web.archive.org/web/20220918204136/https://developers.google.com/search/docs/appearance/translated-results).

There is no easy way to just disable this feature, so this extension is here to help until Google provide a way to disable it.

## Security concerns

- [Google Translate XSS](https://www.youtube.com/watch?v=Nk9jehNhqVc) proof of concept (2012);
- [ Google Translate Tricks Spam Filters ](https://www.bitdefender.com/blog/hotforsecurity/google-translate-tricks-spam-filters/) - Bitdefender (2013);
- [Hacker group uses Google Translate to hide phishing sites](https://www.zdnet.com/article/hacker-group-uses-google-translate-to-hide-phishing-sites/) - ZDNET (2019)
- [Google Translate is being hijacked by phishers to steal your data](https://www.techradar.com/news/google-translate-is-being-hijacked-by-phishers-to-steal-your-data) - Techradar (2022);
- [Threat actors using images, Google translate links, and special characters to launch phishing attacks](https://blog.osarmor.com/333/google-translate-used-in-phishing-attack/) - OSArmor (2023);
- [Google Translate Used in Phishing Attack to Bypass Antispam Filters](https://www.vadesecure.com/en/blog/new-phishing-attack-leverages-google-translate-and-ipfs-decentralized-network) with IPFS Decentralized Network - Vade Secure (2023).

# Why the extension isn't working?

I don't know! 

If not working, please check first that you approved the websites access permissions in the extension settings. Check help pages for [Firefox](https://support.mozilla.org/en-US/kb/manage-optional-permissions-extensions) and [Chrome](https://support.google.com/chrome_webstore/answer/2664769). If you are using a Chromium browser, you should be able to follow the Chrome help page.

This fix is hacky, the extension is heavily relying on the structure of the Google Search page. If Google change it, the extension will not work anymore. You might even be just unlucky and the chosen one for a Google Live Experiments. Or maybe just some cross-extensions incompatibilities.

If you find a bug or want to share some feedback, please open an issue. Or even a pull request!

Discussions tab is also open if you want to share your thoughts for more complex topics. For something that can't be resolved in a quick *one-shot*.

# Development

First, you need to install [pnpm](https://pnpm.io/) (or npm *ewh!*) and run `pnpm install` (or `npm install`) to install all dependencies.

## Commands

| Command                                                                   | Action                                                                               |
| :------------------------------------------------------------------------ | :----------------------------------------------------------------------------------- |
| `pnpm dev:[firefox,chromium]` or `npm run dev:[browser]`                    | Run the development server for hot reload testing targeting either Firefox or Chrome(-ium) |
| `pnpm build` or `npm run build`                                           | Build Firefox and Chrome(-ium) production extensions with manifests v3               |
| `pnpm build:zip` or `npm run build:zip`                                   | Build Firefox and Chrome(-ium) extensions packages and zip                           |
| `pnpm build:[firefox,chromium,edge,opera]` <br>or `npm run build:[browser]` | Build the extension package with manifest for the targeted browser                   |
| `pnpm plasmo help` or `npm run plasmo help`                               | Show CLI Plasmo help                                                                 |

Currently, the extension is only tested on Firefox and Edge. It should work on every Chromium-browser. There is no extension for Safari because I can't test it. If you want to add support for it, feel free to open a pull request.

## Project structure

- `assets/` contains the extension icon and the screenshots for the README and addons stores content.
- `background/messages/` contains the service worker handling the auto redirection;
- `build/` contains the production build for each browser;
- `contents/` contains the content scripts;
- `popup.tsx` contains the React component for the extesnion popup.

## Testing with side-loading

To live test the code, open your browser and load the appropriate development build. For example, if you are developing for Edge, using manifest v3, use: `build/chrome-mv3-dev`. For Firefox, use `build/firefox-mv2-dev`.

Here the official documentation pages for the steps to follow:
* Firefox: https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#extensions
* Edge: https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/extension-sideloading

And [here](https://docs.plasmo.com/framework/workflows/dev) some details from Plasmo framework documentation.

# Alternatives

## Privacy and search engines

Google Search is not the only search engine on the web If you are concerned about your privacy, you could use:
- [DuckDuckGo](https://duckduckgo.com/);
- [Startpage](https://www.startpage.com/);
- [Brave Search](https://search.brave.com/);
- [Yep](https://yep.com/);
- One instance of [Searx](https://searx.space/);
- One instance of [Whoogle](https://github.com/benbusby/whoogle-search#public-instances);
- Etc.

Some are using Google Search results (like Startpage), others build their own index (like DuckDuckGo), some are mixing. You can find more information on [PrivacyTools.io](https://www.privacytools.io/providers/search-engines/).

## User script

If fore some reasons, you don't like browsers extensions (or just mine!), you can use [this user script](https://support.google.com/websearch/thread/248354054?hl=en&msgid=248372536) made by David Trapp.

Note that the text `Original ansehen` needs to be changed based on what language the results are translated to as stated by the user script author. Also, you might want to change the `@match` value to make it work on the Google Search domain name you use. The script is not bypassing the Google Translate proxy, so you will still be redirected to the Google Translate proxy page traducting the original page.
