import Image from "next/image";
import { GalleryPhoto } from "@/types";

interface PhotoCardProps {
  photo: GalleryPhoto;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 bg-gradient-to-br from-sky-50 to-green-50">
        {photo.videoUrl ? (
          <video
            src={photo.videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            src={photo.imageUrl}
            alt={photo.caption}
            fill
            className="object-cover"
          />
        )}
        {photo.isPlaceholder && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white px-4 py-2 rounded-full shadow-lg">
              <p className="text-gray-900 font-bold text-sm">
                Here could be your birbs!
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-gray-900 font-medium">{photo.caption}</p>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-green-600 font-medium">{photo.birdType}</span>
          <span className="text-gray-500">by {photo.submittedBy}</span>
        </div>
        {photo.location && (
          <p className="text-gray-400 text-xs mt-1">📍 {photo.location}</p>
        )}
      </div>
    </div>
  );
}
