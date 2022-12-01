import styles from './StatsPreview.module.scss'
import StatsList from '@/components/StatsPreview/StatsList'
import StatsListItem from '@/components/StatsPreview/StatsListItem'

export default function StatsPreview() {
  return (
    // Page
    <div className={styles.statsPreview}>
      <article>
        <div className={styles.content}>
          <h1>
            Get <span className="text-soft-violet">insights</span> that help
            your business grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className={styles.stats}>
            <StatsList>
              <StatsListItem
                amount={'10k+'}
                description={'companies'}
              />
              <StatsListItem
                amount={'314'}
                description={'templates'}
              />
              <StatsListItem
                amount={'12M+'}
                description={'queries'}
              />
            </StatsList>
          </div>
        </div>
        <div className={styles.heading}>
          <img alt="heading image" />
        </div>
      </article>
    </div>
  )
}
