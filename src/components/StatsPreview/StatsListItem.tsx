import styles from './StatsListItem.module.scss'

interface Props {
  amount: string
  description: string
}

export default function StatsListItem({ amount, description }: Props) {
  return (
    <div className={styles.statsListItem}>
      <div className={styles.amount}>{amount}</div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}
