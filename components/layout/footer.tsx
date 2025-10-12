import Link from "next/link"

export default function AppFooter() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-start">
            <h2 className="text-2xl font-serif font-bold mb-2">StyleMe</h2>
            <p className="text-sm text-muted-foreground">
              Your AI Fashion Assistant
            </p>
          </div>
          <nav className="flex gap-8 *:hover:text-primary *:transition-colors">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 StyleMe. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
