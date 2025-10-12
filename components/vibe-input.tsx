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
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

const vibePresets = [
  "Casual",
  "Professional",
  "Date Night",
  "Sporty",
  "Elegant",
  "Edgy",
  "Cozy",
  "Chic",
]

export function VibeInput() {
  const [vibe, setVibe] = useState("")
  const [selectedPresets, setSelectedPresets] = useState<string[]>([])

  const togglePreset = (preset: string) => {
    if (selectedPresets.includes(preset)) {
      setSelectedPresets(selectedPresets.filter((p) => p !== preset))
    } else {
      setSelectedPresets([...selectedPresets, preset])
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today&apos;s Vibe</CardTitle>
        <CardDescription>
          Describe your mood, occasion, or style preference
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="vibe-input" className="text-sm font-medium">
            Describe your vibe
          </label>
          <Textarea
            id="vibe-input"
            placeholder="e.g., I want to look professional but approachable for a client meeting..."
            value={vibe}
            onChange={(e) => setVibe(e.target.value)}
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Quick presets</p>
          <div className="flex flex-wrap gap-2">
            {vibePresets.map((preset) => (
              <Badge
                key={preset}
                variant={
                  selectedPresets.includes(preset) ? "default" : "outline"
                }
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => togglePreset(preset)}
              >
                {preset}
              </Badge>
            ))}
          </div>
        </div>

        <Button className="w-full" size="lg">
          <Sparkles className="mr-2 h-5 w-5" />
          Generate Outfits
        </Button>
      </CardContent>
    </Card>
  )
}
