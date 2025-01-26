
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



### **Authentication** ======================================== ##
- **Register a User  ##POST##**  
  `http://localhost:5000/api/auth/register`  
  Registers a new user in the system.

- **Login  ##POST##**  
   `http://localhost:5000/api/auth/login`
  Authenticates a user and provides a JWT token.
  - **Login with google information store on database. ##POST##**  
   `http://localhost:5000/api/auth/google`
  

- **Logout ##POST##**  
  `http://localhost:5000/api/auth/logout`  
  Logs out the user and clears the authentication token from cookies.

  ## ===========================user Related APIS=========================== ##
  - **UPDATE a User BY userId ##PUT##**  
  `http://localhost:5000/api/user/update/{id}`  
 - **delete a user by ID ##DELETE##**  
  `http://localhost:5000/api/user/{id}`  

 - **get single user by ID ##Get##**  
  `http://localhost:5000/api/user/find/{id}`


 - **get All user  ##Get##**  
  `http://localhost:5000/api/user/userList`

 - **get user stats  ##Get##**  
  `http://localhost:5000/api/user/stats`

 - **updated a specefic user profile picture  ##Put##**  
  `http://localhost:5000/api/user/updatedprofilepic/{userId}`



  ## ===========================PRODUCT Related APIS=========================== ##


 - **create a New product   ##Post##**  
  `http://localhost:5000/api/product/createproduct`

- **update specepic  product  by ID ##Put##**  
  `http://localhost:5000/api/product/updateProduct/{id}`


- **delete specepic  product  by ID ##delete##**  
  `http://localhost:5000/api/product/{id}`

- **Get specepic  product  by ID ##Get##**  
  `http://localhost:5000/api/find/product/{id}`

- **Get All  product   ##Get##**  
  `http://localhost:5000/api/product/productList`


