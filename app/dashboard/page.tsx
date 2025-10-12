import { DashboardHeader } from '@/components/dashboard-header'
import { WardrobeUpload } from '@/components/wardrobe-upload'
import { VibeInput } from '@/components/vibe-input'
import { OutfitSuggestions } from '@/components/outfit-suggestions'

export default function DashboardPage() {
  return (
    <div className='min-h-screen bg-secondary/10'>
      <DashboardHeader />
      <main className='container mx-auto px-4 py-8 space-y-8'>
        <div className='space-y-2'>
          <h2 className='text-3xl font-serif font-bold'>Welcome back, Jane</h2>
          <p className='text-muted-foreground'>
            Let&apos;s create your perfect outfit for today
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8'>
          <WardrobeUpload />
          <VibeInput />
        </div>

        <OutfitSuggestions />
      </main>
    </div>
  )
}
