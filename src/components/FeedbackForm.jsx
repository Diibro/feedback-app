import RatingSelect from './shared/RatingSelect';
import { useContext, useState, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
     const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
     const [text, setText] = useState('');
     const [btnDisabled, setBtnDisabled] = useState(true);
     const [message, setMessage] = useState('');
     const [rating, setRating] = useState(10)
     const handleTextChange = (e) =>{

          setText(e.target.value)
          if(text === ''){
               setBtnDisabled(true)
               setMessage(null)
          } else if(text !== '' && text.trim().length < 10){
               setBtnDisabled(true)
               setMessage('The message should be atleast 10 characters.')
          }else{
               setBtnDisabled(false)
               setMessage(null)
          }

     }

     useEffect(() => {
          if(feedbackEdit.edit === true){
               setBtnDisabled(false)
               setText(feedbackEdit.item.text)
               setRating(feedbackEdit.item.rating)
          }
     }, [feedbackEdit])

     const handleSubmit = (e) =>{
          e.preventDefault()
          if(text.trim().length > 10){
               const newFeedBack = {
                    text,
                    rating
               }
               if(feedbackEdit.edit === true){
                    updateFeedback(feedbackEdit.item.id, newFeedBack)
               }
               else{
                    addFeedback(newFeedBack)
               }
               setText('')
               setRating(10)
          }
     }
  return (
    <Card>
     <form className='feedbackForm' onSubmit={handleSubmit}>
          <h2>How would you like to rate our app?</h2>
          <RatingSelect select={(rating) => setRating(rating)} />
          <div className="group">
               <input type="text" onChange={handleTextChange} value={text} placeholder='Write your feedback...'/>
               <Button type="submit" isDisabled={btnDisabled} >Send</Button>
          </div>
          {message && <div className='input-message'>{message}</div>}
     </form>
    </Card>
  )
}

export default FeedbackForm;