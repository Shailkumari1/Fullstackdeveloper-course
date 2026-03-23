import { useState } from "react";
import "./App.css";

function App() {
  const [Theme, setTheme] = useState("light");
  const x = 5;
  const y = 6;

  const person = [
    {
      name: "Shaily verma",
      gender: "female",
      age: "20",
      img: "https://imgs.search.brave.com/rTtpcxJ5NscYCzARqP8Y4JGdvSyDBVukyQQ8yPYxnBk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzcv/MTk4LzI1OC9zbWFs/bC9jdXRlLTNkLWFu/aW1hdGVkLWdpcmwt/Y2hhcmFjdGVyLWRh/bmNpbmctYW5kLXBv/c2luZy1vbi1ncmVl/bi1zY3JlZW4tYmFj/a2dyb3VuZC1mcmVl/LXZpZGVvLmpwZw",
    },
    {
      name: "komal singh",
      gender: "female",
      age: "20",
      img: "https://imgs.search.brave.com/l18celnG7KAIkoT49BeY9ykgT5EnM6gA1axkQi4gQqg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE4Lzc5LzkyLzU4/LzM2MF9GXzE4Nzk5/MjU4MTRfcXp3ODJB/T3QyYXF1MDBzZ3gz/WHV6dzJTZUptTjNx/WFAuanBn",
    },
    {
      name: "Naveen sharma",
      gender: "male",
      age: "30",
      img: "https://imgs.search.brave.com/GN6_jZb6LGBie4dY-T9XadbW8mCbZiHuj14aEE6fHRQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEyLzg1LzQzLzI5/LzM2MF9GXzEyODU0/MzI5MzZfZktVUDJw/RkhpODdBbkI0cVUw/MDM2Q3NpektnSkwx/cDAuanBn",
    },
    {
      name: "Durga sharma",
      gender: "male",
      age: "26",
      img: "https://imgs.search.brave.com/-JuQycaJZbaoYFbND6PH04l1rfg9hlgAwzVKsnq_36M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzIwLzIyLzQ3/LzM2MF9GXzkyMDIy/NDc5M19UdlZFWndl/b1dFNE54eEJBZzQ3/M3RKSGg2RTBFS0U5/bi5qcGc",
    },
    {
      name: "komal singh",
      gender: "female",
      age: "20",
      img: "https://imgs.search.brave.com/l18celnG7KAIkoT49BeY9ykgT5EnM6gA1axkQi4gQqg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE4Lzc5LzkyLzU4/LzM2MF9GXzE4Nzk5/MjU4MTRfcXp3ODJB/T3QyYXF1MDBzZ3gz/WHV6dzJTZUptTjNx/WFAuanBn",
    },
     {
      name: "Naveen sharma",
      gender: "male",
      age: "30",
      img: "https://imgs.search.brave.com/GN6_jZb6LGBie4dY-T9XadbW8mCbZiHuj14aEE6fHRQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEyLzg1LzQzLzI5/LzM2MF9GXzEyODU0/MzI5MzZfZktVUDJw/RkhpODdBbkI0cVUw/MDM2Q3NpektnSkwx/cDAuanBn",
    },

     {
      name: "Shaily verma",
      gender: "female",
      age: "20",
      img: "https://imgs.search.brave.com/rTtpcxJ5NscYCzARqP8Y4JGdvSyDBVukyQQ8yPYxnBk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzcv/MTk4LzI1OC9zbWFs/bC9jdXRlLTNkLWFu/aW1hdGVkLWdpcmwt/Y2hhcmFjdGVyLWRh/bmNpbmctYW5kLXBv/c2luZy1vbi1ncmVl/bi1zY3JlZW4tYmFj/a2dyb3VuZC1mcmVl/LXZpZGVvLmpwZw",
    },
    {
      name: "komal singh",
      gender: "female",
      age: "20",
      img: "https://imgs.search.brave.com/l18celnG7KAIkoT49BeY9ykgT5EnM6gA1axkQi4gQqg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE4Lzc5LzkyLzU4/LzM2MF9GXzE4Nzk5/MjU4MTRfcXp3ODJB/T3QyYXF1MDBzZ3gz/WHV6dzJTZUptTjNx/WFAuanBn",
    },
  ];

  return (
    <div
      className="container"
      style={{
        background: Theme === "light" ? "white" : "black",
        height: "100vh",
      }}
    >
      {/* {
       Theme === 'light' ?(<h2>LIGHT</h2> ) : (<h2 style={{color:"white"}}>DARK</h2>)

  }

  {
       x>4 && y>4 ? (<h2>Hello</h2>) : (<h2>Not Hello</h2>)
  } */}

      {/* card  */}

      {person.map((person, index) => {
        return(
        
        <div className="card">

          <div className="imagecontainer">
            
          <img src={person.img} alt="person-image" />

          </div>

          <div className="card-information">
             <h2>Name : {person.name}</h2>
           <p>Gender : {person.gender}</p>
           <p>Age : {person.age}</p>

          </div>

        </div>
        )
      })}
    </div>
  );
}

export default App;
