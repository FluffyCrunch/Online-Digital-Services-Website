# IITIAN CRAFT - Official Website

> **First Draft** - The official website for IITIAN CRAFT, a digital services agency offering comprehensive web and mobile solutions.

## 🚀 Overview

IITIAN CRAFT is a modern, full-stack web application showcasing digital services including web development, mobile app development, UI/UX design, content writing, and more. The platform features a responsive design with dark mode support, user authentication, admin dashboard, and integrated contact/demo booking systems.

## 🛠️ Technologies Used

### Frontend

- **React 18.0.0** - Modern UI library for building interactive user interfaces
- **React Router DOM 7.6.3** - Client-side routing and navigation
- **React Bootstrap 2.10.10** - Bootstrap components built for React
- **Bootstrap 5.3.7** - CSS framework for responsive design
- **Framer Motion 12.19.2** - Animation library for React
- **React Icons 5.5.0** - Popular icon library
- **React Toastify 11.0.5** - Toast notifications
- **Lottie React 2.4.1** - Lightweight animations using Lottie files
- **@lottiefiles/react-lottie-player 3.6.0** - Lottie animation player component
- **React Scripts 5.0.1** - Build tooling for Create React App
- **Web Vitals 2.1.4** - Web performance metrics

### Backend

- **Node.js** - JavaScript runtime environment
- **Express 4.18.2** - Web application framework for Node.js
- **MongoDB** - NoSQL database (via Mongoose)
- **PostgreSQL** - Relational database (via pg)
- **Mongoose 8.0.3** - MongoDB object modeling for Node.js
- **pg 8.16.3** - PostgreSQL client for Node.js

### Authentication & Security

- **JSON Web Token (JWT) 9.0.2** - Secure token-based authentication
- **bcrypt 6.0.0 / bcryptjs 2.4.3** - Password hashing
- **Helmet 7.1.0** - Security headers middleware
- **Express Rate Limit 7.1.5** - Rate limiting middleware
- **Express Validator 7.0.1** - Input validation middleware
- **CORS 2.8.5** - Cross-Origin Resource Sharing

### Email & Communication

- **Nodemailer 6.9.7** - Email sending functionality
- **Multer 1.4.5-lts.1** - File upload handling

### Development Tools

- **Nodemon 3.0.2** - Auto-restart server during development
- **dotenv 16.3.1** - Environment variable management
- **ESLint** - Code linting (via react-scripts)

### Styling & Design

- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS transformation tool
- **Autoprefixer 10.4.21** - CSS vendor prefixing

### Testing

- **@testing-library/react 16.3.0** - React component testing utilities
- **@testing-library/jest-dom 6.6.3** - Custom Jest matchers
- **@testing-library/user-event 13.5.0** - User interaction simulation
- **@testing-library/dom 10.4.0** - DOM testing utilities

## 📁 Project Structure

```
iitiancraft/
├── backend/                 # Node.js/Express backend
│   ├── config.env          # Environment variables
│   ├── server.js           # Main server file
│   ├── db.js               # PostgreSQL connection
│   ├── models/             # Database models (MongoDB)
│   │   ├── User.js
│   │   ├── Contact.js
│   │   ├── Demo.js
│   │   └── Meeting.js
│   ├── routes/             # API routes
│   │   ├── auth.js
│   │   ├── contact.js
│   │   ├── demo.js
│   │   ├── meetings.js
│   │   ├── services.js
│   │   └── user.js
│   ├── middleware/         # Custom middleware
│   │   └── auth.js
│   ├── utils/             # Utility functions
│   │   └── emailService.js
│   └── sql/               # PostgreSQL schema files
│       ├── create_users_table.sql
│       └── create_meetings_table.sql
│
└── iitiancraft/            # React frontend
    ├── public/             # Static assets
    ├── src/
    │   ├── components/    # Reusable components
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   ├── HeroSection.jsx
    │   │   └── ...
    │   ├── pages/         # Page components
    │   │   ├── Home.jsx
    │   │   ├── About.jsx
    │   │   ├── Services/
    │   │   └── ...
    │   ├── App.js          # Main app component
    │   └── index.js        # Entry point
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- PostgreSQL (optional, for meeting features)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd iitiancraft
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd iitiancraft
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Configure Environment Variables**

   Create `backend/config.env`:
   ```env
   # MongoDB Configuration
   MONGODB_URI=mongodb://localhost:27017/iitiancraft
   # OR MongoDB Atlas
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/iitiancraft

   # PostgreSQL Configuration (Optional)
   DATABASE_URL=postgresql://username:password@localhost:5432/iitiancraft

   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRE=30d

   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password

   # Rate Limiting
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100
   ```

5. **Set Up Databases**

   **MongoDB:**
   - Install MongoDB locally or use MongoDB Atlas
   - Update `MONGODB_URI` in `config.env`

   **PostgreSQL (Optional):**
   ```bash
   createdb iitiancraft
   psql -d iitiancraft -f backend/sql/create_users_table.sql
   psql -d iitiancraft -f backend/sql/create_meetings_table.sql
   ```

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm run dev    # Development mode with auto-reload
   # OR
   npm start      # Production mode
   ```
   Backend runs on `http://localhost:5000`

2. **Start Frontend Development Server**
   ```bash
   cd iitiancraft
   npm start
   ```
   Frontend runs on `http://localhost:3000`

## 🎯 Features

### User Features
- ✅ Responsive design with dark/light mode toggle
- ✅ Service pages (Web Development, App Development, UI/UX, etc.)
- ✅ Contact form with email notifications
- ✅ Demo booking system
- ✅ Google Meet scheduling
- ✅ User authentication (Sign In/Sign Up)
- ✅ Restaurant app template showcase
- ✅ Project portfolio display

### Admin Features
- ✅ Admin dashboard for managing meetings
- ✅ Meeting status management (pending, confirmed, completed, cancelled)
- ✅ User management
- ✅ Contact form submissions management

### Technical Features
- ✅ RESTful API architecture
- ✅ JWT-based authentication
- ✅ Dual database support (MongoDB + PostgreSQL)
- ✅ Email notifications
- ✅ Rate limiting and security headers
- ✅ Input validation
- ✅ Error handling

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile

### Contact & Demo
- `POST /api/contact` - Submit contact form
- `POST /api/demo` - Book a demo
- `POST /api/meetings/schedule` - Schedule Google Meet

### Admin
- `GET /api/meetings` - Get all meetings (Admin)
- `PATCH /api/meetings/:id/status` - Update meeting status (Admin)

### Health Check
- `GET /api/health` - API health status

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- Rate limiting to prevent abuse
- CORS protection
- Security headers (Helmet.js)
- Input validation and sanitization
- Environment variable protection

## 🎨 Design Features

- Modern gradient-based UI
- Smooth animations (Framer Motion, Lottie)
- Responsive design (mobile, tablet, desktop)
- Dark mode support
- Interactive components
- Loading states and transitions

## 📝 Scripts

### Frontend
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🌐 Deployment

### Frontend
Build the React app:
```bash
cd iitiancraft
npm run build
```
Deploy the `build` folder to hosting services like Vercel, Netlify, or AWS.

### Backend
Deploy to platforms like:
- Heroku
- AWS EC2
- DigitalOcean
- Railway
- Render

Ensure environment variables are set in your hosting platform.

## 📄 License

ISC

## 👥 Author

IITIAN CRAFT

## 📞 Contact

- Email: info@iitiancraft.com
- Website: [Coming Soon]

---

**Note:** This is the first draft of the IITIAN CRAFT official website. Future updates and improvements are planned.

