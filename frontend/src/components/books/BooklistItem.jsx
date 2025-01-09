import "../../styles/books/BooklistItem.scss";
import { useContext } from "react";
import DispatchContext from "../../context/DispatchContext";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const BooklistItem = (props) => {
  const { booklistItem } = props;


  return (
    <Link className="booklist-item__item" to={{pathname:`/books/${booklistItem.id}`}} state={{ bookId: booklistItem.id }}>
      <img className="booklist-item__book-cover" src={booklistItem.cover_url} alt={`Cover picture of ${booklistItem.title}`} />
      <div className="booklist-item__book-info">
        <p className="booklist-item__book-title"><strong>{booklistItem.title}</strong></p>
        <p className="booklist-item__book-author">By: <strong>{booklistItem.author}</strong></p>
        <p className="booklist-item__book-subject">Subject: <strong>{booklistItem.subject}</strong></p>
      </div>
    </Link>
  );
}

export default BooklistItem;