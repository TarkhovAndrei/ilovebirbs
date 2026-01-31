import Link from "next/link";
import { PhotoCard } from "@/components/PhotoCard";
import gallery from "@/data/gallery.json";
import { GalleryPhoto } from "@/types";

export const metadata = {
  title: "Bird Photo Gallery | I Love Birbs",
  description:
    "Beautiful bird photos captured by our community using I Love Birbs camera kits. Cardinals, blue jays, hummingbirds, and more!",
};

export default function GalleryPage() {
  const approvedPhotos = (gallery as GalleryPhoto[]).filter((p) => p.approved);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Community Birb Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Check out these amazing bird photos captured by our community using
            I Love Birbs camera kits. Want to see your birbs here?
          </p>
          <Link
            href="/submit-photo"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Submit Your Photos
          </Link>
        </div>

        {approvedPhotos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📷</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              No photos yet
            </h2>
            <p className="text-gray-600 mb-6">
              Be the first to share your bird photos!
            </p>
            <Link
              href="/submit-photo"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Submit a Photo
            </Link>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Want to Capture Photos Like These?
          </h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">
            Get your own Raspberry Pi bird feeder camera kit and start
            photographing the beautiful birds in your backyard!
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Shop Kits
          </Link>
        </section>
      </div>
    </div>
  );
}
