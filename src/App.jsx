import SingleBook from "./SingleBook.jsx";
import Homepage from "./Homepage.jsx";

import {Routes, Route, Link} from "react-router-dom"
import AllBooks from "./AllBooks";

const App = () => {
  
 
  

  return (
    <>
    <nav>
      <Link to = '/'>Home</Link>
      <Link to = '/books'>AllBooks</Link>
    </nav>
  
    <h1>Book Buddy</h1>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/books" element={<AllBooks />} />
      <Route path="books/:id" element={<SingleBook />} />
    </Routes>

 
    
    </>
  )
}

export default App
