# React Frontend with TailwindCSS, Tanstack React Query, Axios, and Redux Toolkit

This is a starter template for a React frontend application using TailwindCSS for styling, Tanstack React Query for data fetching, Axios for HTTP requests, and Redux Toolkit for state management.

## Requirements

- Node.js
- npm or yarn

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/RAJ-SUDHARSHAN/React_Starter_Template.git
    cd React_Starter_Template
    ```

2. **Install dependencies**:
    ```sh
    npm install
    # or if you use yarn
    yarn install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the project root and add the following variable:
    ```env
    REACT_APP_BASE_URL=http://localhost:8000
    ```

## Running the Application

1. **Start the React application**:
    ```sh
    npm start
    # or if you use yarn
    yarn start
    ```

    The application will be available at `http://localhost:3000`.

## Project Files

### `public/`

Contains the static assets for the project, including `index.html`, icons, and manifest files.

### `src/`

Contains the main source code for the React application.

- **`App.js`**: The main component that sets up routing and React Query.
- **`api/`**: Contains the API setup and endpoints.
    - **`index.js`**: Configures Axios with the base URL.
    - **`testAPI.js`**: Contains a sample API function to fetch data from the backend.
- **`components/`**: Directory for reusable components.
- **`containers/`**: Directory for container components.
    - **`TestPage/`**: A sample container component for testing API integration.
- **`index.css`**: Main CSS file that includes TailwindCSS imports.
- **`index.js`**: Entry point of the application.
- **`tailwind.config.js`**: Configuration file for TailwindCSS.
### Example Usage

To test the sample API, you can use the following endpoint:

- **GET `/api/v1/test_table`**: Retrieves all entries from the `test_table`.

## Testing the Application

1. **Set up and run the backend**:
    For the backend setup, please refer to the [FastAPI Starter Template](https://github.com/RAJ-SUDHARSHAN/FastAPI_Starter_Template) and follow the instructions provided in its README.

2. **Start the frontend application**:
    ```sh
    npm start
    # or if you use yarn
    yarn start
    ```

3. **Test the application**:
    After starting both the backend and frontend applications, go to `http://localhost:3000/test` in your browser. You should see the data fetched from the backend displayed in a table format.

## Additional Configuration

This template uses TailwindCSS for styling and is configured with the `tailwind.config.js` file. React Query is set up in `App.js` with a `QueryClientProvider`. Axios is configured in `api/index.js` to handle HTTP requests to the backend.

### TailwindCSS

TailwindCSS is a utility-first CSS framework. The configuration file (`tailwind.config.js`) allows customization of the default styles and themes.

### Tanstack React Query

React Query is a powerful data-fetching library that simplifies server-state management in React applications. It is set up in `App.js` with a `QueryClientProvider`.

### Axios

Axios is used for making HTTP requests. The configuration in `api/index.js` sets up the base URL for the backend API.
