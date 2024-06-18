# JobBoard

Team Members
Yiğit Özay (55799) 
Avaz Majidov (55796) 
Paul Howard (56363) 
Sikombo Sinqobile (54750) 
Rustamov Javanshir (56943) 



1. Introduction
The JobBoard Project is a web application designed to connect job seekers with potential employers. It provides a platform for users to search for job listings more than 1 job site in time  and apply for jobs. The project aims to streamline the job search process by offering a centralized online platform.

2. Project Overview
The JobBoard project is built using the following technologies:
Frontend: React
Database and Authentication: Firebase

3. Launching The Application
  Steps
  Clone the repository:
  bash
  git clone https://github.com/yigitozay/JobBoard.git
  cd jobboard

  Install dependencies:
  bash
  npm install
  
  Set up Firebase:
  Go to the Firebase Console and create a new project.
  In the project settings, add a new web app and copy the Firebase configuration details.
  Create a .env file in the root directory of the project and add your Firebase configuration:
  
  makefile
  REACT_APP_FIREBASE_API_KEY=your_api_key
  REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
  REACT_APP_FIREBASE_PROJECT_ID=your_project_id
  REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
  REACT_APP_FIREBASE_APP_ID=your_app_id
  
  Start the application:
  bash
  npm start
  
  Access the application: Open your web browser and go to http://localhost:3000
