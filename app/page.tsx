import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Image Generation Application</h1>
      <div className="flex space-x-4">
        <Button asChild>
          <Link href="/generate">Generate Images</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/gallery">View Gallery</Link>
        </Button>
      </div>
    </main>
  )
}