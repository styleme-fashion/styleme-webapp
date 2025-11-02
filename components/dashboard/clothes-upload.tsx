"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Upload, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface ClothesUploadProps {
  onUpload?: (files: File[]) => void;
}

export default function ClothesUpload({ onUpload }: ClothesUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const fileArray = Array.from(newFiles);
    setFiles((prev) => [...prev, ...fileArray]);

    fileArray.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviews((prev) => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });

    onUpload?.(fileArray);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Card className="p-8 border-2 border-dashed border-border hover:border-primary/50 transition-colors">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Upload Your Clothes</h3>
          <p className="text-muted-foreground">
            Add photos of individual clothing items from your wardrobe
          </p>
        </div>

        {/* Upload Area */}
        <motion.div
          onDragOver={() => setIsDragging(true)}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            handleFiles(e.dataTransfer.files);
          }}
          animate={{ scale: isDragging ? 1.02 : 1 }}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragging ? "border-primary bg-primary/5" : "border-border"
          }`}
        >
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
            id="clothes-upload"
          />
          <label htmlFor="clothes-upload" className="cursor-pointer block">
            <Upload className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
            <p className="font-medium mb-1">Drag and drop your images here</p>
            <p className="text-sm text-muted-foreground">or click to browse</p>
          </label>
        </motion.div>

        {/* Progress Bar */}
        {files.length > 0 && (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">
                {files.length} items uploaded
              </span>
              <span className="text-xs text-muted-foreground">
                {Math.round((files.length / 20) * 100)}%
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(files.length / 20) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-primary"
              />
            </div>
          </div>
        )}

        {/* Previews Grid */}
        {previews.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {previews.map((preview, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative group"
              >
                <Image
                  src={preview || "/placeholder.svg"}
                  alt={`Clothing item ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg border border-border"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => removeFile(index)}
                  className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
