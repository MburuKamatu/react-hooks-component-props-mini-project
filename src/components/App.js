import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

function Header(prop){
  return(
    <header>
    <h1>{prop.name}</h1>
    </header>
  )
}

function About({image="https://via.placeholder.com/215 (Links to an external site.)", about}){
  return(
    <aside>
      <img src={image} alt="blog logo"></img>
      <p>{about}</p>
    </aside>
  )
}
/*function ArticleList(prop){
  const colorElements = colors.map((color) => {   
    return (
      <main>
         <li key={article} style={{ color: color }}>
          {color}
        </li>
      </main>
    );
  });*/

function Article({title,date="January 1, 1970",preview}){
  return(
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )
}
  
export default App;
