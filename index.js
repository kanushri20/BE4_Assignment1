const {initializeDatabase} = require("./db/db.connect")
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config()
const Book = require("./models/books.models")
app.use(cors());
app.use(express.json());
//3
async function readAllBooks(){
    try {
        const allBooks = await Book.find();
        return allBooks
    } catch (error) {
        throw error
    }
}
app.get("/books", async(req, res) => {
    try {
        const books = await readAllBooks();
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({error: "Failed to fetch the Books."})
    }
})
//1 2
async function createBook(newBook){
    try {
        const book = new Book(newBook)
        const savedBook = await book.save()
        return savedBook
    } catch (error) {
        throw error
    }
}
app.post("/books", async(req, res) => {
    try {
        const nBook = await createBook(req.body)
        if(nBook){
            res.status(200).json({message: "New book added successfully", book: nBook})
        }
        else{
            res.status(404).json({error: "Book not found"})
        }
    } catch (error) {
        // res.status(500).json({error: "Failed to fetch the Books."})
        console.log(error)
    }
})
// 4
async function readBooksByTitle(bookTitle){
    try {
        const book = await Book.find({title: bookTitle})
        return book
    } catch (error) {
        throw error
    }
}

app.get("/books/:title", async(req, res) => {
    try {
        const book = await readBooksByTitle(req.params.title)
        if(book){
        res.status(200).json(book)
        }
        else{
        res.status(404).json({error: "Book not found."})

        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch books."})
    }
})
//5
async function readBooksByAuthor(bookAuthor){
    try {
        const book = await Book.find({author: bookAuthor})
        return book
    } catch (error) {
        throw error
    }
}

app.get("/books/author/:author", async(req, res) => {
    try {
        const book = await readBooksByAuthor(req.params.author)
        if(book){
        res.status(200).json(book)
        }
        else{
        res.status(404).json({error: "Book not found."})

        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch books."})
    }
})
//6
async function readBooksByGenre(bgenre){
    try {
        const books = await Book.find({ genre: bgenre});
        return books
    } catch (error) {
        throw error
    }
}

app.get("/books/genre/:genre", async(req, res) => {
    try {
        const book = await readBooksByGenre(req.params.genre)
        if(book){
        res.status(200).json(book)
        }
        else{
        res.status(404).json({error: "Book not found."})

        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch books."})
    }
})
//7

async function readBooksByYear(byear){
    try {
        const books = await Book.find({ publishedYear: byear});
        return books
    } catch (error) {
        throw error
    }
}

app.get("/books/year/:year", async(req, res) => {
    try {
        const book = await readBooksByYear(req.params.year)
        if(book){
        res.status(200).json(book)
        }
        else{
        res.status(404).json({error: "Book not found."})

        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch books."})
    }
})

//8 
async function updateBookByName(bName, bRating){
    try {
        const books = await Book.findOneAndUpdate({title: bName }, bRating, {new: true});
        return books
    } catch (error) {
        throw error
    }
}

app.post("/books/name/:name", async(req, res) => {
    try {
        const book = await updateBookByName(req.params.name, req.body)
        if(book){
        res.status(200).json(book)
        }
        else{
        res.status(404).json({error: "Book not found."})
        }
    } catch (error) {
        // res.status(500).json({error: "Failed to fetch books."})
        console.log(error)
    }
})

// 10

async function deleteBooksById(deleteId) {
    try {
        const book = await Book.findByIdAndDelete(deleteId)
        return book
    } catch (error) {
        throw error
    }
}

app.delete("/books/deleting/:id", async(req, res) => {
    try {
        const book = await deleteBooksById(req.params.id)
        if(book){
            res.status(200).json({message: "Book deleted successfully."})
        }
        else{
            res.status(404).json({error: "Book not found."})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch books."})
    }
})


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server running on port: ", PORT)
})
// const fs = require("fs")

// const jsonData = fs.readFileSync('books.json', "utf-8")
// const booksData = JSON.parse(jsonData) 
// function seedData() {
//     try{
//         for(const bookData of booksData){
//             const newBook = new Book({
//                 title: bookData.title,
//                 author: bookData.author,
//                 publishedYear: bookData.publishedYear,
//                 genre: bookData.genre,
//                 language: bookData.language,
//                 country: bookData.country,
//                 rating:  bookData.rating,
//                 summary: bookData.summary,
//                 coverImageUrl: bookData.coverImageUrl
//             })
//             newBook.save()
//         }
//     } catch (error) {
//         console.log("Error in Seeding Data. ", error)
//     }
// }
// seedData()



initializeDatabase()