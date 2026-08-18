# Admin Dashboard

A full-stack user management dashboard built with React and Node.js.

The repository contains separate frontend and backend applications. The backend exposes user-related API endpoints and runs on port `1198`, while the frontend is a React application built with Create React App.

## Features

Based on the current project implementation and included API requests, the project provides:

- User login endpoint
- Get all users
- Get a single user by email
- Add user
- Update user
- Delete user
- User image upload endpoint
- React-based administrative interface
- MongoDB data storage
- Frontend-to-backend API communication

## Tech Stack

### Frontend

- React 18
- React DOM
- Chakra UI
- Emotion
- Axios
- Framer Motion
- React Icons
- React Router DOM
- Sass
- UUID
- Create React App

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- JSON Web Token
- Multer
- UUID
- CORS
- dotenv
- Nodemon

## Repository Structure

```text
admin-dashboard-searching-sorting-pagination-profile-pictures/
├── backend/
├── frontend/
└── README.md
```

The backend contains the API implementation, while the frontend contains the React application.

## Backend Setup

Move into the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend in development mode:

```bash
npm run devStart
```

The backend uses:

```text
http://localhost:1198
```

## Backend Environment

The current local backend configuration uses:

```env
PORT=1198
MONGODB_URI=mongodb://localhost:27017
MONGODB_DBNAME=project1DB
```

For repository hygiene, use a local `.env` file and keep environment-specific values out of source control.

## Frontend Setup

Move into the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

A production frontend build can be created with:

```bash
npm run build
```

## API Endpoints

The repository includes the following requests in `backend/rest.http`.

### Test Endpoint

```http
GET http://localhost:1198/api/v1/a2rp
```

### Login

```http
POST http://localhost:1198/api/v1/login
Content-Type: application/json
```

Example:

```json
{
    "email": "ashish1@mail.com",
    "password": "12345678"
}
```

### Get All Users

```http
GET http://localhost:1198/api/v1/user-all
```

### Get One User

```http
POST http://localhost:1198/api/v1/user
Content-Type: application/json
```

Example:

```json
{
    "email": "ashish1@mail.com"
}
```

### Add User

```http
POST http://localhost:1198/api/v1/user-add
Content-Type: application/json
```

Example:

```json
{
    "name": "ashish ranjan",
    "email": "admin@mail.com",
    "password": "12345678",
    "password_confirm": "12345678",
    "role": "administrator"
}
```

### Update User

```http
PATCH http://localhost:1198/api/v1/user-update
Content-Type: application/json
```

Example:

```json
{
    "email": "ashish1@mail.com",
    "name": "user1 - updated",
    "role": "admin"
}
```

### Delete User

```http
DELETE http://localhost:1198/api/v1/user-delete/:email
```

Example:

```http
DELETE http://localhost:1198/api/v1/user-delete/ashish5@mail.com
```

### Add User Image

```http
POST http://localhost:1198/api/v1/user-add-image
```

The repository includes Multer as a backend dependency for file upload handling.

## Screenshots

<img width="960" alt="Admin Dashboard Screenshot 1" src="https://github.com/a2rp/admin-dashboard-searching-sorting-pagination-profile-pictures/assets/5670738/3bb6601c-4211-44ab-b83f-e221a668d467">

<img width="960" alt="Admin Dashboard Screenshot 2" src="https://github.com/a2rp/admin-dashboard-searching-sorting-pagination-profile-pictures/assets/5670738/9b1f6b31-8ee3-4d2a-b8ca-3429c14ade00">

<img width="960" alt="Admin Dashboard Screenshot 3" src="https://github.com/a2rp/admin-dashboard-searching-sorting-pagination-profile-pictures/assets/5670738/e626ad8d-5728-47a3-b699-18f61a182cd3">

<img width="960" alt="Admin Dashboard Screenshot 4" src="https://github.com/a2rp/admin-dashboard-searching-sorting-pagination-profile-pictures/assets/5670738/e01dab19-5a65-4c68-acfb-e746587242cb">

<img width="960" alt="Admin Dashboard Screenshot 5" src="https://github.com/a2rp/admin-dashboard-searching-sorting-pagination-profile-pictures/assets/5670738/16c218c9-3f50-450a-aeff-fef1646447cf">

## Documentation

Detailed technical documentation is available in `DOCUMENTATION.md`.

## Author

**Ashish Ranjan**

## Links

- Portfolio: https://www.ashishranjan.net
- GitHub: https://github.com/a2rp
- CodePen: https://codepen.io/ash1198
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: mailto:ash.ranjan09@gmail.com

## Support

- Support: https://a2rp-donation-page.netlify.app/
- Buy Me A Coffee: https://buymeacoffee.com/a2rp
- Patreon: https://patreon.com/a2rp

## License

This project is licensed under the MIT License.
