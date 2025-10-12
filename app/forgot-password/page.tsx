import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'

export default function ForgotPasswordPage() {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 bg-secondary/20'>
      <div className='w-full max-w-md'>
        <div className='text-center mb-8'>
          <Link href='/'>
            <h1 className='text-4xl font-serif font-bold mb-2'>StyleMe</h1>
          </Link>
          <p className='text-muted-foreground'>Reset your password</p>
        </div>

        <Card className='border-border shadow-lg'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-semibold'>
              Forgot Password
            </CardTitle>
            <CardDescription>
              Enter your email to receive a password reset link
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='you@example.com'
                  required
                />
              </div>
              <Button type='submit' className='w-full'>
                Send Reset Link
              </Button>
            </form>
          </CardContent>
          <CardFooter className='flex flex-col space-y-4'>
            <Link
              href='/login'
              className='text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2'
            >
              <ArrowLeft className='h-4 w-4' />
              Back to login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
