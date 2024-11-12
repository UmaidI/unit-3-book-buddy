import { useState } from "react"

const Homepage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  
  const registerUser = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      }),
    });
    
    const data = await response.json()
    const token = data.token;
    

    
    
  }

  return(
    <>
    <h1>Home Page</h1>
    <form onSubmit={registerUser}>
      <input 
        placeholder="first name" onChange={(event) => {setFirstname(event.target.value)}}/>
      <input placeholder="last name" onChange={(event) => {setLastname(event.target.value)}} />
      <input placeholder="email" onChange={(event) => {setEmail(event.target.value)}} />
      <input placeholder="password" onChange={(event) => {setPassword(event.target.value)}} />
      <button>Register</button>
    </form>
    </>
  )
}
export default Homepage