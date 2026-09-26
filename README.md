# Student Management REST API - Assignment 2

## Web Dev III (Node.js & Express Backend)
Unit-2 | Student Management REST API

This project implements the required Student Management REST API using Node.js and Express.js.

## Requirements Covered

- Express server setup
- REST APIs
- CRUD operations
- Custom logger middleware
- Modular routing
- Error handling
- Postman testing
- Array/JSON data only
- No MongoDB/MySQL
- No Mongoose

## Project Structure

Student-Management-REST-API-Assignment-2/
├── app.js
├── package.json
├── README.md
├── routes/
│   └── studentRoutes.js
├── middleware/
│   └── logger.js
└── data/
    └── students.js

## Installation

Open the project folder in VS Code and run:

```bash
npm install
```

## Run the server

```bash
npm start
```

or:

```bash
node app.js
```

Server:

http://localhost:3000

## APIs

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /students | Get all students |
| GET | /students/:id | Get student by ID |
| POST | /students | Add a student |
| PUT | /students/:id | Update a student |
| DELETE | /students/:id | Delete a student |

## Postman Testing

### 1. GET all students

GET:
http://localhost:3000/students

Expected status: 200

### 2. GET student by ID

GET:
http://localhost:3000/students/1

Expected status: 200

### 3. POST a new student

POST:
http://localhost:3000/students

Body -> raw -> JSON:

```json
{
  "name": "Neha",
  "course": "BTech"
}
```

Expected status: 201

### 4. PUT/update a student

PUT:
http://localhost:3000/students/4

Body -> raw -> JSON:

```json
{
  "name": "Neha Sharma",
  "course": "CSE"
}
```

Expected status: 200

### 5. DELETE a student

DELETE:
http://localhost:3000/students/4

Expected status: 200

## Error Testing

### Invalid ID

GET:
http://localhost:3000/students/abc

Expected status: 400

### Student not found

GET:
http://localhost:3000/students/999

Expected status: 404

### Missing required data

POST:
http://localhost:3000/students

Body:

```json
{
  "name": "Rahul"
}
```

Expected status: 400

## Important Note

The student records are stored in an in-memory JavaScript array. Therefore, changes made through POST, PUT, and DELETE are lost when the server is restarted. This is expected because this assignment does not use a database.

