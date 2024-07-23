Meal It

Food Ordering and Delivery Application
This project is a comprehensive demonstration of building a full-stack web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It includes various features and functionalities ranging from user authentication to CRUD operations, integrating with external services like PayPal for payments, and utilizing maps for order tracking.

Table of Contents
Project Overview
Features
Installation
Usage
Folder Structure
Dependencies
Contributing
License

Project Overview
This project aims to provide a step-by-step guide on building a web application from scratch using modern web development technologies. The application is an online food ordering platform with various functionalities like user authentication, browsing food items, adding items to the cart, placing orders, and tracking orders.

The application architecture is divided into frontend and backend components. The frontend is developed using React.js, while the backend is built with Node.js and Express.js. Data is stored in MongoDB, and APIs are provided for frontend-backend communication.

Features
User Authentication (JWT)
Responsive Design
Real-time Data Fetching
PayPal Payment Integration
Optimized Database Queries


Tech Stack
Frontend: React, Redux
Backend: Node.js, Express
Database: MongoDB
Payment Gateway: PayPal
Others: JWT, Axios, CSS3


Installation
To get a local copy up and running, follow these steps:

1.Clone the repository:
git clone https://github.com/mannyamm21/Meal_It_Mern.git

2.Install dependencies:
cd backend
npm install
cd frontend
npm install

3.Create a .env file in the root directory and add the following variables
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id


Usage
1.Start the development server:
npm run dev
2.Open your browser and navigate to http://localhost:3000.


Project Flow

1.User Registration & Authentication:
-Users can sign up and log in using their email and password.
-JWT is used for securing the authentication process.

2.Placing Orders:
-Users can select meals and place orders.
-Orders are stored in MongoDB and linked to the user’s account.

3.Payment Processing:
-Secure payments are processed using the PayPal gateway.
-Users can complete transactions seamlessly within the app.

4.Order History:
-Users can view their past orders and transaction history.
-All data is fetched securely from the database.


API Endpoints
Here are some of the key API endpoints:

1.User Routes:
-POST /api/users/register - Register a new user
-POST /api/users/login - User login

2.Order Routes:
-POST /api/orders - Place a new order
-GET /api/orders - Get user’s order history

Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

-Fork the Project
-Create your Feature Branch (git checkout -b feature/AmazingFeature)
-Commit your Changes (git commit -m 'Add some AmazingFeature')
-Push to the Branch (git push origin feature/AmazingFeature)
-Open a Pull Request


Folder Structure
project-root
│
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   ├── utils
│   │   └── App.js
│   └── package.json
│
└── backend
    ├── src
    │   ├── controllers
    │   ├── middleware
    │   ├── models
    │   ├── routes
    │   ├── config
    │   └── server.js
    └── package.json
    
Dependencies
Frontend:
React.js
React Router
Axios
React-Leaflet
React PayPal JS
React Toastify
Leaflet


Backend:
Express.js
Mongoose
Axios
Bcryptjs
Cors
Dotenv
Express Async Handler
Jsonwebtoken
Nodemon
Contributing
Contributions are welcome! Feel free to submit issues or pull requests.


