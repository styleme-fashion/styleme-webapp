import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Upload, Sparkles, Shirt } from 'lucide-react'
import AppHeader from '@/components/layout/header'

export default function LandingPage() {
  return (
    <div className='min-h-screen'>
      <AppHeader />

      {/* Hero Section */}
      <section className='container mx-auto px-4 py-24 md:py-32'>
        <div className='max-w-4xl mx-auto text-center space-y-8'>
          <h2 className='text-5xl md:text-7xl font-serif font-bold tracking-tight text-balance'>
            Your Wardrobe. Your Vibe. Perfectly Styled.
          </h2>
          <p className='text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty'>
            Upload your clothes, describe your mood, and let AI create stunning
            outfit combinations tailored just for you.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'>
            <Button asChild size='lg' className='text-base px-8'>
              <Link href='/signup'>
                Try StyleMe <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='text-base px-8 bg-transparent'
            >
              <Link href='/login'>Sign Up Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id='how-it-works' className='bg-secondary/30 py-24'>
        <div className='container mx-auto px-4'>
          <h3 className='text-4xl md:text-5xl font-serif font-bold text-center mb-16'>
            How It Works
          </h3>
          <div className='grid md:grid-cols-3 gap-12 max-w-5xl mx-auto'>
            <div className='text-center space-y-4'>
              <div className='w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center'>
                <Upload className='h-8 w-8 text-primary-foreground' />
              </div>
              <h4 className='text-2xl font-semibold'>Upload Your Wardrobe</h4>
              <p className='text-muted-foreground text-pretty'>
                Take photos of your clothes and upload them to build your
                digital wardrobe.
              </p>
            </div>
            <div className='text-center space-y-4'>
              <div className='w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center'>
                <Sparkles className='h-8 w-8 text-primary-foreground' />
              </div>
              <h4 className='text-2xl font-semibold'>Describe Your Vibe</h4>
              <p className='text-muted-foreground text-pretty'>
                Tell us your mood, occasion, or style preference for the day.
              </p>
            </div>
            <div className='text-center space-y-4'>
              <div className='w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center'>
                <Shirt className='h-8 w-8 text-primary-foreground' />
              </div>
              <h4 className='text-2xl font-semibold'>Get Perfect Outfits</h4>
              <p className='text-muted-foreground text-pretty'>
                AI suggests stunning outfit combinations from your own wardrobe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='container mx-auto px-4 py-24'>
        <div className='max-w-3xl mx-auto text-center space-y-6'>
          <h3 className='text-4xl md:text-5xl font-serif font-bold text-balance'>
            Ready to Transform Your Style?
          </h3>
          <p className='text-xl text-muted-foreground text-pretty'>
            Join thousands of fashion-forward individuals using AI to elevate
            their daily style.
          </p>
          <Button asChild size='lg' className='text-base px-8'>
            <Link href='/signup'>
              Get Started Free <ArrowRight className='ml-2 h-5 w-5' />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-border bg-secondary/20'>
        <div className='container mx-auto px-4 py-12'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
            <div>
              <h2 className='text-2xl font-serif font-bold mb-2'>StyleMe</h2>
              <p className='text-sm text-muted-foreground'>
                Your AI Fashion Assistant
              </p>
            </div>
            <nav className='flex gap-8'>
              <Link
                href='/about'
                className='hover:text-primary transition-colors'
              >
                About
              </Link>
              <Link
                href='/contact'
                className='hover:text-primary transition-colors'
              >
                Contact
              </Link>
              <Link
                href='/privacy'
                className='hover:text-primary transition-colors'
              >
                Privacy
              </Link>
            </nav>
          </div>
          <div className='mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground'>
            © 2025 StyleMe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
