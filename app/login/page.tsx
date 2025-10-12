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

export default function LoginPage() {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 bg-secondary/20'>
      <div className='w-full max-w-md'>
        <div className='text-center mb-8'>
          <Link href='/'>
            <h1 className='text-4xl font-serif font-bold mb-2'>StyleMe</h1>
          </Link>
          <p className='text-muted-foreground'>Welcome back to your wardrobe</p>
        </div>

        <Card className='border-border shadow-lg'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-semibold'>Login</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
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
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <Label htmlFor='password'>Password</Label>
                  <Link
                    href='/forgot-password'
                    className='text-sm text-primary hover:underline'
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id='password'
                  type='password'
                  placeholder='••••••••'
                  required
                />
              </div>
              <Button type='submit' className='w-full'>
                Sign In
              </Button>
            </form>
          </CardContent>
          <CardFooter className='flex flex-col space-y-4'>
            <div className='text-sm text-center text-muted-foreground'>
              Don&apos;t have an account?
              <Link
                href='/signup'
                className='text-primary hover:underline font-medium'
              >
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
