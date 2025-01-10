
# Online Tutor Booking Platform - Backend

This is the **backend** repository for the Online grocery ecommerce. It handles the server-side logic, database operations, and API endpoints to support the frontend functionalities. The backend is built using **Node.js** and **Express.js**, with **mongoose** as the database.


## Links
**Backend Links**
- [backend github link]()
- [api Link on vercel]() +/endpoind 


**frontend Links**

- [Live Link1]()

- [frontend github link]()


## **Features**
- 🔒 **Authentication System**:
  - JWT-based authentication for secure access
- 📦 **API Endpoints**:
  - CRUD operations for users, tutors, and bookings
- 🔍 **Search Functionality** for filtering products

- 📊 **Data Management**:
  - create product update, delete read
- 🌐 Secure and production-ready server with proper error handling
- 🔄 **Pagination** 

---


## **Technologies Used**
- **Node.js** for server-side scripting
- **Express.js** for API and routing
- **MongoDB** with **Mongoose** for database management
- **JWT Authentication** for secure private routes
- **dotenv** for environment variable management
- **CORS** for handling cross-origin requests



## **API Endpoints**



### **Authentication**
- **Register a User**  
  `http://localhost:5000/api/auth/regiter`  
  Registers a new user in the system.

- **Login**  
  `POST /users`  
  Authenticates a user and provides a JWT token.

- **Logout**  
  `POST /logout`  
  Logs out the user and clears the authentication token from cookies.