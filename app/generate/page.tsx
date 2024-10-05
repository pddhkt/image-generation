import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GeneratePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Generate Images</h1>
      <p className="mb-8 text-center">Image generation functionality will be implemented here.</p>
      <div className="flex space-x-4">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/gallery">View Gallery</Link>
        </Button>
      </div>
    </main>
  )
}