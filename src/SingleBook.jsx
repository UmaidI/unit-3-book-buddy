import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SingleBook = () => {
  const {id} = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    const getBook = async () => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
      const data = await response.json();
      const individualBook = data.book;
      setSelectedProduct(individualBook);
    }
    getBook();
  }, [])

  const checkoutNow = ()=> {
    console.log('checked out!');
  }


  return(
    <>
    <h1>Book Details</h1>
    <h2>{selectedProduct.author}</h2>
    <h3>{selectedProduct.title}</h3>
    <img src={selectedProduct.coverimage} 
    alt={selectedProduct.title} 
    height="250" width= "250" />
    <p>{selectedProduct.description}</p>

    <button>Checkout!</button>
    <Link to= '/books'>Back to all books!</Link>
     
     
    
    </>
  ) 
}
export default SingleBook;