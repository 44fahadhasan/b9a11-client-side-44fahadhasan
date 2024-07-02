## Newspaper Website Project

## overview
The newspaper website project provides a platform catering to both normal and premium users, offering access to a variety of news articles. Users can subscribe to premium content using integrated payment methods. The admin dashboard facilitates user and content management, ensuring smooth operation and engagement.

## Key Features

## User Roles
- Normal Users: Access to free news content.
- Premium Users: Access to exclusive premium news content upon subscription.

## Subscription System
- Users can upgrade to premium membership using a payment method integrated into the platform.

## Admin Dashboard
- Allows administrators to manage users, including creation, deletion, and updating user profiles.
- Provides functionalities for managing news content, including creation, deletion, and updating posts for both premium and normal user sections.

## Technologies Used
- Frontend: React.js, Tailwind css 
- Backend: Node.js, Express.js
- Database: MongoDB
- Payment Gateway Integration: Stripe

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository.
2. Install the dependencies:
   - Navigate to the `b9a12-client-side-44fahadhasan` directory and run `npm install`.
   - Navigate to the `b9a12-side-side-44fahadhasan` directory and run `npm install`.
3. Set up Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or select an existing one.
   - Go to the project settings or service accounts section.
   - Click on "Generate new private key" or a similar option.
   
4. Set up Environment Variables:
   - In the `b9a12-client-side-44fahadhasan` directory, create a new file named `.env` based on the `.env.local` file.
   - Update the values of the environment variables in the `.env` file with your Firebase configuration details.
   - In the `b9a12-side-side-44fahadhasan` directory, create a new file named `.env` based on the `.env` file.
   - Update the values of the environment variables in the `.env` file according to your preferences. For example, set the `PORT` variable to specify the desired port for the server and set `MONGO_URI` to your MongoDB connection URI.
5. Run the server:
   - Navigate to the `b9a12-side-side-44fahadhasan` directory and run `npm run dev`.
6. Run the client:
   - Navigate to the `b9a12-client-side-44fahadhasan` directory and run `npm run dev`.
7. The application will be accessible at `http://localhost:3000`.
