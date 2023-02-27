import styles from './Rating.module.css'

type Props = {
    selectedRating: number | undefined;
}

export const Submitted: React.FC<Props> = ({
    selectedRating
}) => {
    return (
        <div className={styles.panelSubmitted}>
      <h1 className={styles.blessUp}>🙏</h1>
      <div className={styles.ratingSubmitted}>
        You selected {selectedRating} out of 5
      </div>

      <h2 className={styles.title}>Thank you!</h2>

      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
    )
}