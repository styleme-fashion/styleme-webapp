import { Bodoni_Moda } from "next/font/google"

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
})

export default function AppHeader() {
  return (
    <header>
      <p className={`${bodoni.className}`}>StyleMe</p>
    </header>
  )
}
