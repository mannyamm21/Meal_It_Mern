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
User Authentication: Users can register, log in, and log out securely. Passwords are hashed for security.
Browsing Food Items: Users can view various food items available for ordering.
Adding Items to Cart: Users can add items to their cart for ordering.
Placing Orders: Users can place orders after adding items to their cart.
Order Tracking: Users can track the status of their orders using interactive maps.
Payment Integration: PayPal integration for secure and convenient payments.
Profile Management: Users can update their profiles and change passwords.
Order History: Users can view their order history and track past orders.

Installation
Prerequisites
Before getting started, ensure you have the following installed:
Node.js and npm: Install from Node.js official website.
MongoDB: Install from MongoDB official website.
Steps
Clone the repository:
bash
Copy code
git clone <repository_url>
Navigate to the project directory:
bash
Copy code
cd <project_directory>
Install dependencies for both frontend and backend:
bash
Copy code
cd frontend
npm install
cd ../backend
npm install
Set up environment variables:
Create a .env file in the backend directory.
Add MongoDB URI to the .env file:
makefile
Copy code
MONGO_URI=<your_mongodb_uri>
Seed sample data:
Run the following command in the backend directory to seed the database with sample data:
bash
Copy code
npm run seed
Start the development servers:
In one terminal, start the backend server:
bash
Copy code
cd backend
npm run dev
In another terminal, start the frontend server:
bash
Copy code
cd frontend
npm start
Access the application in your browser at http://localhost:3000.

Usage
Register a new account or log in with existing credentials.
Browse available food items, add them to the cart, and proceed to checkout.
Track the status of placed orders.
Update profile information and change passwords as needed.
View order history and details of past orders.

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

License
This project is licensed under the MIT License.
