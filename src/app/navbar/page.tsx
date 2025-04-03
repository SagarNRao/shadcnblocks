import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-5xl font-bold mb-6">Email for developers</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#" className="bg-white text-black px-6 py-2 rounded-full font-medium flex items-center">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a href="#" className="border border-gray-700 text-gray-300 px-6 py-2 rounded-full font-medium">
            Documentation
          </a>
        </div>
      </div>
    </main>
  )
}

