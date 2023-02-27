import { useState } from "react";
import styles from "./Rating.module.css";
import { Selection } from "./Selection";
import { Submitted } from "./Submitted";


export const Rating: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleRatingClicked = (rating: number | undefined) => {
    setSelectedRating(rating);
  };

  const handleFormSubmitted = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return isSubmitted ? (
    <Submitted 
        selectedRating={selectedRating}
    />
  ) : (
    <Selection 
    selectedRating={selectedRating}    
    handleRatingClicked={handleRatingClicked}
    handleFormSubmitted={handleFormSubmitted}
    /> 
  )
    
}
