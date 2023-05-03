import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
      style={{ backgroundColor: 'skyblue' }}
    >
      <h1 className='text-4xl font-bold font-sans italic text-black text-center'>ISMART</h1>
    </main>
  )
}
