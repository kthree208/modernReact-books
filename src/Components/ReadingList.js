import BookShow from './BookShow' ;
import { useContext } from 'react';
import BooksContext from '../context/BooksContext';

function ReadingList({booklist, dltBook,edtBook}) {
    const {count, incrementValue} = useContext(BooksContext) ;

    const renderedBooks = booklist.map((book) => {
        return <BookShow key={book.id} book={book} ISBN={book.id} dltBook={dltBook} edtBook={edtBook}/>
    } )

    return (
        <>
            <h3>{count}</h3>
            <button onClick={incrementValue}>Add</button>
            <div className='book-list'>{renderedBooks}</div>
        </>
    )
};

export default ReadingList ;