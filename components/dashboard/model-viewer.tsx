"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Cable as Cube } from "lucide-react";

interface ModelViewerProps {
  isLoading?: boolean;
  modelGenerated?: boolean;
}

export function ModelViewer({
  isLoading = false,
  modelGenerated = false,
}: ModelViewerProps) {
  // const [isGenerating, setIsGenerating] = useState(false);
  // const [modelGenerated, setModelGenerated] = useState(false);
  // const [bodyPhotosUploaded, setBodyPhotosUploaded] = useState(false);

  // const handleGenerateModel = async () => {
  //   setIsGenerating(true);
  // Simulate API call to backend for 3D model generation
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  //   setIsGenerating(false);
  //   setModelGenerated(true);
  // };

  return (
    <Card className="p-8 overflow-hidden">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Your 3D Model</h3>

        {/* 3D Viewer Placeholder */}
        <div className="w-full h-96 bg-gradient-to-br from-secondary to-secondary/50 rounded-lg border border-border flex items-center justify-center relative overflow-hidden">
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="flex flex-col items-center gap-4"
            >
              <Cube className="h-16 w-16 text-primary" />
              <p className="text-muted-foreground">
                Generating your 3D model...
              </p>
            </motion.div>
          ) : modelGenerated ? (
            <div className="text-center space-y-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Cube className="h-16 w-16 text-primary mx-auto" />
              </motion.div>
              <p className="text-muted-foreground">Your 3D model is ready!</p>
              <p className="text-sm text-muted-foreground">
                Drag to rotate • Scroll to zoom
              </p>
            </div>
          ) : (
            <div className="text-center space-y-2">
              <Cube className="h-16 w-16 text-muted-foreground mx-auto opacity-50" />
              <p className="text-muted-foreground">
                Upload photos and generate your model
              </p>
            </div>
          )}

          {/* Animated background elements */}
          {isLoading && (
            <>
              <motion.div
                animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-lg"
              />
              <motion.div
                animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.5,
                }}
                className="absolute bottom-10 right-10 w-16 h-16 border border-primary/20 rounded-lg"
              />
            </>
          )}
        </div>

        {/* Info Text */}
        <p className="text-sm text-muted-foreground">
          {isLoading
            ? "Processing your photos to create a personalized 3D model..."
            : modelGenerated
              ? "Your 3D model has been successfully generated. You can now use it for virtual try-ons."
              : "Upload your body photos and click 'Generate My 3D Model' to get started."}
        </p>
      </div>
    </Card>
  );
}
