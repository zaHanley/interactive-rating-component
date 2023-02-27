import { useState } from "react";
import styles from "./Rating.module.css";

export function Rating() {
  const [selectedRating, setSelectedRating] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleRatingClicked = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleFormSubmitted = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return isSubmitted ? (
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
  ) : (
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
