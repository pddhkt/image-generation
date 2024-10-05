import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome to Image Generation App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Generate Prompts</CardTitle>
            <CardDescription>Create prompts for image generation</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Use our advanced prompt generation tools to create unique and inspiring prompts for your images.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Generate Images</CardTitle>
            <CardDescription>Turn prompts into stunning images</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Use AI-powered image generation to bring your prompts to life with beautiful, high-quality images.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Select Images</CardTitle>
            <CardDescription>Choose your favorite generated images</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Review and select the best images from your generated collection for further use or sharing.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Post to Instagram</CardTitle>
            <CardDescription>Share your creations with the world</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Easily post your selected images directly to Instagram, complete with captions and hashtags.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}