import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 via-white to-green-200 px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-green-600 mb-4">Coming Soon</h1>
        <p className="text-gray-600 text-lg mb-8">
          We're working hard to bring this page to life. Stay tuned!
        </p>
        <Link href="/">
          <button className="inline-flex items-center px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-full shadow-lg transition">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
