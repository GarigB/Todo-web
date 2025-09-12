'use client'

import Board from '@/components/Board'

export default function Home() {
  return (
    <main className="main">
      <Board />
      <style jsx>{`
        .main {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
        }
      `}</style>
    </main>
  )
}
