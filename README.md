# MERN Authentication System

A complete authentication system built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **User Signup**: Create new accounts with username, email, and password
- **User Login**: Authenticate with email and password
- **User Logout**: Secure logout functionality
- **Password Hashing**: Passwords are hashed using bcryptjs before storage
- **JWT Authentication**: JSON Web Tokens for secure authentication
- **Protected Routes**: Dashboard accessible only to authenticated users
- **Responsive Design**: Modern, gradient-styled UI with smooth interactions

## Project Structure

```
assignment_naviotech/
├── backend/
│   ├── models/
│   │   └── User.js          # Mongoose User model with password hashing
│   ├── routes/
│   │   └── auth.js          # Authentication routes (signup, login, logout)
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   ├── .env                 # Environment variables
│   ├── package.json         # Backend dependencies
│   └── server.js           # Express server setup
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js    # Login component
│   │   │   ├── Signup.js   # Signup component
│   │   │   └── Dashboard.js # Protected dashboard component
│   │   ├── context/
│   │   │   └── AuthContext.js # Authentication context
│   │   ├── App.js          # Main app with routing
│   │   ├── index.js        # Entry point
│   │   └── index.css       # Global styles
│   ├── public/
│   │   └── index.html      # HTML template
│   └── package.json        # Frontend dependencies
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (installed and running locally)
- npm or yarn

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd assignment_naviotech
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Configure environment variables:

The `.env` file is already created with default values. Update if needed:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/auth-system
JWT_SECRET=your_jwt_secret_key_change_this_in_production
JWT_EXPIRE=7d
```

**Important**: Change the `JWT_SECRET` to a secure random string in production.

### 3. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

## Running the Application

### Start MongoDB

Make sure MongoDB is running on your system:

```bash
# On Windows (if using MongoDB as a service)
net start MongoDB

# Or if running manually
mongod
```

### Start the Backend

From the `backend` directory:

```bash
npm run dev
```

The backend server will start on `http://localhost:5000`

### Start the Frontend

From the `frontend` directory (in a new terminal):

```bash
npm start
```

The frontend will open in your browser at `http://localhost:3000`

## API Endpoints

### Authentication Routes

- `POST /api/auth/signup` - Register a new user
  - Body: `{ username, email, password }`
  - Returns: `{ message, token, user }`

- `POST /api/auth/login` - Login user
  - Body: `{ email, password }`
  - Returns: `{ message, token, user }`

- `POST /api/auth/logout` - Logout user (protected)
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ message }`

- `GET /api/auth/me` - Get current user (protected)
  - Headers: `Authorization: Bearer <token>`
  - Returns: User object

## Usage

1. **Sign Up**: Navigate to `/signup` and create a new account
2. **Login**: Use your credentials to login at `/login`
3. **Dashboard**: After successful login, you'll be redirected to the protected dashboard
4. **Logout**: Click the logout button in the dashboard to end your session

## Security Features

- **Password Hashing**: All passwords are hashed using bcryptjs with a salt rounds of 10
- **JWT Authentication**: Tokens are signed with a secret key and expire in 7 days
- **Protected Routes**: Backend middleware verifies JWT tokens before allowing access
- **Input Validation**: Basic validation on all user inputs
- **CORS Configured**: Cross-origin requests are properly configured

## Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT token generation and verification
- **dotenv** - Environment variable management
- **cors** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling with gradients and animations

## Development

### Backend Development

```bash
cd backend
npm run dev  # Uses nodemon for auto-restart
```

### Frontend Development

```bash
cd frontend
npm start
```

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running on your system
- Check the `MONGODB_URI` in `backend/.env`
- Verify MongoDB is listening on the default port (27017)

### Port Already in Use
- Change the `PORT` in `backend/.env`
- Or stop the process using the port

### Frontend Proxy Issues
- The frontend is configured to proxy requests to `http://localhost:5000`
- Ensure the backend is running on this port

## License

ISC
