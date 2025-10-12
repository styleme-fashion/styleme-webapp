"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const stylePreferences = [
  "Minimalist",
  "Bohemian",
  "Classic",
  "Streetwear",
  "Preppy",
  "Romantic",
  "Edgy",
  "Sporty",
  "Vintage",
  "Modern",
]

const colorPreferences = [
  "Neutrals",
  "Earth Tones",
  "Pastels",
  "Bold Colors",
  "Monochrome",
  "Jewel Tones",
  "Neons",
  "Metallics",
]

export function WardrobePreferences() {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([
    "Minimalist",
    "Classic",
  ])
  const [selectedColors, setSelectedColors] = useState<string[]>([
    "Neutrals",
    "Earth Tones",
  ])

  const toggleStyle = (style: string) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter((s) => s !== style))
    } else {
      setSelectedStyles([...selectedStyles, style])
    }
  }

  const toggleColor = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color))
    } else {
      setSelectedColors([...selectedColors, color])
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Wardrobe Preferences</CardTitle>
        <CardDescription>Help AI understand your style better</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Body Type</Label>
            <Select defaultValue="hourglass">
              <SelectTrigger>
                <SelectValue placeholder="Select body type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hourglass">Hourglass</SelectItem>
                <SelectItem value="pear">Pear</SelectItem>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="rectangle">Rectangle</SelectItem>
                <SelectItem value="inverted-triangle">
                  Inverted Triangle
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Preferred Size</Label>
            <Select defaultValue="m">
              <SelectTrigger>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xs">XS</SelectItem>
                <SelectItem value="s">S</SelectItem>
                <SelectItem value="m">M</SelectItem>
                <SelectItem value="l">L</SelectItem>
                <SelectItem value="xl">XL</SelectItem>
                <SelectItem value="xxl">XXL</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-3">
          <Label>Style Preferences</Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stylePreferences.map((style) => (
              <div key={style} className="flex items-center space-x-2">
                <Checkbox
                  id={`style-${style}`}
                  checked={selectedStyles.includes(style)}
                  onCheckedChange={() => toggleStyle(style)}
                />
                <label
                  htmlFor={`style-${style}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {style}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label>Color Preferences</Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {colorPreferences.map((color) => (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox
                  id={`color-${color}`}
                  checked={selectedColors.includes(color)}
                  onCheckedChange={() => toggleColor(color)}
                />
                <label
                  htmlFor={`color-${color}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {color}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Button className="flex-1">Save Preferences</Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
