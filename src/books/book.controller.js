const Book = require("./book.model");

//to post a book
const postABook= async(req,res)=>{
    // console.log(req.body);
    try {
        const newBook=await Book({...req.body});
        await newBook.save();
        res.status(200).send({message:"Book posted successfully",book:newBook});
    } catch (error) {
        console.error("Error with posting a book",error);
        res.status(500).send({message:"Failed to post a book"});
    } 
}

//to get all the books
const getAllBooks=async(req,res)=>{
        try {
            const books= await Book.find().sort({createdAt:-1}); //this find method will find all the books and 
                                                                //recently added books at the top
            res.status(200).send(books);
        } catch (error) {
            console.error("Error with fetching books",error);
            res.status(500).send({message:"Failed to fetch books"});
        }
}


//to get a single book
const getSingleBook= async(req,res)=>{
    try {
        const {id}=req.params;
        const book=await Book.findById(id);// this will find the book with that given id
        if(!book)
        {
            res.status(404).send({message:"Book is not found"});   
        }
        res.status(200).send(book);
    } catch (error) {
        console.error("Error with fetching a book",error);
        res.status(500).send({message:"Failed to fetch book"});
    }
}


//to update a book
const updateBook=async(req,res)=>{
    try {
        const {id}=req.params;
        const updatedBook=await Book.findByIdAndUpdate(id,req.body,{new:true});
        if(!updateBook)
        {
            res.status(404).send({message:"Book is not found"}); 
        }
        res.status(200).send({message:"Book updated successfully",book : updateBook});
    } catch (error) {
        console.error("Error with updating a book",error);
        res.status(500).send({message:"Failed to update a book"});
            
    }
}

//to delete a book
const deleteBook=async (req,res) => {
    try {
        const {id}=req.params;
        const deletedBook=await Book.findByIdAndDelete(id);
        if(!deletedBook)
        {
            res.status(404).send({message:"Book is not found to delete"});
        }
        res.status(200).send({message:"Book deleted successfully", book: deletedBook});
    } catch (error) {
        console.error("Error with deleting a book",error);
        res.status(500).send({message:"Failed to delete a book"});
    }
}

module.exports={postABook,getAllBooks,getSingleBook,updateBook,deleteBook};