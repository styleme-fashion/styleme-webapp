"use client"

import type React from "react"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Upload, X } from "lucide-react"
import Image from "next/image"

export function WardrobeUpload() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      )
      setUploadedImages([...uploadedImages, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Wardrobe</CardTitle>
        <CardDescription>
          Upload photos of your clothes to build your digital wardrobe
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
          <input
            type="file"
            id="wardrobe-upload"
            multiple
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
          <label htmlFor="wardrobe-upload" className="cursor-pointer">
            <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-2">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">
              PNG, JPG, JPEG up to 10MB
            </p>
          </label>
        </div>

        {uploadedImages.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {uploadedImages.map((image, index) => (
              <div key={index} className="relative group aspect-square">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Wardrobe item ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Remove image"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
