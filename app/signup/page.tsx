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

export default function SignupPage() {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 bg-secondary/20'>
      <div className='w-full max-w-md'>
        <div className='text-center mb-8'>
          <Link href='/'>
            <h1 className='text-4xl font-serif font-bold mb-2'>StyleMe</h1>
          </Link>
          <p className='text-muted-foreground'>
            Start your style journey today
          </p>
        </div>

        <Card className='border-border shadow-lg'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-semibold'>
              Create Account
            </CardTitle>
            <CardDescription>
              Enter your information to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Full Name</Label>
                <Input id='name' type='text' placeholder='Jane Doe' required />
              </div>
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
                <Label htmlFor='password'>Password</Label>
                <Input
                  id='password'
                  type='password'
                  placeholder='••••••••'
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='confirm-password'>Confirm Password</Label>
                <Input
                  id='confirm-password'
                  type='password'
                  placeholder='••••••••'
                  required
                />
              </div>
              <Button type='submit' className='w-full'>
                Create Account
              </Button>
            </form>
          </CardContent>
          <CardFooter className='flex flex-col space-y-4'>
            <div className='text-sm text-center text-muted-foreground'>
              Already have an account?{' '}
              <Link
                href='/login'
                className='text-primary hover:underline font-medium'
              >
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
