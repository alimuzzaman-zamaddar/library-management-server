Library Management API
Overview
A simple Library Management System built with Express.js, TypeScript, and MongoDB. This API allows for book management (create, update, delete), borrowing functionality, and a summary of borrowed books.

Features
Book Management: Create, update, delete, and view books.

Borrowing System: Borrow books with availability checks.

Book Summary: View a summary of borrowed books.

Filtering & Sorting: Filter books by genre, sort by fields, and paginate results.

Technologies
Node.js | Express.js | TypeScript | MongoDB | Mongoose

Installation
1. Clone the repository:
bash
Copy
Edit
git clone https://github.com/your-username/library-management-api.git
cd library-management-api
2. Install dependencies:
bash
Copy
Edit
npm install
3. Configure environment:
Create a .env file and add your MongoDB connection string.

bash
Copy
Edit
MONGO_URI=mongodb+srv://your-mongo-uri
4. Run the application:
bash
Copy
Edit
npm run dev
The server will run on http://localhost:5000.

API Endpoints
Create Book (POST /api/books)
Create a new book in the library.

Request:

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
Retrieve a list of all books, with support for filtering, sorting, and pagination.

Query Params:

filter: Genre filter (e.g., filter=SCIENCE)

sortBy: Field to sort by (e.g., sortBy=createdAt)

sort: Sort order (asc or desc)

limit: Number of books to fetch (default 10)

page: Page number (default 1)

Get Book by ID (GET /api/books/:bookId)
Fetch a specific book by its ID.

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
Borrow a book by specifying book ID, quantity, and due date.

Request:

json
Copy
Edit
{
  "book": "bookId",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
Borrowed Books Summary (GET /api/borrow)
Retrieve a summary of borrowed books with the total quantity borrowed per book.
