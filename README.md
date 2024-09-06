# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Description

This project is a simple web application built with React, React Router, Ant Design, and React Query. It includes features for user registration, login, product management, and protected routes. The application uses JSON Server for backend APIs and stores data in JSON files.

## Features

- **User Registration and Login**: Users can register, log in, and access protected routes. Data is managed through local storage.
- **Product Management**: Users can create, update, and delete products. Products are fetched and displayed using React Query.
- **Custom Hooks**: We utilize various custom hooks to fetch data using `axios` and the `fetch` API.
- **Ant Design UI**: We use Ant Design (AntD) for the UI, providing a clean and responsive interface.
- **JSON Server**: The backend is mocked using JSON Server to simulate a database for products, categories, and users.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Ashhad1200/reactQuery.git
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

   This will start the Vite development server. We also use JSON Servers for simulating backend APIs:

   - Products API on port 3000
   - Categories API on port 3001
   - Users API on port 3003

## Usage

### Registration & Login

- Register as a new user, or log in with existing credentials.  
- The data is stored using the `axios` API, and user data is stored in `localStorage`.

### Product Management

- You can create, update, and delete products using custom hooks (`useCreateNewProduct`, `useUpdateProduct`, `useDeleteProduct`).
- Data is fetched using React Query with either the `fetch` API or `axios`.

### Protected Routes

- Access protected routes after login. If unauthenticated, users are redirected to the login page.

## Hooks

- **useListUsers**: Fetches the list of users using the `fetch` API.
- **useProducts**: Fetches products using the `fetch` API.
- **useCatagory**: Fetches categories from the API.
- **useCreateNewProduct**: Allows users to create new products using `axios`.
- **useUpdateProduct**: Updates product details using `axios`.
- **useDeleteProduct**: Deletes a product using `axios`.
- **useRegister**: Handles user registration using `axios`.
- **useLogin**: Manages user login and authentication using `axios`.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **React Router**: Handles navigation within the application.
- **Ant Design (AntD)**: UI component library for responsive and styled components.
- **React Query**: Manages data fetching and server state caching.
- **Axios**: HTTP client for making API requests.
- **JSON Server**: Mock server for simulating APIs and storing data.

## Contributing

Feel free to submit issues or pull requests. Please follow the code style guidelines and include tests for new features.

## License

This project is licensed under the MIT License.

---