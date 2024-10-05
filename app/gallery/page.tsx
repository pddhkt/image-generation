import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Image Gallery</h1>
      <p className="mb-8 text-center">Your generated images will appear here.</p>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  )
}