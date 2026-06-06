import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-display font-black text-8xl text-[#e9ecef] mb-4">
          404
        </div>
        <h1 className="font-display font-bold text-3xl text-[#2a4861] mb-4">
          Page Not Found
        </h1>
        <p className="text-[#6c757d] mb-8">
          The page you're looking for doesn't exist. Let us help you find what
          you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-[#2a4861] hover:bg-[#1a2f3f] text-white px-6 py-3 rounded font-display font-bold tracking-wide transition-colors"
          >
            GO HOME
          </Link>
          <Link
            href="/contact"
            className="border-2 border-[#2a4861] text-[#2a4861] hover:bg-[#2a4861] hover:text-white px-6 py-3 rounded font-display font-bold tracking-wide transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
}
