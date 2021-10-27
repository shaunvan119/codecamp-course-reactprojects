import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css'

//Set up Vars object 
const books = [

{
  id:1,
  img: "https://images-na.ssl-images-amazon.com/images/I/91YZYvWIhgL._AC_UL200_SR200,200_.jpg",
  title: "Apples Never Fall",
  author: "Liane Moriarty",
},

{
  id:2,
  img: "https://images-na.ssl-images-amazon.com/images/I/51yJZkx5sfL._AC_UL200_SR200,200_.jpg",
  title: "Costa's World",
  author: "Costa Georgiadis",
},

{
  id:3,
  img: "https://images-na.ssl-images-amazon.com/images/I/812ufIGbAmL._AC_UL200_SR200,200_.jpg",
  title: "The Storyteller: Tales of Life and Music",
  author: "Dave Grohl",
},

];


function BookList() {
  return ( 
  <section className="booklist">
  {books.map((book)=> {
    return <Book key={book.id} {...book}></Book>;
  })}
  </section>
   );  
  }

const Book = ({img, title, author}) => {
  
  // attribute and eventhandler
  // onclick and onMouseOver
  const clickHandler = () => {
alert("Hello World")
  };
  return (
  <article className="book">
    <img src= {img}alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type ="button" onClick={clickHandler}>
      example
    </button>
   

  </article>
    
   ); 
  
};




ReactDom.render(<BookList/>, document.getElementById('root'));