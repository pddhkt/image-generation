"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image'

export default function PostToInstagramPage() {
  const [selectedImage] = useState('https://source.unsplash.com/random/400x400?nature')
  const [caption, setCaption] = useState('')

  const handlePostToInstagram = () => {
    // TODO: Implement Instagram posting logic
    console.log('Posting to Instagram:', { image: selectedImage, caption })
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Post to Instagram</h1>
      <Card>
        <CardContent className="p-4">
          <Image src={selectedImage} alt="Selected image" width={400} height={400} className="rounded-lg mb-4" />
          <Textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Enter your caption"
            className="mb-4"
          />
          <Button onClick={handlePostToInstagram}>Post to Instagram</Button>
        </CardContent>
      </Card>
    </div>
  )
}