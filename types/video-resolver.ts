export interface VideoResolutionRequest {
    ytId: string;
}

export interface VideoResolutionResponse {
    success: boolean;
    originalTitle?: string;
    error?: string;
}