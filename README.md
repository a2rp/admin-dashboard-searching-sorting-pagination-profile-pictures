# Admin Dashboard

A responsive full-stack user management dashboard built with React and Node.js. Administrators can add, edit, delete, search, sort, paginate, and update profile images for users.

## Features

- Role-aware login and user actions
- Search, sorting, and pagination
- Add, edit, delete, and profile image upload flows
- Responsive dashboard UI with reusable React components
- Express API with MongoDB, validation, security headers, and rate limiting

## Tech stack

Frontend: React, Chakra UI, Sass, Axios, React Router, React Icons

Backend: Node.js, Express, MongoDB, Mongoose, Multer, JWT, CORS

## Run locally

Start the API:

```bash
cd backend
npm install
npm run devStart
```

Start the frontend in another terminal:

```bash
cd frontend
npm install
npm start
```

The API runs on `http://localhost:1198`. Configure `MONGODB_URI`, `MONGODB_DBNAME`, and `CORS_ORIGIN` in `backend/.env` when needed.

## Deployment

Frontend live URL: [GitHub Pages](https://a2rp.github.io/admin-dashboard-searching-sorting-pagination-profile-pictures/)

```bash
cd frontend
npm run build
npm run deploy
```

## Links

- Portfolio: [ashishranjan.net](https://www.ashishranjan.net)
- GitHub: [github.com/a2rp](https://github.com/a2rp)
- CodePen: [codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [facebook.com/theash.ashish](https://www.facebook.com/theash.ashish/)
- YouTube: [youtube.com/@ashishranjan-ashz](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- [Support](https://a2rp-donation-page.netlify.app/)
- [Buy Me a Coffee](https://buymeacoffee.com/a2rp)
- [Patreon](https://patreon.com/a2rp)

## License

MIT License
