import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/feedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutUs from "./Pages/About-us";
import AboutIcon from "./components/shared/AboutIcon";

function App(){
     return(
          <FeedbackProvider>
          <Router>
               <Header/>
               <div className="container">
                    <Routes>
                         <Route exact path="/" element={
                              <>
                                   <FeedbackForm />
                                   <FeedbackStats />
                                   <FeedbackList />
                                   <AboutIcon />
                              </>
                         }/>
                         <Route path="/about" element={<AboutUs/>} />
                    </Routes>
               </div>
              
          </Router>
          </FeedbackProvider>
     )
}

export default App;