export default function SubmitPhotoPage() {
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
          <form name="photo-submission" method="POST" data-netlify="true" className="space-y-6">
            <input type="hidden" name="form-name" value="photo-submission" />

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
                required
                placeholder="https://example.com/your-photo.jpg"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors"
              />
              <p className="text-sm text-gray-500 mt-2">
                Upload your photo to a service like Imgur, Google Photos, or
                Dropbox and paste the direct link here.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-lg transition-colors bg-green-500 hover:bg-green-600 text-white"
            >
              Submit Photo
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
