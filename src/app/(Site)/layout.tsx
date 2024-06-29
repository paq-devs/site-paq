import { ReactNode } from 'react'

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1600px]">
      {children}
    </div>
  )
}
