# Notes

This version is reverting the migration to MV2 for the Firefox extension. 0.0.3 was working fine on Firefox if you manually approve the permissions. Currently, the workflow doesn't auto request approval or denial of the permissions on installation. Some modifications could be done to browsers workflows to request the permissions on installation, but it seems to not be a priority for now. We will see on june.

> As of June 2023, Safari, Firefox, and some Chromium-based browsers don't prompt the user during installation.
> https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions#requested_permissions_and_user_prompts

The statement seems false, at least Edge is prompting the user for permissions on installation. I don't know if it's a bug or a feature. 😒

# Documentation

- https://bugzilla.mozilla.org/show_bug.cgi?id=1839129

# What changed?
- Reverting migration to MV3 for the Firefox extension until june 2024 at least (see [#5](https://github.com/lnoss/no-google-search-translation/issues/5))