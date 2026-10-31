# Books API

REST API for books on Node.js (Express) and PostgreSQL, running in Docker Compose.

## Run

```
cp .env.example .env
docker compose up --build
```

API: `http://localhost:3000`

## Endpoints

| Method | Endpoint       | Description    |
|--------|----------------|----------------|
| GET    | /api/books     | List books     |
| GET    | /api/books/:id | Get book by ID |
| POST   | /api/books     | Create book    |
| PUT    | /api/books/:id | Update book    |
| DELETE | /api/books/:id | Delete book    |

Details: [API.md](API.md)

## Postman

Import `postman/Books-API.postman_collection.json`.
