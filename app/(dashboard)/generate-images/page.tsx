"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

export default function GenerateImagesPage() {
  const [prompts, setPrompts] = useState('')
  const [generatedImages, setGeneratedImages] = useState<string[]>([])

  const handleGenerateImages = () => {
    // TODO: Implement image generation logic
    const mockImages = [
      'https://source.unsplash.com/random/400x400?landscape',
      'https://source.unsplash.com/random/400x400?cityscape',
      'https://source.unsplash.com/random/400x400?abstract'
    ]
    setGeneratedImages(mockImages)
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Generate Images</h1>
      <div className="space-y-4">
        <Textarea
          value={prompts}
          onChange={(e) => setPrompts(e.target.value)}
          placeholder="Enter your prompts (one per line)"
          className="h-48"
        />
        <Button onClick={handleGenerateImages}>Generate Images</Button>
      </div>
      {generatedImages.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Generated Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {generatedImages.map((image, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <Image src={image} alt={`Generated image ${index + 1}`} width={400} height={400} className="rounded-lg" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}