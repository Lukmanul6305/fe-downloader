import type { VideoOption } from "../types";

interface Props {
  options: VideoOption[];
}

export default function DownloadList({ options }: Props) {
  if (options.length === 0) {
    return <p className="text-center text-gray-500 text-xs">Tidak ada format tersedia.</p>;
  }

  return (
    <div className="space-y-2">
      {options.map((opt, idx) => (
        <a
          key={idx}
          href={opt.url}
          target="_blank"
          rel="noopener noreferrer" 
          title="Klik kanan > Save Link As jika video diputar"
          className="flex justify-between items-center w-full py-2 px-4 bg-red-50 text-red-700 border border-red-100 rounded hover:bg-red-100 transition-colors text-sm font-medium decoration-none"
        >
          <span>{opt.quality}</span>
          <span className="text-xs text-gray-500 uppercase bg-white px-1 rounded border">
            {opt.container}
          </span>
        </a>
      ))}
      
      {/* Tambahan Teks Bantuan UI */}
      <p className="text-[10px] text-gray-400 text-center mt-2 italic">
        *Jika video otomatis berputar, klik ikon titik tiga (⋮) di player lalu pilih Download.
      </p>
    </div>
  );
}