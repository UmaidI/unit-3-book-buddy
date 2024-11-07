import { useEffect, useState } from "react";
const AllBooks = () => {
  const [books , setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () =>{
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
      const data = await response.json();
      const novels = data.books;
      setBooks(novels);
    }
    getBooks();
  }, []);
  return(
    <>
   { 
    books.map((individualBook) => {
      return <section key={individualBook.id}>
      <h2>{individualBook.title}</h2>
      <img src ={individualBook.coverimage} height="250" width= "250" />
      </section>
    })
  }
    </>
   
  )
}
export default AllBooks;