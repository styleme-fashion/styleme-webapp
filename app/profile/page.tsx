import { DashboardHeader } from '@/components/dashboard-header'
import { ProfileForm } from '@/components/profile-form'
import { WardrobePreferences } from '@/components/wardrobe-preferences'

export default function ProfilePage() {
  return (
    <div className='min-h-screen bg-secondary/10'>
      <DashboardHeader />
      <main className='container mx-auto px-4 py-8 max-w-4xl space-y-8'>
        <div className='space-y-2'>
          <h2 className='text-3xl font-serif font-bold'>Profile Settings</h2>
          <p className='text-muted-foreground'>
            Manage your account and wardrobe preferences
          </p>
        </div>

        <ProfileForm />
        <WardrobePreferences />
      </main>
    </div>
  )
}
