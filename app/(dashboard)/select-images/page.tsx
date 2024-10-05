"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image'

export default function SelectImagesPage() {
  const [images] = useState([
    'https://source.unsplash.com/random/400x400?landscape',
    'https://source.unsplash.com/random/400x400?cityscape',
    'https://source.unsplash.com/random/400x400?abstract'
  ])
  const [selectedImages, setSelectedImages] = useState<string[]>([])

  const handleImageSelection = (image: string) => {
    setSelectedImages(prev =>
      prev.includes(image)
        ? prev.filter(img => img !== image)
        : [...prev, image]
    )
  }

  const handleApproveImages = () => {
    // TODO: Implement image approval logic
    console.log('Approved images:', selectedImages)
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Select Images</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Card key={index} className="relative">
            <CardContent className="p-4">
              <Image src={image} alt={`Image ${index + 1}`} width={400} height={400} className="rounded-lg" />
              <Checkbox
                checked={selectedImages.includes(image)}
                onCheckedChange={() => handleImageSelection(image)}
                className="absolute top-2 right-2"
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <Button onClick={handleApproveImages} disabled={selectedImages.length === 0}>
        Approve Selected Images
      </Button>
    </div>
  )
}