"use client";

import { useState } from "react";
import Link from "next/link";

export default function SubmitPhotoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birdType: "",
    location: "",
    caption: "",
    photoUrl: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "photo-submission",
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError("Failed to submit photo. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
            <div className="text-6xl mb-6">🐦</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thanks for Sharing!
            </h1>
            <p className="text-gray-600 mb-6">
              Your photo has been submitted for review. Once approved, it will
              appear in our community gallery. We&apos;ll notify you by email!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/gallery"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                View Gallery
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    birdType: "",
                    location: "",
                    caption: "",
                    photoUrl: "",
                  });
                }}
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-medium transition-colors"
              >
                Submit Another
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Share Your Birbs
          </h1>
          <p className="text-gray-600">
            Captured an amazing bird photo with your I Love Birbs kit? Share it
            with our community!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John D."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="birdType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Bird Species *
                </label>
                <input
                  type="text"
                  id="birdType"
                  name="birdType"
                  value={formData.birdType}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Northern Cardinal"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Ohio, USA"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="caption"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Photo Caption *
              </label>
              <textarea
                id="caption"
                name="caption"
                value={formData.caption}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Tell us about this photo..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors resize-none"
              />
            </div>

            <div>
              <label
                htmlFor="photoUrl"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Photo URL *
              </label>
              <input
                type="url"
                id="photoUrl"
                name="photoUrl"
                value={formData.photoUrl}
                onChange={handleChange}
                required
                placeholder="https://example.com/your-photo.jpg"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
              />
              <p className="text-sm text-gray-500 mt-2">
                Upload your photo to a service like Imgur, Google Photos, or
                Dropbox and paste the direct link here.
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-colors ${
                isSubmitting
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Photo"}
            </button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <h3 className="font-medium text-gray-900 mb-2">
              Submission Guidelines
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Photos must be captured with an I Love Birbs kit</li>
              <li>• High-quality, clear images preferred</li>
              <li>• No watermarks or heavy editing</li>
              <li>• You retain copyright to your photos</li>
              <li>
                • By submitting, you grant us permission to display your photo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
