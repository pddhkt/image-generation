"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Home, Image, Send, CheckCircle } from 'lucide-react'

const routes = [
  { name: 'Home', path: '/app/home', icon: Home },
  { name: 'Generate Prompts', path: '/app/generate-prompts', icon: Image },
  { name: 'Generate Images', path: '/app/generate-images', icon: Image },
  { name: 'Select Images', path: '/app/select-images', icon: CheckCircle },
  { name: 'Post to Instagram', path: '/app/post-to-instagram', icon: Send },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-card text-card-foreground p-4 space-y-4">
      <h2 className="text-2xl font-bold">Image Gen App</h2>
      <nav className="space-y-2">
        {routes.map((route) => (
          <Link key={route.path} href={route.path}>
            <Button
              variant="ghost"
              className={cn(
                'w-full justify-start',
                pathname === route.path && 'bg-accent'
              )}
            >
              <route.icon className="mr-2 h-4 w-4" />
              {route.name}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  )
}