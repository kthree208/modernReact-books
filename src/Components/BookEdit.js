import { useState } from "react";

function BookEdit({book,bookEdit}) {

    const [title, setTitle] = useState(book.title) ;

    const handleInputChange = (event) => {
        setTitle(event.target.value) ;
    }
    const handleBookSave = (event) => {
        event.preventDefault() ;
        bookEdit(book.id, title) ;
    }
    return (
        <>
            <form className="book-edit" onSubmit={handleBookSave}>
                <label>Title</label>
                <input className="input" onChange={handleInputChange} value={title}/>
                <button className="button is-primary" >Save</button>
            </form>
        </>
    )
};

export default BookEdit ;