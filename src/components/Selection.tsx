import styles from './Rating.module.css'

type Props = {
    selectedRating: number | undefined;
    handleRatingClicked: (rating: number | undefined) => void;
    handleFormSubmitted: (e: React.FormEvent) => void;
}

export const Selection: React.FC<Props> = ({
    selectedRating,
    handleRatingClicked,
    handleFormSubmitted,
}) => {
  return (
    <form onSubmit={handleFormSubmitted} className={styles.panel}>
      <button className={styles.star}>⭐️</button>
      <h1 className={styles.title}>How did we do?</h1>

      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className={styles.group}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            type="button"
            onClick={() => handleRatingClicked(rating)}
            className={styles.rating}
          >
            {rating}
          </button>
        ))}
      </div>

      <button disabled={selectedRating === undefined} className={styles.submit}>
        Submit
      </button>
    </form>
  );
}
