import type { PlasmoMessaging } from "@plasmohq/messaging"
import type { VideoResolutionRequest, VideoResolutionResponse } from "../../types/video-resolver"

const handler: PlasmoMessaging.MessageHandler<VideoResolutionRequest, VideoResolutionResponse> = async (req, res) => {
    const videoId = req.body.ytId?.trim();

    if (!videoId) {
        res.send({ success: false, error: "No YouTube video ID provided" });
        return;
    }

    const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
    try {
        const response = await fetch(oembedUrl);
        const data = await response.json();
        res.send({ success: true, originalTitle: data.title });
    } catch (e) {
        console.error("Failed to fetch video original title:", e);
        res.send({ success: false, error: e.message || "Unknown error" });
    }
}

export default handler;