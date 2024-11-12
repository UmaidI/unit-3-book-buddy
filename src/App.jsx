import SingleBook from "./SingleBook";
import {Routes, Route} from "react-router-dom"
import AllBooks from "./AllBooks";
const App = () => {
  
 
  

  return (
    <>
    <h1>Book Buddy</h1>
    <Routes>
      <Route path="/" element={<h2>Home Page</h2>} />
      <Route path="/books" element={<AllBooks />} />
      <Route path="books/:id" element={<SingleBook />} />
    </Routes>

 
    
    </>
  )
}

export default App
