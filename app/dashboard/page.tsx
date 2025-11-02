import DashboardHeader from "@/components/dashboard/dashboard-header";
// import ClothesUpload from "@/components/dashboard/clothes-upload";
import BodyPhotosUpload from "@/components/dashboard/body-photos-upload";
import DashboardHeading from "@/components/dashboard/heading-section";
import AnimatedDiv from "@/components/layout/animated-div";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      {/* TODO: Create better loading screen */}
      <Suspense fallback={<div>Loading...</div>}>
        <main className="container mx-auto px-4 py-12 space-y-12">
          <AnimatedDiv>
            <DashboardHeading />
          </AnimatedDiv>

          <div className="space-y-8">
            {/* <AnimatedDiv delay={0.1}>
            <ClothesUpload />
          </AnimatedDiv> */}

            <AnimatedDiv delay={0.2}>
              <BodyPhotosUpload />
            </AnimatedDiv>

            {/* <AnimatedDiv delay={0.4}>
            <ModelViewer />
          </AnimatedDiv> */}
          </div>
        </main>
      </Suspense>
    </div>
  );
}
