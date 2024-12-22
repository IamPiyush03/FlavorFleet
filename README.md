# FlavorFleet Food Ordering Web Application (MERN Stack)

## Overview
A MERN stack-based food ordering application providing features like restaurant browsing, menu viewing, cart management, and order placement.

## Features
- User Authentication: Registration, login, and profile management.
- Browse Restaurants: View menus and ratings.
- Food Ordering: Add items to cart, checkout, and make payments.
- Admin Features: Manage restaurants and orders.

## Tech Stack
- **Frontend**: React.js, React Router, Material-UI, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mern-food-ordering
   ```
2. Install dependencies:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Configure `.env` in backend with:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```
4. Run the app:
   ```bash
   cd backend && npm start
   cd ../frontend && npm start
   ```
5. Access at `http://localhost:5173`.

## Project Structure
- **Backend**: Controllers, Models, Routes, Middleware, Server
- **Frontend**: Components, Pages, Context, Utils, App.js
