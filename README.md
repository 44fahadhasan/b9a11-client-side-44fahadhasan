## project overview

## Feature

## Technologies Used
- React
- Tailwind CSS



## Technologies Used

- TailwindCSS, React used in front-end 
- Firebase for authentication
- Node/Express for creating API endpoints
- MongoDB for database 

## Basic Features

- Users can register/login via email and password.
- Profile page where users can update their avatar and display name.
- Dark mode can be enabled.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository.
2. Install the dependencies:
   - Navigate to the `frontend` directory and run `npm install`.
   - Navigate to the `server` directory and run `npm install`.
3. Set up Firebase:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or select an existing one.
   - Go to the project settings or service accounts section.
   - Click on "Generate new private key" or a similar option.
   
4. Set up Environment Variables:
   - In the `frontend` directory, create a new file named `.env` based on the `.env.example` file.
   - Update the values of the environment variables in the `.env` file with your Firebase configuration details.
   - In the root directory, create a new file named `.env` based on the `.env.example` file.
   - Update the values of the environment variables in the `.env` file according to your preferences. For example, set the `PORT` variable to specify the desired port for the server and set `MONGO_URI` to your MongoDB connection URI.
5. Run the server:
   - Navigate to the `server` directory and run `npm run start`.
6. Run the client:
   - Navigate to the `frontend` directory and run `npm start`.
7. The application will be accessible at `http://localhost:3000`.
