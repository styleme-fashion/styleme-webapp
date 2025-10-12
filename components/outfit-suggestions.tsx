"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Share2, RefreshCw } from "lucide-react"
import Image from "next/image"

const mockOutfits = [
  {
    id: 1,
    name: "Professional Chic",
    items: ["White blouse", "Navy blazer", "Black trousers", "Leather loafers"],
    image: "/images/professional-outfit.jpg",
  },
  {
    id: 2,
    name: "Casual Elegance",
    items: ["Cream sweater", "Light jeans", "White sneakers", "Crossbody bag"],
    image: "/images/casual-elegant-outfit.jpg",
  },
  {
    id: 3,
    name: "Modern Minimalist",
    items: ["Black turtleneck", "Gray coat", "Dark jeans", "Ankle boots"],
    image: "/images/minimalist-outfit.jpg",
  },
]

export function OutfitSuggestions() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>AI Outfit Suggestions</CardTitle>
            <CardDescription>
              Curated combinations from your wardrobe
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockOutfits.map((outfit) => (
            <div key={outfit.id} className="space-y-3">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-secondary">
                <Image
                  src={outfit.image || "/placeholder.svg"}
                  alt={outfit.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">{outfit.name}</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {outfit.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
