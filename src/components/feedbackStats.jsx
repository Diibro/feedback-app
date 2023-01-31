import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {

     const {feedback} = useContext(FeedbackContext)

     let average = 
          feedback.reduce((acc, cur) =>{
               return acc + cur.rating
          }, 0) / feedback.length
          

  return (
    <div className='feedback-stats'>
     <h4>{feedback.length} Reviews</h4>
     <h4>Average rating: {average || '0'}</h4>
    </div>
  )
}

export default FeedbackStats;