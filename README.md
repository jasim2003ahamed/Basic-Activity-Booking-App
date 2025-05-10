
PORT=5000
MONGO_URI=mongodb://localhost:27017/activity_booking_db
JWT_SECRET="ZjB3F@qE4sT!nY8m#Ue1PkVrA%LcX^Wt"

---

## How to Run Locally

bash
# Install dependencies
npm install

# Start server
npm run dev


Make sure MongoDB is running on your system (mongodb://localhost:27017).

---

## API Endpoints

### Auth
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login and get JWT token

### Activities
- GET /api/activities - List all available activities
- POST /api/activities/book - Book an activity (token required)
- GET /api/activities/my-bookings - View user's bookings (token required)

---

##  Postman Collection

Test the API easily using the Postman collection below:

*[View Postman Collection](https://jasimahamed-5823100.postman.co/workspace/Jasim-Ahamed's-Workspace~9993fd28-905e-41b8-8b40-74d02b6374af/collection/44821174-bd9b3248-ae93-44a5-aa01-3769cbdfb8f8?action=share&creator=44821174)*

> Import this link into Postman to try out all endpoints.

---

## Bonus Implemented

- JWT Authentication with middleware
- Password hashing with bcrypt
- Proper modular folder structure
- Express-validator for input validation
- MongoDB populate() used for booking-user-activity relation

---

## Author

*Jasim Ahamed*
