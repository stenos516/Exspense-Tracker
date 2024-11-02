import React, { useState } from "react";
import { Provider } from "react-redux";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import store from "./app/store";
import Navbar from "./components/Navbar";
import AddExpenseForm from "./features/AddExpenseForm";
import ExpensesList from "./features/expenses/ExpensesList";
import Balance from "./components/Balance";
import {jwtDecode} from "jwt-decode";
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    const userObject = jwtDecode(credentialResponse.credential); 
    const nickname = userObject.given_name;
    localStorage.setItem('nickname', nickname);

    setIsAuthenticated(true);
    console.log("Token di Google ricevuto:", credentialResponse.credential);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('expenses');
  localStorage.removeItem('income');
  localStorage.removeItem('nickname');
  }; 

  return (
    <GoogleOAuthProvider clientId="918292404870-p4snabp9r1iir3kpgcombb9mrd72v6al.apps.googleusercontent.com">
      <Provider store={store}>
        <Navbar />
        <div className="container">
          {!isAuthenticated ? (
            <div>
              <h2>Login for access</h2>
              <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.log("Login failed")} />
            </div>
          ) : (
            <div>
              <button onClick={handleLogout}>Logout</button>
              <h2>Welcome, {localStorage.getItem('nickname')}!</h2> 
              <Balance />
              <AddExpenseForm />
              <ExpensesList />
            </div>
          )}
        </div>
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
