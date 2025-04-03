import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="container mx-auto px-4 py-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Email for developers</h1>
          <p className="text-xl mb-8">
            The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
          </p>
        </div>
      </main>
    </div>
  )
}

