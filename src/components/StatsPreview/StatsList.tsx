import { PropsWithChildren } from 'react'

export default function StatsList({ children }: PropsWithChildren) {
  return <div className="flex items-center justify-between">{children}</div>
}
