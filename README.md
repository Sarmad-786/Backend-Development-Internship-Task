# Bookstore RESTful API

## Objective

This project is a RESTful API that lets users perform CRUD (Create, Read, Update, Delete) operations on a list of books in a bookstore. It is designed to help you understand real-world backend systems including APIs, databases, and routing logic.

---

## Concepts You Will Learn

- What a REST API is and how it works  
- How to use Node.js + Express to create APIs  
- How to store and retrieve data using MongoDB  
- How to connect code with databases using Mongoose  
- How to organize a backend project properly  
- How to use Postman to test APIs  
- How to use Git + GitHub for version control  

---

## Functional Requirements

The API supports the following operations:

| Action        | Endpoint        | Description                  |
|---------------|----------------|-----------------------------|
| Create a book | POST /books     | Add a new book              |
| Get all books | GET /books      | Fetch all books from DB     |
| Get a book    | GET /books/:id  | Fetch one book by its ID    |
| Update a book | PUT /books/:id  | Update a book’s details     |
| Delete a book | DELETE /books/:id | Remove a book from database |

### Book Model

Each book has the following properties:

- `title` (e.g., "The Alchemist")  
- `author` (e.g., "Paulo Coelho")  
- `price` (e.g., 15)  
- `isbn` (unique identifier)  
- `publishedDate` (in date format, e.g., "2026-02-15")  

---

## Project Structure
bookstore-api/
├── app.js
├── routes/
│ └── bookRoutes.js
├── controllers/
│ └── bookController.js
├── models/
│ └── Book.js
├── .env
├── package.json
└── README.md

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Sarmad-786/Backend-Development-Internship-Task.git

2. Navigate to the project folder:
cd Backend-Development-Internship-Task

3. Install dependencies:
npm install

4. Create a .env file in the root directory with your MongoDB connection string:
PORT=5000
MONGO_URI=mongodb+srv://admin:admin123@cluster0.rza1kbg.mongodb.net/bookstore?retryWrites=true&w=majority

5. Start the server:
node app.js
Server will run at: http://localhost:5000

## API Endpoints
Base URL
http://localhost:5000/api/books

## Create a Book
POST /api/books

Request Body (JSON):

{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 20,
  "isbn": "1234567890",
  "publishedDate": "2018-10-16"
}


Response:

{
  "_id": "63f9c5a9b8b9f0e1c5b9a9d2",
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 20,
  "isbn": "1234567890",
  "publishedDate": "2018-10-16T00:00:00.000Z"
}

## Get All Books
GET /api/books

Response:

[
  {
    "_id": "63f9c5a9b8b9f0e1c5b9a9d2",
    "title": "Atomic Habits",
    "author": "James Clear",
    "price": 20,
    "isbn": "1234567890",
    "publishedDate": "2018-10-16T00:00:00.000Z"
  }
]

## Get Book by ID
GET /api/books/:id

Response:

{
  "_id": "63f9c5a9b8b9f0e1c5b9a9d2",
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 20,
  "isbn": "1234567890",
  "publishedDate": "2018-10-16T00:00:00.000Z"
}

## Update Book

PUT /api/books/:id

Request Body (JSON):

{
  "price": 25
}


Response:

{
  "_id": "63f9c5a9b8b9f0e1c5b9a9d2",
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 25,
  "isbn": "1234567890",
  "publishedDate": "2018-10-16T00:00:00.000Z"
}

## Delete Book

DELETE /api/books/:id

Response:

{
  "msg": "Book deleted"
}

Bonus (Optional)

Input validation using express-validator

Pagination and search filter

Add a second model: User and associate it with books

## Author

Muhammad Sarmad Chughtai
GitHub: https://github.com/Sarmad-786

Postman Collection: https://muhammadsarmadchughtai098-7699862.postman.co/workspace/Muhammmad-Sarmad-Chughtai's-Wor~41eaa986-1365-43d0-88bd-b305b83c48bb/collection/undefined?action=share&creator=52397812
