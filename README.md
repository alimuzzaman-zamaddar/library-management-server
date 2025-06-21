Library Management API
Table of Contents
Overview

Features

Technologies Used

Installation & Setup

How the Project Works

API Documentation

Live Version

Contributing

License

Overview
The Library Management API is a RESTful API built with Express.js, TypeScript, and MongoDB using Mongoose for data modeling. The API allows for managing a library's book collection and borrowing system, with additional functionality for summarizing borrowed books.

This API provides operations to create, read, update, delete, and borrow books. It also includes features such as filtering, sorting, and paginating the books list, along with an aggregation pipeline for generating a summary of borrowed books.

Features
Book Management: Create, update, delete, and view books with details like title, author, genre, ISBN, and copies available.

Borrowing System: Borrow books by specifying the book ID, quantity, and due date. The system automatically updates book availability.

Borrowed Books Summary: Aggregates borrowed books and provides a summary of the total quantity borrowed for each book.

Filtering & Sorting: Filter books by genre, sort by fields like title or creation date, and paginate results for large datasets.

Error Handling: Full error handling with appropriate HTTP status codes for different error types (validation errors, database errors, etc.).

Technologies Used
Node.js: JavaScript runtime used for building scalable applications.

Express.js: Web framework for building RESTful APIs.

TypeScript: A typed superset of JavaScript that compiles to plain JavaScript for better development experience.

MongoDB: NoSQL database for storing book and borrow data.

Mongoose: ODM (Object Data Modeling) library to interact with MongoDB.

Postman: Used for API testing and exploring endpoints.

Installation & Setup
1. Clone the Repository
Start by cloning the repository to your local machine:

bash
Copy
Edit
git clone https://github.com/your-username/library-management-api.git
cd library-management-api
2. Install Dependencies
Make sure Node.js is installed on your machine. Then, run the following command to install the project dependencies:

bash
Copy
Edit
npm install
3. Configure MongoDB
Create a .env file in the root directory and add your MongoDB connection string. If you're using MongoDB Atlas, get the connection string from the Clusters section on the MongoDB Atlas dashboard.

bash
Copy
Edit
MONGO_URI=mongodb+srv://your-mongo-uri
4. Run the Application
Once the dependencies are installed and the environment is set up, you can run the application in development mode:

bash
Copy
Edit
npm run dev
The server will start running on http://localhost:5000.

How the Project Works
Overview
The Library Management API enables efficient management of books and borrowing operations in a library. It performs CRUD operations on books and tracks borrow events. The system ensures that books are only borrowed if enough copies are available, and it updates book availability automatically when a book is borrowed.

Key Features
Book Management: Manage the library's collection of books. You can add, update, and delete books, and retrieve information on any specific book.

Borrowing System: Borrow books with automatic checks for availability. When a book is borrowed, the system decreases the available copies and updates the book's availability status.

Borrowed Books Summary: The API uses MongoDB's aggregation pipeline to generate a summary of borrowed books, including the total quantity borrowed per book.

Filtering & Sorting: Allows users to filter books by genre and sort them based on fields like title, creation date, and more. Pagination helps in managing large datasets.

Database Structure
Books Collection: Stores book details such as title, author, genre, ISBN, and available copies.

Borrows Collection: Keeps track of borrow events, including book ID, quantity borrowed, and due date.

API Documentation
Create Book (POST /api/books)
Create a new book in the library.

Request Body:

json
Copy
Edit
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "copies": 5,
  "available": true
}
Response:

json
Copy
Edit
{
  "success": true,
  "message": "Book created successfully",
  "data": { ... }
}
Get All Books (GET /api/books)
Retrieve all books, with support for filtering, sorting, and pagination.

Query Parameters:

filter: Filter by genre (e.g., filter=SCIENCE)

sortBy: Sort by a field (e.g., sortBy=createdAt)

sort: Sort order (asc or desc)

limit: Number of books to fetch (default 10)

page: Page number (default 1)

Get Book by ID (GET /api/books/:bookId)
Retrieve a specific book by its ID.

Update Book (PUT /api/books/:bookId)
Update book details (e.g., copies).

Request:

json
Copy
Edit
{
  "copies": 50
}
Delete Book (DELETE /api/books/:bookId)
Delete a specific book by its ID.

Borrow Book (POST /api/borrow)
Allow a user to borrow a book by specifying the book ID, quantity, and due date.

Request Body:

json
Copy
Edit
{
  "book": "bookId",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
Borrowed Books Summary (GET /api/borrow)
Retrieve a summary of borrowed books, including total quantity borrowed per book.

Live Version
You can explore the live version of this API hosted on Vercel:

Live API Link
