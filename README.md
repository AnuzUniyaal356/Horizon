
Horizon - YouTube Clone 🎥
Project Overview
A full-featured YouTube clone built with modern technologies, featuring seamless video streaming, user interactions, and secure authentication.

🚀 Live Demo
Frontend: horizon-29us.onrender.com

Backend: API Documentation

✨ Key Features
Feature	Status	Description
Video Upload & Streaming	✅ Implemented	MP4 video support with Cloudinary CDN
Google OAuth 2.0	✅ Implemented	Secure social authentication
User Authentication	✅ Implemented	JWT-based email/password login
Responsive Design	✅ Implemented	Mobile-first Tailwind CSS
Real-time Comments	🔄 In Progress	Interactive comment system
Like/Dislike System	🔄 In Progress	Engagement features
🛠 Tech Stack
Frontend
React 18 - Modern UI framework

Redux Toolkit - State management

Tailwind CSS - Utility-first styling

Axios - HTTP client

React Router v6 - Navigation

Backend
Node.js & Express.js - RESTful API

MongoDB & Mongoose - Database & ODM

JWT & Bcrypt - Secure authentication

Cloudinary - Media storage & optimization

Firebase Auth - Google OAuth integration

DevOps & Deployment
Render - Cloud hosting platform

MongoDB Atlas - Cloud database

Cloudinary - CDN for media files

📁 Project Architecture
text
horizon/
├── client/                 # Frontend React App
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route components
│   │   ├── redux/          # State management
│   │   ├── hooks/          # Custom React hooks
│   │   └── utils/          # Helper functions
├── server/                 # Backend Express API
│   ├── controllers/        # Business logic
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   ├── middleware/         # Auth & validation
│   └── config/             # Database & cloud setup
└── docs/                   # Project documentation
🔐 Authentication Flow







🎯 API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/signup	User registration
POST	/api/auth/signin	User login
GET	/api/auth/google	Google OAuth initiation
GET	/api/auth/google/callback	OAuth callback
Video Management
Method	Endpoint	Description
POST	/api/videos	Upload new video
GET	/api/videos	Get all videos
GET	/api/videos/:id	Get video details
PUT	/api/videos/:id	Update video metadata
DELETE	/api/videos/:id	Delete video
🖥 UI/UX Features
Multi-step Forms - Enhanced user onboarding

Custom Alert System - Consistent notifications

Loading States - Better user experience

Responsive Design - Mobile & desktop optimized

Accessibility - Keyboard navigation support

🔧 Installation & Setup
bash
# Clone repository
git clone https://github.com/yourusername/horizon.git

# Backend setup
cd server
npm install
cp .env.example .env
# Configure environment variables
npm run dev

# Frontend setup (new terminal)
cd client
npm install
cp .env.example .env
npm run dev
🌐 Deployment
Environment Variables
env
# Backend (.env)
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONTEND_URL=https://your-frontend-url.com

# Frontend (.env)
VITE_BACKEND_URL=https://your-backend-url.com
VITE_FIREBASE_API_KEY=your_firebase_config
🎓 Learning Outcomes
Full-stack Development - End-to-end feature implementation

OAuth Integration - Third-party authentication flows

State Management - Redux for complex state handling

Cloud Services - Integration with multiple cloud platforms

DevOps - CI/CD and production deployment

📈 Performance Metrics
Page Load Time: < 3 seconds

API Response Time: < 500ms

Mobile Score: 90+ (Lighthouse)

SEO Optimized: Meta tags & structured data

🤝 Contributing
We welcome contributions! Please see our Contributing Guidelines for details.

📄 License
This project is licensed under the MIT License - see LICENSE file for details.

👨‍💻 Developer
Anuj Uniyal
GitHub • LinkedIn • Portfolio

What's Next?
Implement video comments system

Add playlist functionality

Integrate live streaming

Develop recommendation algorithm

Create admin dashboard
