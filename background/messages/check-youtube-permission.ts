import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler<{}, { hasPermission: boolean }> = async (req, res) => {
    const browser: any = (globalThis as any).browser || (globalThis as any).chrome;
    
    try {
        // Base, when both versions of the extension will use MV3
        // For Firefox MV2, we can't use optional_host_permissions, so always return true since the domain is already in host_permissions
        if (browser.runtime.getManifest().manifestVersion === 2) {
            res.send({ hasPermission: true });
        } else {
            const hasPermission = await browser.permissions.contains({
                origins: ["*://www.youtube.com/oembed/*"]
            });
            res.send({ hasPermission });
        }
    } catch (error) {
        console.error("Failed to check YouTube oEmbed permission:", error);
        res.send({ hasPermission: false });
    }
}

export default handler;