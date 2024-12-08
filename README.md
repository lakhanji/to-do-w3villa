# To-Do-List

The To-Do List is a user-friendly web application designed to help individuals efficiently manage their tasks and stay organized. This application allows users to create, update, and delete tasks with ease. Each task includes a title and an optional description, providing clarity and context for better task management

## Features

Task Creation: Users can quickly add tasks by specifying a title and an optional description.
Task Update: Existing tasks can be modified to reflect changes in priorities or details.
Task Deletion: Completed or unnecessary tasks can be easily removed to maintain a clutter-free list.
Intuitive Interface: A clean and simple design ensures seamless navigation and usability for all users.
User Authentication: Secure sign-up and log-in functionality enables users to access their personalized to-do lists.
Responsive Design: The application is optimized for various screen sizes, ensuring a seamless experience on desktops, tablets, and smartphones.
Intuitive Interface*: User-friendly dark minimal interface for easy task management.

## Screenshots

![Home Page](https://i.ibb.co/RB4yDvL/1st-page.png)

![About Us](https://i.ibb.co/HdjSnNs/2nd-pge.png)

![SignUp](https://i.ibb.co/bL5BTVw/3rdpge.png)

![Todo List](https://i.ibb.co/5xH5XBN/4th-page.png)


## Backend API Documentation

### Sign-Up API

- *Endpoint*: /api/v1/register
- *Method*: POST
- *Description*: Creates a new user account with the provided name, email, and password.
- *Parameters*:
-   - name (string): User's chosen name.
  - email (string): User's email address.
  - password (string): User's chosen password.
- *Response*:
  - message (string): Success message or error message if user already exists.

### Sign-In API

- *Endpoint*: /api/v1/login
- *Method*: POST
- *Description*: Allows existing users to log in with their email and password.
- *Parameters*:
  - email (string): User's email address.
  - password (string): User's password.
- *Response*:
  - others (object): User details excluding the password.
  - message (string): Error message if login fails.

### Create Task API

- *Endpoint*: /api/v2/addTask
- *Method*: POST
- *Description*: Adds a new task to the user's to-do list.
- *Parameters*:
  - title (string): Title of the task.
  - body (string): Description of the task.
  - email (string): User's email address.
- *Response*:
  - list (object): Details of the added task.

### Update Task API

- *Endpoint*: /api/v2/updateTask/:id
- *Method*: PUT
- *Description*: Updates an existing task in the user's to-do list.
- *Parameters*:
    - title (string): New title for the task.
    - body (string): New description for the task.
    - email (string): User's email address.
- *Response*:
    - message (string): Success message indicating the task was updated.

### Delete Task API

- *Endpoint*: /api/v2/deleteTask/:id
- *Method*: DELETE
- *Description*: Deletes a task from the user's to-do list.
- *Parameters*:
    - id (string): ID of the task to be deleted.
    - email (string): User's email address.
- *Response*:
    - message (string): Success message indicating the task was deleted.

### Get Tasks API

- *Endpoint*: /api/v2/getTask/:id
- *Method*: GET
- *Description*: Retrieves all tasks belonging to a user.
- *Parameters*:
    - id (string): ID of the user whose tasks are to be retrieved.
- *Response*:
    - list (array): Array of task objects belonging to the user.

## Technologies Used

- *Frontend*:
  - React.js: For user interfaces.
  - React Router: For Routing in applications.
  - Bootstrap: For responsive design.
  - Next Icons: Icon library.
  - Axios: For making requests to the backend.

- *Backend*:
  - Node.js: For server-side logic.
  - Express.js: For building APIs and handling HTTP requests.
  - MongoDB: For storing user data and task information.
  - Mongoose: MongoDB object modeling for Node.js applications.
  - bcrypt.js: Library for hashing passwords securely.

## Getting Started

To run To-Do-List locally, follow these steps:

1. Clone the repository:
    bash
    git clone git@github.com:lakhanji/to-do-w3villa.git

2. Navigate to the project directory:
    bash
    cd to-do-w3villa

3. Install dependencies for the frontend and backend:
    bash
    cd frontend
    npm install

    cd server
    npm install

4. Start the frontend server:
    bash
    npm start

5. Start the backend server:
    ```bash
    npm run dev

6. Open your browser and navigate to http://localhost:3000 to access To-Do-List.

## Contact

Feel free to reach out to ljmishra1112002@gmail.com with any questions or feedback!!

## License

This project is open-source and available. Feel free to contribute.
