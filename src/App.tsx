import { useState } from "react";
import { fetchVideoInfo } from "./api/youtube";
import type { VideoData } from "./types";
import VideoCard from "./components/VIdeoCard";
import DownloadList from "./components/DownloadList";

function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetchVideoInfo(url);
      setData(res.data);
    } catch (errorr) {
      const err = errorr as Error;
      setError(err.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-350px min-h-400px bg-gray-50 p-4 font-sans text-slate-800">
      <h1 className="text-xl font-bold text-red-600 text-center mb-6">
        YT Downloader
      </h1>

      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Paste link here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-red-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-red-600 text-white px-4 py-2 rounded font-bold text-sm hover:bg-red-700 disabled:opacity-50"
        >
          {loading ? "..." : "Go"}
        </button>
      </form>

      {error && (
        <div className="p-3 bg-red-100 text-red-600 text-xs rounded mb-4 text-center border border-red-200">
          {error}
        </div>
      )}

      {data && (
        <div className="animate-fade-in">
          <VideoCard data={data} />
          <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            Download Options:
          </p>
          <DownloadList options={data.options} />
        </div>
      )}
      
      {!data && !loading && !error && (
        <div className="text-center text-gray-400 text-xs mt-10">
          Siap mendownload video favoritmu.
        </div>
      )}
    </div>
  );
}

export default App;