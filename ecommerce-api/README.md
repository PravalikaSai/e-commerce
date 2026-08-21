# High-End E-Commerce API — Node.js + TypeScript

Enterprise-style Express backend using TypeScript and JSON files instead of a database.

## Setup
npm install
copy .env.example .env
npm run dev

Build:
npm run build
npm start

## API
Base URL: http://localhost:5000/api/v1

POST /auth/signup
POST /auth/login
GET  /auth/me
GET  /products?page=1&limit=10

Signup body:
{
  "username": "sreeram",
  "age": 29,
  "gender": "male",
  "email": "sreeram@example.com",
  "password": "Password@123"
}

Login body:
{
  "usernameOrEmail": "sreeram",
  "password": "Password@123"
}

Protected API header:
Authorization: Bearer <JWT>

CORS allows localhost:4200 and localhost:3000 by default and can be extended with CORS_ORIGINS.

JSON files are intentionally used for this learning/demo project. Replace the repository layer with MongoDB/PostgreSQL when production persistence is required.
