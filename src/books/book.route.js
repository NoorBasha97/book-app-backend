const express=require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, updateBook, deleteBook } = require('./book.controller');
const verifyAdminToken = require('../middleware/veryfyAdminToken');

const router=express.Router();

//how to post a book
//post --- when submit something from frontend to db
//get --- when get something back from  db
//put/dispatch -- to edit ro update something
//delete --to delete something

router.post("/create-book",verifyAdminToken,postABook);  //that is add to make that only admin can add the book other wise all can add the book



//to get all book/data
router.get("/",getAllBooks);

//to get a single book
router.get("/:id",getSingleBook);

//to update a book
router.put("/edit/:id",verifyAdminToken,updateBook);

//to delete a book
router.delete("/:id",verifyAdminToken,deleteBook);

module.exports=router;