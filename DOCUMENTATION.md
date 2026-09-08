# Admin Dashboard Documentation

## 1. Project Overview

Admin Dashboard is a full-stack user management application with separate frontend and backend applications.

The frontend is built with React, while the backend uses Node.js, Express.js, MongoDB, and Mongoose.

The repository includes API operations for:

- User login
- Retrieving all users
- Retrieving a user by email
- Adding users
- Updating users
- Deleting users
- Uploading a user image

The backend development server is configured to use port `1198`.

---

## 2. Repository Structure

The project is organized into two primary applications:

```text
admin-dashboard-searching-sorting-pagination-profile-pictures/
├── backend/
├── frontend/
├── DOCUMENTATION.md
├── LICENSE
└── README.md
```

### Backend

The backend contains the Node.js and Express.js API.

Its source includes directories for:

```text
backend/
├── api/
│   ├── controllers/
│   ├── helpers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── uploads/
├── .env
├── .gitignore
├── index.js
├── package.json
└── rest.http
```

### Frontend

The frontend contains the React application.

Its main structure includes:

```text
frontend/
├── public/
├── src/
├── package.json
└── README.md
```

The frontend `src` directory contains application components, hooks, pages, styles, and the main React application files.

---

## 3. Technology Stack

### Frontend Technologies

The frontend package configuration includes:

- React
- React DOM
- Chakra UI
- Emotion
- Axios
- Framer Motion
- React Icons
- React Router DOM
- Sass
- UUID
- React Scripts

### Backend Technologies

The backend package configuration includes:

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- JSON Web Token
- Multer
- UUID
- UUIDV4
- CORS
- dotenv
- Nodemon

---

## 4. Backend Configuration

The backend development server uses:

```text
http://localhost:1198
```

The current local environment configuration contains the following variables:

```env
PORT=1198
MONGODB_URI=mongodb://localhost:27017
MONGODB_DBNAME=project1DB
```

For repository maintenance, local environment values should be kept in `.env`, while a `.env.example` file can be used to document the required configuration.

---

## 5. Backend Scripts

The backend provides the following npm scripts.

### Start

```bash
npm start
```

Runs:

```text
node ./index.js
```

### Development

```bash
npm run devStart
```

Runs:

```text
nodemon ./index.js
```

---

## 6. Frontend Scripts

The frontend is based on Create React App.

### Development Server

```bash
npm start
```

Starts the frontend application in development mode.

### Production Build

```bash
npm run build
```

Creates a production build of the frontend.

---

## 7. Backend Installation

Move into the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Configure the required environment variables in `.env`.

Start the backend development server:

```bash
npm run devStart
```

The backend is configured to use:

```text
http://localhost:1198
```

---

## 8. Frontend Installation

Move into the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development application:

```bash
npm start
```

---

# 9. API Reference

The following API requests are included in the repository's `backend/rest.http` file.

Base URL:

```text
http://localhost:1198
```

API prefix:

```text
/api/v1
```

---

## 9.1 API Information

### Request

```http
GET /api/v1/info
```

Full request:

```http
GET http://localhost:1198/api/v1/info
```

---

## 9.2 Login

### Request

```http
POST /api/v1/login
Content-Type: application/json
```

### Example Body

```json
{
    "email": "ashish1@mail.com",
    "password": "12345678"
}
```

Full request:

```http
POST http://localhost:1198/api/v1/login
```

---

## 9.3 Get All Users

### Request

```http
GET /api/v1/user-all
```

Full request:

```http
GET http://localhost:1198/api/v1/user-all
```

---

## 9.4 Get User

The included API request retrieves a user using an email address supplied in the request body.

### Request

```http
POST /api/v1/user
Content-Type: application/json
```

### Example Body

```json
{
    "email": "ashish1@mail.com"
}
```

Full request:

```http
POST http://localhost:1198/api/v1/user
```

---

## 9.5 Add User

### Request

```http
POST /api/v1/user-add
Content-Type: application/json
```

### Example Body

```json
{
    "name": "ashish ranjan",
    "email": "admin@mail.com",
    "password": "12345678",
    "password_confirm": "12345678",
    "role": "administrator"
}
```

Full request:

```http
POST http://localhost:1198/api/v1/user-add
```

---

## 9.6 Update User

### Request

```http
PATCH /api/v1/user-update
Content-Type: application/json
```

### Example Body

```json
{
    "email": "ashish1@mail.com",
    "name": "user1 - updated",
    "role": "admin"
}
```

Full request:

```http
PATCH http://localhost:1198/api/v1/user-update
```

