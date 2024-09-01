# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Description

This project is a simple web application built with React, React Router, and Ant Design. It includes features for user registration, login, and protected routes. The application uses local storage to manage user authentication and provide a personalized experience.

## Features

- **User Registration**: Allows users to create an account with a username, email, and password. Validation is performed to ensure the password and confirmation password match, and checks are done to ensure the username and email are unique.
- **User Login**: Users can log in with their username and password. Authentication is verified against stored user data.
- **Protected Routes**: Certain routes are protected and require authentication. Users are redirected to the login page if they attempt to access a protected route without being logged in.
- **User Logout**: Users can log out, which removes their data from local storage and redirects them to the login page.
- **Personalized Greeting**: Displays the username of the logged-in user or a default greeting for guests.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Ashhad1200/reactQuery.git
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Start the Development Server**

   ```bash```
   npm run dev

   This command will start the Vite development server along with JSON Server instances for products, categories, and users on ports 3000, 3001, and 3002 respectively.
   Feel free to adjust the ports or paths if needed.
   ```

## Usage

### Registration

- Navigate to the registration page.
- Fill out the form with your username, email, and password.
- Submit the form to create a new account.

### Login

- Navigate to the login page.
- Enter your username and password.
- Submit the form to log in.

### Protected Routes

- Attempt to access protected routes. If you are not logged in, you will be redirected to the login page.

### Logout

- Click the "Log out" button in the navigation bar to log out.

## Components

- **App**: The main component of the application. Displays a welcome message and the username of the logged-in user.
- **LoginForm**: The form component for user login. Validates credentials and handles login logic.
- **RegistrationForm**: The form component for user registration. Validates user input and checks for unique usernames and emails.
- **Protected**: A higher-order component that ensures users are authenticated before accessing protected routes.
- **Navbar**: Contains navigation links and a logout button. Provides layout for navigating between different pages.

## Authentication

- **Local Storage**: User data is stored in `localStorage` under the key `loggedInUser`. The user’s username and other details are retrieved from this storage to display personalized content and manage authentication state.

## Hooks

- **useListUsers**: A custom hook to fetch and return the list of users from an API.
- **useRegister**: A custom hook to handle user registration via an API.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **React Router**: Routing library for handling navigation in the application.
- **Ant Design**: UI component library for building responsive and styled components.
- **React Query**: Data fetching library for handling server state and caching.

## Contributing

Feel free to submit issues or pull requests. Please follow the code style guidelines and include tests for new features.

## License

This project is licensed under the MIT License.

---
