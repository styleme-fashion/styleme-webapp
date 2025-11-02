// import { useState } from "react";

import { Upload, X, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
// import { useAvatarStore } from "@/app/providers/avatar-store-provider";
import { handleImageUpload } from "@/actions/meshcapade";

interface BodyPhoto {
  type: "front" | "side" | "back";
  file: File | null;
  preview: string | null;
}

export default async function BodyPhotosUpload() {
  // const { assetId, setAssetId, uid } = useAvatarStore((state) => state);

  // const [photos, setPhotos] = useState<BodyPhoto[]>([
  //   { type: "front", file: null, preview: null },
  //   { type: "side", file: null, preview: null },
  //   { type: "back", file: null, preview: null },
  // ]);

  /* const handlePhotoUpload = (
    type: "front" | "side" | "back",
    file: File | null
  ) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setPhotos((prev) =>
        prev.map((photo) =>
          photo.type === type
            ? { ...photo, file, preview: e.target?.result as string }
            : photo
        )
      );
      onUpload?.(photos);
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = (type: "front" | "side" | "back") => {
    setPhotos((prev) =>
      prev.map((photo) =>
        photo.type === type ? { ...photo, file: null, preview: null } : photo
      )
    );
  };

  const uploadedCount = photos.filter((p) => p.preview).length;
 */

  return (
    <Card className="p-8">
      <div className="space-y-6">
        <div className="flex flex-nowrap justify-between items-center gap-4">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Upload Your Photos</h3>
            <p className="text-muted-foreground">
              We need 3 photos to create your 3D model
            </p>
          </div>
          {/* {assetId ? ( */}
          {/* <p>You have created created a model {assetId}</p> */}
          {/* ) : ( */}
          <Button onClick={handleImageUpload}>Upload Photos</Button>
          {/* )} */}
        </div>

        {/* Progress Bar */}
        {/* <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">
              {uploadedCount} of 3 photos
            </span>
            <span className="text-xs text-muted-foreground">
              {Math.round((uploadedCount / 3) * 100)}%
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(uploadedCount / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-primary"
            />
          </div>
        </div> */}

        {/* Photo Upload Cards */}
        {/* <div className="grid md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <motion.div
              key={photo.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <label className="block cursor-pointer group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handlePhotoUpload(photo.type, e.target.files?.[0] || null)
                  }
                  className="hidden"
                />

                {photo.preview ? (
                  <div className="relative">
                    <Image
                      src={photo.preview || "/placeholder.svg"}
                      alt={`${photo.type} view`}
                      className="w-full h-64 object-cover rounded-lg border-2 border-primary"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-colors flex items-center justify-center">
                      <div className="bg-primary text-primary-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Check className="h-6 w-6" />
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.preventDefault();
                        removePhoto(photo.type);
                      }}
                      className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1"
                    >
                      <X className="h-4 w-4" />
                    </motion.button>
                  </div>
                ) : (
                  <div className="w-full h-64 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors">
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="font-medium text-sm capitalize">
                      {photo.type} View
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Click to upload
                    </p>
                  </div>
                )}
              </label>
            </motion.div>
          ))}
        </div> */}
      </div>
    </Card>
  );
}
