import { PropsWithChildren } from 'react'

export default function StatsList({ children }: PropsWithChildren) {
  return <div className="flex items-center space-x-[3.87rem]">{children}</div>
}
