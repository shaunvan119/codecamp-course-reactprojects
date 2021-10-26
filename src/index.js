import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css'

//Set up Vars object 
const books = [

{
  img: "https://images-na.ssl-images-amazon.com/images/I/91YZYvWIhgL._AC_UL200_SR200,200_.jpg",
  title: "Apples Never Fall",
  author: "Liane Moriarty",
},

{
  img: "https://images-na.ssl-images-amazon.com/images/I/51yJZkx5sfL._AC_UL200_SR200,200_.jpg",
  title: "Costa's World",
  author: "Costa Georgiadis",
},

{
  img: "https://images-na.ssl-images-amazon.com/images/I/812ufIGbAmL._AC_UL200_SR200,200_.jpg",
  title: "The Storyteller: Tales of Life and Music",
  author: "Dave Grohl",
},

];


function BookList() {
  return ( 
  <section className="booklist">
  {books.map((book)=> {
    
    return (
      <Book book={book}></Book>
    );
  })}
  </section>
   );  
  }

const Book = (props) => {
  const { img, title, author } = props.book;
  
  return (
  <article className="book">
    <img src= {img}alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
   

  </article>
    
   ); 
  
};




ReactDom.render(<BookList/>, document.getElementById('root'));