import { useEffect, useState } from 'react';
import ReadingList from './Components/ReadingList';
import Form from './Components/Form';
import './index.css';
import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3005/books') ;
        setBooks(response.data) ;
    }

    useEffect( () => {
        fetchBooks() ;
    }, [])

    const handleCreateBook = async (title) => {
        // setBooks([...books, { id: Math.round(Math.random()*9999) , title }]) ;
        const response = await axios.post('http://localhost:3005/books', {
            title 
        })
        setBooks([...books, response.data]) ;
    }

    const deleteBook = async (bookID) => {
        const response = await axios.delete(`http://localhost:3005/books/${bookID}`)
        const updatedBooks = books.filter((book) => {
            return bookID !== book.id ;
        })
        setBooks(updatedBooks) ;
    } 
    const editBook = async (bookID, newTitle) => {
        const response = await axios.put(`http://localhost:3005/books/${bookID}`, {
            title : newTitle
        })
        const edittedBooks = books.map((book) => {
            if(book.id === bookID) return {...book, ...response.data } 
            return book;
        })
        setBooks(edittedBooks);
    }

    return (
        <>
            <h1 style={{'fontWeight': '800', 'fontSize' : '80px'}}>Reading List</h1>
            <Form onFormSubmit={handleCreateBook} />
            <ReadingList booklist={books} dltBook ={deleteBook} edtBook = {editBook}/>
        </>
    )
};

export default App;