"use client";

import Image from "next/image";
import { GalleryPhoto } from "@/types";
import { useState, useEffect } from "react";

interface PhotoCardProps {
  photo: GalleryPhoto;
  onUpvoteChange?: (photoId: string, newCount: number) => void;
}

export function PhotoCard({ photo, onUpvoteChange }: PhotoCardProps) {
  const [upvotes, setUpvotes] = useState(photo.upvotes || 0);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  useEffect(() => {
    // Check if user has already upvoted this photo
    const upvotedPhotos = JSON.parse(
      localStorage.getItem("upvotedPhotos") || "{}"
    );
    setHasUpvoted(!!upvotedPhotos[photo.id]);

    // Load current upvote count from localStorage
    const savedUpvotes = JSON.parse(
      localStorage.getItem("photoUpvotes") || "{}"
    );
    if (savedUpvotes[photo.id] !== undefined) {
      setUpvotes(savedUpvotes[photo.id]);
    }
  }, [photo.id]);

  const handleUpvote = () => {
    if (photo.isPlaceholder) return; // Don't allow upvoting placeholders

    const upvotedPhotos = JSON.parse(
      localStorage.getItem("upvotedPhotos") || "{}"
    );
    const photoUpvotes = JSON.parse(
      localStorage.getItem("photoUpvotes") || "{}"
    );

    let newUpvotes: number;
    if (hasUpvoted) {
      // Remove upvote
      delete upvotedPhotos[photo.id];
      newUpvotes = Math.max(0, upvotes - 1);
    } else {
      // Add upvote
      upvotedPhotos[photo.id] = true;
      newUpvotes = upvotes + 1;
    }

    photoUpvotes[photo.id] = newUpvotes;

    localStorage.setItem("upvotedPhotos", JSON.stringify(upvotedPhotos));
    localStorage.setItem("photoUpvotes", JSON.stringify(photoUpvotes));

    setHasUpvoted(!hasUpvoted);
    setUpvotes(newUpvotes);

    if (onUpvoteChange) {
      onUpvoteChange(photo.id, newUpvotes);
    }
  };

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
        {!photo.isPlaceholder && (
          <button
            onClick={handleUpvote}
            className={`absolute top-3 right-3 px-3 py-2 rounded-full font-medium text-sm shadow-lg transition-all ${
              hasUpvoted
                ? "bg-green-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span className="mr-1">{hasUpvoted ? "❤️" : "🤍"}</span>
            {upvotes}
          </button>
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
