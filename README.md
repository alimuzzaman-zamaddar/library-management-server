
# Library Management API

A RESTful API for managing a library’s book collection and borrowing system, built with **Express.js**, **TypeScript**, and **MongoDB** **Mongoose**.


## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [How the Project Works](#how-the-project-works)
- [API Documentation](#api-documentation)
- [Live Version](#live-version)




## Overview

The **Library Management API** enables efficient management of books and borrowing operations in a library. It supports CRUD operations on books, tracks borrow events, and provides features like filtering, sorting, and pagination.



## Features

- **Book Management**: Create, update, delete, and view books with details (title, author, genre, ISBN, copies available).
- **Borrowing System**: Borrow books by specifying book ID, quantity, and due date. System automatically updates book availability.
- **Borrowed Books Summary**: Aggregates borrowed books and summarizes total quantity borrowed per book.
- **Filtering & Sorting**: Filter books by genre, sort by title or creation date, and paginate results.
- **Error Handling**: Comprehensive error handling with appropriate HTTP status codes.


## Technologies Used

- **Node.js**: JavaScript runtime for scalable applications.
- **Express.js**: Web framework for RESTful APIs.
- **TypeScript**: Typed superset of JavaScript for better development experience.
- **MongoDB**: NoSQL database for storing book and borrow data.
- **Mongoose**: ODM library to interact with MongoDB.
- **Postman**: API testing and exploration.



## Installation & Setup

1. **Clone the Repository**
   ```bash
   https://github.com/alimuzzaman-zamaddar/library-management-server.git
   cd library-management-server
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure MongoDB**

   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGO_URI=mongodb+srv://your-mongo-uri
   ```

4. **Run the Application**
   ```bash
   npm run dev
   ```
   The server will start at [http://localhost:5000](http://localhost:5000).



## How the Project Works

- **Book Management**: Add, update, delete, and retrieve books. Each book has details like title, author, genre, ISBN, and available copies.
- **Borrowing System**: Borrow books after checking availability. The system adjusts available copies and updates status.
- **Borrowed Books Summary**: Uses MongoDB aggregation to generate a summary of borrowed books and total quantities.
- **Filtering & Sorting**: Filter by genre, sort by various fields, and paginate results for large datasets.

### Database Structure

- **Books Collection**: Stores book details (title, author, genre, ISBN, available copies).
- **Borrows Collection**: Tracks borrow events (book ID, quantity, due date).



## API Documentation

### Create Book

- **Endpoint:** `POST /api/books`
- **Body:**
  ```json
  {
    "title": "The Theory of Everything",
    "author": "Stephen Hawking",
    "genre": "SCIENCE",
    "isbn": "9780553380163",
    "copies": 5,
    "available": true
  }


### Get All Books

- **Endpoint:** `GET /api/books`
- **Query Parameters:**
  - `filter` (genre)
  - `sortBy` (e.g., title, createdAt)
  - `sort` (asc or desc)
  - `limit` (default 10)
  - `page` (default 1)

### Get Book by ID

- **Endpoint:** `GET /api/books/:bookId`

### Update Book

- **Endpoint:** `PUT /api/books/:bookId`
- **Body:**
  ```json
  {
    "copies": 50
  }


### Delete Book

- **Endpoint:** `DELETE /api/books/:bookId`

### Borrow Book

- **Endpoint:** `POST /api/borrow`
- **Body:**
  ```json
  {
    "book": "bookId",
    "quantity": 2,
    "dueDate": "2025-07-18T00:00:00.000Z"
  }


### Borrowed Books Summary

- **Endpoint:** `GET /api/borrow`
- Returns a summary of total quantity borrowed per book.



## Live Version

Explore the live API (hosted on Vercel):

https://library-management-iota-five.vercel.app/api