---

## 9.7 Delete User

The delete endpoint uses the user's email address as a route parameter.

### Request

```http
DELETE /api/v1/user-delete/:email
```

### Example

```http
DELETE http://localhost:1198/api/v1/user-delete/ashish5@mail.com
```

---

## 9.8 Add User Image

The repository includes an endpoint for adding a user image.

### Request

```http
POST /api/v1/user-add-image
```

Full request:

```http
POST http://localhost:1198/api/v1/user-add-image
```

Multer is included in the backend dependencies for file upload handling.

---

# 10. API Summary

| Method | Endpoint                     | Purpose              |
| ------ | ---------------------------- | -------------------- |
| GET    | `/api/v1/info`               | API information      |
| POST   | `/api/v1/login`              | User login           |
| GET    | `/api/v1/user-all`           | Get all users        |
| POST   | `/api/v1/user`               | Get user using email |
| POST   | `/api/v1/user-add`           | Add user             |
| PATCH  | `/api/v1/user-update`        | Update user          |
| DELETE | `/api/v1/user-delete/:email` | Delete user          |
| POST   | `/api/v1/user-add-image`     | Add user image       |

---

## 11. Database

The backend uses MongoDB with Mongoose.

The current local configuration specifies:

```env
MONGODB_URI=mongodb://localhost:27017
MONGODB_DBNAME=project1DB
```

This means the repository is configured to work with a locally running MongoDB instance using the database name `project1DB`.

---

## 12. User Operations

Based on the API requests included with the repository, the backend supports the following user-related operations:

```text
Login
  |
  +-- Get All Users
  |
  +-- Get User
  |
  +-- Add User
  |
  +-- Update User
  |
  +-- Delete User
  |
  +-- Add User Image
```

These operations are exposed through the `/api/v1` API routes documented above.

---

## 13. Image Upload

The backend includes:

- A user image API endpoint
- Multer as a dependency
- An `uploads` directory in the backend API structure

The documented endpoint is:

```http
POST /api/v1/user-add-image
```

Refer to the existing implementation when integrating or modifying the upload request because this documentation does not assume undocumented multipart field names or upload constraints.

---

## 14. Authentication-Related Dependencies

The backend includes:

- `bcrypt`
- `jsonwebtoken`

The repository also exposes:

```http
POST /api/v1/login
```

These packages and the login endpoint are part of the existing backend.

Implementation-specific authentication behavior should be determined from the source code rather than assumed from the presence of these packages alone.

---

## 15. REST Request Examples

The backend contains:

```text
backend/rest.http
```

This file contains HTTP requests for the project's API endpoints.

It can be used with an editor or extension that supports `.http` request files.

The requests can also be reproduced in another REST API client when needed.

---

## 16. Local Development

A typical setup for the existing repository requires:

1. MongoDB available locally.
2. Backend dependencies installed.
3. Backend environment configuration available.
4. Backend server running.
5. Frontend dependencies installed.
6. Frontend development server running.

Backend:

```bash
cd backend
npm install
npm run devStart
```

Frontend:

```bash
cd frontend
npm install
npm start
```

---

## 17. Environment File

The project currently uses the following environment variable names:

```text
PORT
MONGODB_URI
MONGODB_DBNAME
```

A repository-safe example configuration is:

```env
PORT=1198
MONGODB_URI=mongodb://localhost:27017
MONGODB_DBNAME=project1DB
```

Environment files should not be used to store public copies of real production credentials or secrets.

---

## 18. Repository Maintenance

The project can be maintained without changing its original implementation by keeping its supporting repository files current.

Useful maintenance files include:

```text
README.md
DOCUMENTATION.md
LICENSE
backend/.env.example
backend/.gitignore
```

The application source can remain unchanged while these files provide clearer setup and project information.

---

## 19. Screenshots

Application screenshots are included in the main `README.md`.

The screenshots preserve a visual reference to the project's interface.

---

## 20. License

The project is licensed under the MIT License.

See the root `LICENSE` file for the complete license text.

---

## 21. Author

**Ashish Ranjan**

Full-Stack Web Developer

---

## 22. Links

- Portfolio: https://www.ashishranjan.net
- GitHub: https://github.com/a2rp
- CodePen: https://codepen.io/ash1198
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: mailto:ash.ranjan09@gmail.com

## 23. Support

- Support: https://a2rp-donation-page.netlify.app/
- Buy Me A Coffee: https://buymeacoffee.com/a2rp
- Patreon: https://patreon.com/a2rp
