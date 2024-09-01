const App = () => {
  // Retrieve user data from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  // Extract user name if available
  const userName = loggedInUser ? loggedInUser.username : 'Guest';

  return (
    <>
      <h1>This is a simple application with React Query and React Router 6</h1>
      <h1>Welcome, {userName}!</h1>
    </>
  );
};

export default App;
