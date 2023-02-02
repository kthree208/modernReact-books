import { useState } from "react";
function Form({onFormSubmit}) {

    const [bookTitle, setbookTitle] = useState('') ;
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(bookTitle);
        setbookTitle('') ;
    }

    const handleInputChange = (event) => {
        setbookTitle(event.target.value) ;
    }

    return (
        <>  
        <div className="book-create">
            <form onSubmit={handleFormSubmit}>
                <h3>Add a bookTitle!</h3>
                {/* <label>bookTitle to Read</label> */}
                <input className='input' placeholder="bookTitle to add" onChange = {handleInputChange} value={bookTitle} />
                <button className='button'>Add bookTitle</button>
            </form>
            </div>
        </>
    )
};

export default Form ;