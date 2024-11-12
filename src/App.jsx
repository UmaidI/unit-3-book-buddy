import SingleBook from "./SingleBook.jsx";
import Homepage from "./Homepage.jsx";

import {Routes, Route, Link} from "react-router-dom"
import AllBooks from "./AllBooks";

const App = () => {
  
 
  

  return (
    <>
    <nav>
      <Link id="nav-link-1" to = '/'>Home</Link>
      <Link id="nav-link-2" to = '/books'>AllBooks</Link>
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
