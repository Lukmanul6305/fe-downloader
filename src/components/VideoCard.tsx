import type { VideoData } from "../types";

interface Props {
  data: VideoData;
}

export default function VideoCard({ data }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-4">
      <img 
        src={data.thumbnail} 
        alt={data.title} 
        className="w-full h-32 object-cover"
      />
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2" title={data.title}>
          {data.title}
        </h3>
      </div>
    </div>
  );
}