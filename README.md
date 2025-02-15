# To-Do App with React, TailwindCSS, and TypeScript

I created  a simple, responsive, and interactive app that helps you manage your tasks. It’s built with React-vite, TailwindCSS, and TypeScript, and it includes features like adding, deleting, and marking tasks as complete. Plus, it has a dark mode toggle


# Features
- Add Tasks: Easily add new tasks with a title and mark them as complete or incomplete.
- Manage Tasks: Mark tasks as complete, undo completion, or delete them.
- Filter Tasks: View all tasks, only completed tasks, or only incomplete tasks.
- Task Details: Click on a task to see more details.
- Dark Mode: Toggle between light and dark mode for a comfortable viewing experience.
- Responsive Design: Works seamlessly on mobile, tablet, and desktop screens.

# Live Demo
Check out the live version of the app here: https://todo-app-hey2.vercel.app


# How to Run the Project Locally
here is a  step-by-step instructions to get the app up and running on your end.

# Step 1: Prerequisites
Before you start, make sure you have the following installed on your machine:
1. Node.js
2. Git

# Step 2: Clone the Repository
1. Clone git
  
3. Navigate into the project folder:
   cd TodoApp
   

# Step 3: Install Dependencies
1. Run these commands to install all the required dependencies:
   npm install
   
   This will install:
   - React-vite
   - TailwindCSS
   - TypeScript
   - Axios (for API calls)
   - React Router (for navigation)


#  Step 4: Start the Development Server
1. Once the dependencies are installed, start the development server by running:
   npm start
   
2. The app will automatically open in your default browser at `http://localhost`. If it doesn’t, open your browser and navigate to that address.


#  Step 5: Checkout the App
Now that the app is running, you can:
- Add a new task and your name: Use the form at the top of the homepage.
- Mark tasks as complete/incomplete: Click the "Complete" or "Undo" button.
- Delete tasks: Click the "Delete" button.
- Filter tasks: Use the dropdown to view all, completed, or incomplete tasks.
- View task details: Click on a task to see its details.
- Toggle dark mode: Use the dark mode toggle .


# Folder Structure
Here’s a quick overview of the project structure:

src
components       - Reusable components like TodoList, TodoItem, etc.
 pages           - Pages like HomePage and TaskDetailsPage
types.ts         - TypeScript types for the app
 App.tsx          - Main app component with routing
 index.tsx        - Entry point of the app



# Tech Stack
- React-vite: For building the user interface.
- TailwindCSS: For styling the app .
- TypeScript: For type safety .
- React Router: For navigation between pages.
- Axios: For fetching tasks from an API.


# Troubleshooting
If you run into any issues:
1. Dependencies not installing: Make sure you have the latest version of Node.js and npm installed and alsomake sure you follow the tailwind installation for vite on the tailwind site.
2. App not running: Check the terminal for error messages and make sure all dependencies are installed.
