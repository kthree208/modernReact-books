import BookEdit from "./BookEdit";
import { useState } from "react";

function BookShow({ book, ISBN, dltBook, edtBook }) {
    const [bookEditScreen, setbookEditScreen] = useState(false) ;

    const handleBookDelete = () => {
        dltBook(book.id);
    }
    const handleBookEditScreen = () => {
        setbookEditScreen(!bookEditScreen) ;
    }
    const bookEdit= (id,title) => {
        edtBook(id, title) ;
        setbookEditScreen(false) ;
    }

    let content = <><h1>{ISBN}</h1><h3 style={{'fontWeight': '600'}}>{book.title}</h3> </>
    if(bookEditScreen) content = <BookEdit book={book} bookEdit = {bookEdit}/> ;
    
    return (
        <>
            <div className="book-show">
                <img alt ="idk" src={`https://picsum.photos/seed/${book.id}/250/250`} />
                {content}
                <div className="actions">
                    <button className='edit' onClick={handleBookEditScreen}>edit</button>
                    <button className="delete" onClick={handleBookDelete}>delete</button>
                </div>
            </div>
        </>
    )
};

export default BookShow;