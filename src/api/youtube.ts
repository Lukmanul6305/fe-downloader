import type { ApiResponse } from "../types";

const BASE_URL = "http://localhost:3000/api";

export const fetchVideoInfo = async (url: string): Promise<ApiResponse> => {
    try {
        const response = await fetch(`${BASE_URL}/getVideoInfo?url=${encodeURIComponent(url)}`);
        const result = await response.json();

        if(!response.ok) {
            throw new Error(result.error || "Gagal mengambil data dari server");
        }

        return result;
    } catch (error) {
        console.log("Error fetching video info:", error);
        throw error;
    }
}