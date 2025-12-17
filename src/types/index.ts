export interface VideoOption {
    quality: string;
    container: string;
    url: string;
    hasAudio: boolean;
}

export interface VideoData {
    title: string;
    thumbnail: string;
    options: VideoOption[];
}

export interface ApiResponse {
    meta: {
        status: number,
        message: string,
    },
    data: VideoData;
}