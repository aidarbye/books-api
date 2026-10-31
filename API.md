# API Documentation

Base URL: `http://localhost:3000`

## Book object

| Field      | Type    | Required | Description           |
|------------|---------|----------|-----------------------|
| id         | integer | auto     | Unique identifier     |
| title      | string  | yes      | Book title            |
| author     | string  | yes      | Book author           |
| year       | integer | no       | Publication year      |
| created_at | string  | auto     | Creation timestamp    |

## Endpoints

### GET /health
Checks that the server is running.

Response `200`:
```json
{ "status": "ok" }
```

### GET /api/books
Returns all books.

Response `200`:
```json
[
  { "id": 1, "title": "1984", "author": "George Orwell", "year": 1949, "created_at": "2026-10-31T04:50:36.119Z" }
]
```

### GET /api/books/:id
Returns one book by ID.

Responses:
- `200` book object
- `400` invalid id
- `404` `{ "error": "Book not found" }`

### POST /api/books
Creates a new book.

Request body:
```json
{ "title": "1984", "author": "George Orwell", "year": 1949 }
```

Responses:
- `201` created book object
- `400` `{ "error": "title and author are required" }`

### PUT /api/books/:id
Updates an existing book.

Request body:
```json
{ "title": "Animal Farm", "author": "George Orwell", "year": 1945 }
```

Responses:
- `200` updated book object
- `400` missing fields or invalid id
- `404` `{ "error": "Book not found" }`

### DELETE /api/books/:id
Deletes a book.

Responses:
- `204` deleted, no content
- `400` invalid id
- `404` `{ "error": "Book not found" }`
