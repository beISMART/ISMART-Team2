import { Inter } from 'next/font/google'
import  Header  from '@/components/Header'
import Main from '@/components/Main'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
      style={{ backgroundColor: 'skyblue' }}
    >
     
      <Header/>
      <Main/>
    </main>
  )
}
