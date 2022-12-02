import styles from './StatsList.module.scss'
import { PropsWithChildren } from 'react'

export default function StatsList({ children }: PropsWithChildren) {
  return <div className={styles.statsList}>{children}</div>
}
