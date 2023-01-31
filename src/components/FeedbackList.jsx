import {useContext} from 'react'; 
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackList() {

  const {feedback} = useContext(FeedbackContext)

     

 if(!feedback || feedback.length === 0){
          return <p>No feedback</p>
     }

  return (
      <div className='feedback-list'>
        <AnimatePresence className='feedback-list-1'>
      {feedback.map((item, index) => (
        <motion.div
          className=''
          key={item.id}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
        >
          <FeedbackItem key={index} item={item} />
        </motion.div>
      ))}
      </AnimatePresence>
      </div>
  )
}

export default FeedbackList;

/*return (
    <div className='feedback-list'>
     {feedback.map((item, index) => (
        <FeedbackItem key={index} item={item} handleClick = {handleDelete}  />
     ))}
    </div>
  )*/