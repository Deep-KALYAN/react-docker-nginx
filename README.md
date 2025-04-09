# **Library Management System - MERN Stack CRUD Application**

This is a **MERN Stack** (MongoDB, Express.js, React, Node.js) application for managing a library. It allows users to perform CRUD (Create, Read, Update, Delete) operations on books through a RESTful API. The application is containerized using **Docker**.

---

### The application is **Dockerised** make it easy to use

From root directory --> C:\....\MyProjectFandBwithDocker>

### 1. run **chmod +x start-mern.sh** for execution permission:

### 2. run **./start-mern.sh**

### 3. open http://localhost:5173/ to use the App Library

---

## **Features**

- **Backend**: RESTful API built with Node.js, Express, and MongoDB.
- **Frontend**: User-friendly interface built with React and Bootstrap.
- **Containerization**: Separate Dockerfiles for backend and frontend using Docker.
- **API Endpoints**: Supports CRUD operations for books.
- **Validation**: Basic validation for required fields (title, author, ISBN).

---

## **Technologies Used**

- **Backend**: Node.js, Express, MongoDB, Mongoose, CORS.
- **Frontend**: React, React Router DOM, Axios, Bootstrap.
- **Containerization**: Docker (Dockerfiles for backend and frontend).

---

## **Prerequisites**

- **Node.js** (v16 or higher)
- **MongoDB** (running locally or remotely)
- **Docker** (or Podman) for containerization

---

## **Setup Instructions**

### **1. Clone the Repository**

```bash
git clone
cd MyProjectFandBwithDocker
```

## **Access the Application**

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:3000](http://localhost:3000)
- **Mongodb DataBase**: [mongodb://localhost:27017/library]

---

## **API Documentation**

### **Base URL**

### **Endpoints**

| **HTTP Method** | **Endpoint**     | **Description**                              |
| --------------- | ---------------- | -------------------------------------------- |
| `GET`           | `/api/books`     | Retrieve the list of all books.              |
| `POST`          | `/api/books`     | Add a new book.                              |
| `GET`           | `/api/books/:id` | Retrieve details of a specific book.         |
| `PUT`           | `/api/books/:id` | Update an existing book.                     |
| `DELETE`        | `/api/books/:id` | Delete a book.                               |
| `GET`           | `/status`        | Check server status and database connection. |

---

### **Request and Response Examples**

#### **1. Add a New Book**

- **Request**:

  ```http
  POST /api/books
  Content-Type: application/json

  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "ISBN": "9780743273565"
  }
  Error Handling
  400 Bad Request: Missing or invalid fields.
  ```

404 Not Found: Book not found.

500 Internal Server Error: Server-side error.
